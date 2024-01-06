import React from "react";
import { db } from "@/lib/firebase";
import { auth } from "@clerk/nextjs";
import { collection, getDocs, query, where } from "firebase/firestore";
import SuggestCard from "@/components/card/SuggestCard";
import Empty from "@/components/shared/Empty";
import Header from "@/components/shared/Header";
import ListItem from "@/components/list/ListItem";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



const getData = async (uid: string, type: "files" | "folders") => {
  let data: any[] = [];
  const q = query(
    collection(db, type),
    where("uid", "==", uid),
    where("isArchive", "==", false),
    where("isStar", "==", true)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });

  return data;
};

const page = async () => {
  const { userId } = auth();
  const folders = await getData(userId!, "folders");
  const files = await getData(userId!, "files");

  return (
    <>
      <Header label="Starred" />
      {[...folders, ...files].length === 0 ? (
        <Empty />
      ) : (
        <>
          <div className="text-sm opacity-70 mt-6">Suggested</div>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {files.map((file) => (
              <SuggestCard item={file} key={file.id} />
            ))}
          </div>
          <div className="text-sm opacity-70 mt-6">Folders</div>
          <Table className="mt-4">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Created at</TableHead>
                <TableHead>File size</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {folders.map((folder) => (
                <ListItem key={folder.id} item={folder} />
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  );
};

export default page;