import { getAllBlogs } from "@/api/blog.api";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  try {
    const data = await getAllBlogs(Number(searchParams.get("limit")));
    if (data)
      return NextResponse.json(
        { message: "success", data: data },
        { status: 200 }
      );
  } catch (error: unknown) {
    console.log(error);
  }
  return NextResponse.json(
    { error: "Something was happended" },
    { status: 500 }
  );
}
