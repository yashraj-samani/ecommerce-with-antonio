import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = await auth();
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
