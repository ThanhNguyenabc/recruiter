import { isDuplicateJobApplication, submitJobContact } from "@/api/job.api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { data = {} } = await request.json();
    if (!data) {
      return NextResponse.json({ error: "Data is missing" }, { status: 403 });
    }

    const email = data["email"] || "";
    const phone = data["phone"] || "";

    const isDuplicate = await isDuplicateJobApplication(email, phone);

    if (isDuplicate) {
      return NextResponse.json(
        { error: "You have already submitted an application with this email or phone number." },
        { status: 409 }
      );
    }

    const requestData = {
      Name: data["name"] || "",
      Email: email,
      Phone: phone,
      Message: data["message"] || "",
    };

    const success = await submitJobContact(requestData);
    if (success)
      return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: unknown) {
    console.log(error);
  }
  return NextResponse.json(
    { error: "Something went wrong" },
    { status: 500 }
  );
}
