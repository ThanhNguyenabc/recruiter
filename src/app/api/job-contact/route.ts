

import { submitJobContact } from "@/api/job.api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { data = {} } = await request.json();
    if (!data) {
      return NextResponse.json({ error: "Data is missing" }, { status: 403 });
    }

    const requestData = {
      Name: data["name"] || "",
      Email: data["email"] || "",
      Phone: data["phone"] || "",
      Message: data["message"] || "",
    };

    const success = await submitJobContact(requestData);
    if (success)
      return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
  }
  return NextResponse.json(
    { error: "Something was happended" },
    { status: 500 }
  );
}
