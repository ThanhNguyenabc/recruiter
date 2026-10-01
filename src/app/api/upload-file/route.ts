import AxiosClient, { BASE_HEADERS } from "@/api/axios-client";
import { NextResponse } from "next/server";
import { FormData, File } from "formdata-node";
import { FormDataEncoder } from "form-data-encoder";

export async function POST(request: Request) {
  const formData = await request.formData();

  const file = formData.get("file");

  if (!file || !(file instanceof Blob))
    return NextResponse.json({ message: "Not found files" }, { status: 500 });

  const buffer = Buffer.from(await file.arrayBuffer());

  const form = new FormData();
  form.append(
    "files",
    new File([buffer], `${Date.now()}_${file.name}`, { type: file.type })
  );

  const encoder = new FormDataEncoder(form);

  try {
    const data = await AxiosClient.post("/upload", form, {
      headers: { ...BASE_HEADERS, ...encoder.headers },
    });
    if (data.status === 201 && data.data) {
      return NextResponse.json(data.data, { status: 201 });
    }
    return NextResponse.json({ message: "File not created" }, { status: 500 });
  } catch {
    return NextResponse.json({ message: "Upload failed" }, { status: 500 });
  }
}
