import { getJobBySlug } from "@/api/job.api";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();
    if (!slug)
      return NextResponse.json(
        { error: "Something was happended" },
        { status: 500 }
      );
    const job = await getJobBySlug(slug);
    return NextResponse.json(
      { message: "success", data: job },
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
