import { NextResponse } from "next/server";
import stripeClient from "@/lib/stripe";

export async function POST(req: Request) {
    try {
        const public_domain = process.env.NEXT_PUBLIC_DOMAIN

        const { email, userId, priceId, name } = await req.json()

        const isCustomerExist = await stripeClient.customers.list({ email });

        let customer;
    
        if (isCustomerExist.data.length) {
          customer = isCustomerExist.data[0];
        }

        if (!customer) {
            customer = await stripeClient.customers.create({
              email,
              metadata: { userId },
              name
            });
        }

        const subscription = await stripeClient.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            line_items: [{ price: priceId, quantity: 1 }],
            customer: customer.id,
            success_url: `${public_domain}`,
            cancel_url: `${public_domain}`,
        });

        const subscriptions = await stripeClient.subscriptions.list({
            customer: customer.id,
        });
      
        const isSubscribed = subscriptions.data.find(
            (sub) => sub.status === "active"
        );
      
        if (isSubscribed) {
            const portal = await stripeClient.billingPortal.sessions.create({
              customer: customer.id,
              return_url: `${public_domain}`,
            });
      
            return NextResponse.json(portal.url);
        } else {
            const subscription = await stripeClient.checkout.sessions.create({
              mode: "subscription",
              payment_method_types: ["card"],
              line_items: [{ price: priceId, quantity: 1 }],
              customer: customer.id,
              success_url: `${public_domain}`,
              cancel_url: `${public_domain}`,
            });
    
            return NextResponse.json(subscription.url);
        }
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}

export async function GET(req: Request) {
    try {
      const { searchParams } = new URL(req.url);
      const email = searchParams.get("email");
  
      const customer = await stripeClient.customers.list({ email: email! });
  
      if (!customer.data.length) return NextResponse.json("Basic");
  
      const subscription = await stripeClient.subscriptions.list({
        customer: customer.data[0].id,
      });
  
      if (!subscription.data.length) return NextResponse.json("Basic");
  
      return NextResponse.json("Pro");
    } catch (error) {
      return NextResponse.json(error, { status: 500 });
    }
  }