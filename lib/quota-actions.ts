'use server'

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function manageQuota() {
  const { userId } = await auth()
  try {
    if (!userId) return redirect('/sign-in');

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return { error: "User not found", upgrade: false, status: 404 }

    if (user.quota <= 0) {
      return { error: "Quota exceeded", upgrade: true, status: 403 };
    }

    // Decrease the quota by 1
    await prisma.user.update({
        where: { 
            id: userId 
        },
        data: { 
            quota: user.quota - 1 
        },
    });

    return { success: true, status: 200 };
  } catch (error) {
    console.error("Error decreasing quota:", error);
    return { error: "Internal server error " + error ,  status: 500 };
  }
}
