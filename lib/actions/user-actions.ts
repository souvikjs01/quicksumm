'use server'

import { auth } from "@clerk/nextjs/server"
import { prisma } from "../prisma"

export const isUserPro = async (id: string) => {
    const { userId } = await auth()
    if(!userId) {
        throw new Error("Unauthorized")
    }
    
    let isPro = false;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                firstName: true,
                quota: true,
                stripeCustomerId: true,
                subscription: true
            }
        })
        if(!user) {
            return { success: false, error: "User not found"}
        }
        if(user.stripeCustomerId && user.subscription) {
            isPro = true;
        }

        const data = {
            name: user.firstName,
            pro: isPro,
            quotaCount: user.quota,
        }
        return { success: true, data }
    } catch (error) {
        console.log("Internal server error " + error);
        return {success: false, error: "Internal server error " + error}
    }
}