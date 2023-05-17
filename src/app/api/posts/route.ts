import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const posts = [""]
    return NextResponse.json({ posts })
}