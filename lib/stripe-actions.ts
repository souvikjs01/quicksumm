'use server'

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { stripe } from "./stripe"

export async function createCheckoutSession() {
    const { userId } = await auth()
    if(!userId) return redirect('/sign-in')

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price: 'price_1R3gt6KBWHUg8QODqWqANWjO',
                quantity: 1
            }
        ],
        mode: 'subscription',
        success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment/cancel`,
        client_reference_id: userId,
    })
    redirect(session.url as string)
}