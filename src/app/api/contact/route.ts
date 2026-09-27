import {
  buildFollowUpBossEventBody,
  postFollowUpBossEvent,
  validateContactPayload,
} from "@/lib/fub/submit-contact-event";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const validation = validateContactPayload(body);
  if (validation.ok === false) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY;
  if (!apiKey) {
    console.error(
      "FOLLOW_UP_BOSS_API_KEY is not configured for arieshenderson.com",
    );
    return NextResponse.json(
      { error: "Lead capture is temporarily unavailable" },
      { status: 503 },
    );
  }

  const referer = request.headers.get("referer") ?? "";
  const sourceUrl =
    validation.data.sourceUrl || referer || "https://arieshenderson.com";

  const eventBody = buildFollowUpBossEventBody(validation.data, sourceUrl);
  const fubResult = await postFollowUpBossEvent(apiKey, eventBody);

  if (!fubResult.ok) {
    return NextResponse.json(
      { error: "Failed to submit to CRM" },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
