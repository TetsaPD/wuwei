import { data } from "framer-motion/client";
import { NextResponse } from "next/server";


type ResponseData = {
  message: string;
};

export async function GET() {
  const data: ResponseData = {
    message: "Hello World",
  };
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  console.log(request);
  return NextResponse.json({data  : "Hello World"});
}