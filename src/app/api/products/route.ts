import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    products: [
      {
        id: 1,
        name: "Banana",
      },
    ],
  });
}
