import { submitMaintenanceContact } from "@/api/job.api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { data = {} } = await request.json();

    if (!data) {
      return NextResponse.json({ error: "Data is missing" }, { status: 403 });
    }

    const { name, email, phone, message } = data;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "name, email, phone, and message are all required" },
        { status: 400 },
      );
    }

    const success = await submitMaintenanceContact({
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    });

    if (success) {
      return NextResponse.json({ message: "success" }, { status: 200 });
    }
  } catch (error: unknown) {
    console.log(error);
  }

  return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
}
