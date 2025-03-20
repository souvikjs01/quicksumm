import { prisma } from "@/lib/prisma"
import { stripe } from "@/lib/stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(req: Request) {
    const body = await req.text()
    const signature = (await headers()).get('Stripe-Signature') as string
    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
    } catch (error) {
        return NextResponse.json({message: 'Invalid signature ' + error }, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session
    
    if(event.type === 'checkout.session.completed') {
        const userId = session.client_reference_id;
        const stripeSubscriptionId = session.subscription as string
        
        if (!userId || !stripeSubscriptionId) {
            console.error("Missing required data in session:", session);
            return NextResponse.json(
              { message: "Missing required data" },
              { status: 400 }
            );
        }

        try {
            const subscription = await stripe.subscriptions.retrieve(stripeSubscriptionId);
            
            await prisma.user.update({
              where: { id: userId },
              data: {
                quota: 60, 
                stripeCustomerId: session.customer as string, 
              },
            });
            
            await prisma.subscription.upsert({
              where: { userId: userId },
              update: {
                stripeSubscriptionId: stripeSubscriptionId,
                currentPeriodStart: new Date(subscription.current_period_start * 1000),
                currentPeriodEnd: new Date(subscription.current_period_end * 1000),
              },
              create: {
                stripeSubscriptionId: stripeSubscriptionId,
                currentPeriodStart: new Date(subscription.current_period_start * 1000),
                currentPeriodEnd: new Date(subscription.current_period_end * 1000),
                userId: userId,
              },
            });
        } catch (error) {
            console.error("Error updating database:", error);
            return NextResponse.json(
              { message: "Internal server error" },
              { status: 500 }
            );
        }
        
    }

    return NextResponse.json({ received: true }, { status: 200 });
}