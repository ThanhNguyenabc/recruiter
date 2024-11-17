"use server";

import { sendToAirtable } from "@/lib/airtable";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { data = {} } = await request.json();
    if (!data) {
      return NextResponse.json({ error: "Data is missing" }, { status: 403 });
    }
    console.log(data);
    const records = await sendToAirtable("Contacts", {
      Type: data["contactType"],
      Name: data["name"] || "",
      Email: data["email"] || "",
      Phone: data["phone"] || "",
      Location: data["location"] || "",
      "Role Seeking": data["roleSeeking"] || "",
      Salary: data["salary"] || "",
      "Role Hiring": data["roleHiring"] || "",
      "Job Title": data["jobTitle"] || "",
      Company: data["company"] || "",
    });

    if (records)
      return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
    return NextResponse.json(
      { error: "Something was happended" },
      { status: 500 }
    );
  }
}
