import { NextRequest, NextResponse } from "next/server";
import { getCompanyHomepage } from "../scraping";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  const homepage = await getCompanyHomepage(url);

  if (!homepage) {
    return NextResponse.json({ error: "Failed to fetch homepage" }, { status: 500 });
  }

  return NextResponse.json({ homepage });
}
