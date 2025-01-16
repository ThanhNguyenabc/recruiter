import { submitContact } from "@/api/job.api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { data = {} } = await request.json();
    if (!data) {
      return NextResponse.json({ error: "Data is missing" }, { status: 403 });
    }
    const body = {
      Type: data["contactType"],
      Name: data["name"] || "",
      Email: data["email"] || "",
      Phone: data["phone"] || "",
      Location: data["location"] || "",
      RoleSeeking: data["roleSeeking"] || "",
      Salary: data["salary"] || "",
      RoleHiring: data["roleHiring"] || "",
      JobTitle: data["jobTitle"] || "",
      Company: data["company"] || "",
    };
    const records = await submitContact(body);

    if (records)
      return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
  }
  return NextResponse.json(
    { error: "Something was happended" },
    { status: 500 }
  );
}
