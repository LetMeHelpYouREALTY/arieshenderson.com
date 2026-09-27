import {
  FubInquiryType,
  SITE_SOURCE,
} from "@/lib/site-contact";

export type ContactPayloadInput = {
  formName: string;
  type: FubInquiryType;
  name: string;
  email?: string;
  phone?: string;
  message?: string;
  sourceUrl?: string;
  neighborhood?: string;
  timeline?: string;
  priceRange?: string;
  /** Second FUB person tag after site domain; defaults to formName */
  personTag?: string;
};

export type ValidatedContactPayload = ContactPayloadInput & {
  email: string;
  phone: string;
};

export function validateContactPayload(
  body: unknown,
): { ok: true; data: ValidatedContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Invalid request body" };
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const phone = typeof record.phone === "string" ? record.phone.trim() : "";
  const formName =
    typeof record.formName === "string" && record.formName.trim()
      ? record.formName.trim()
      : "Website Contact Form";

  if (!name) {
    return { ok: false, error: "Name is required" };
  }

  if (!email && !phone) {
    return { ok: false, error: "Email or phone is required" };
  }

  const type = parseInquiryType(record.type);
  const message =
    typeof record.message === "string" ? record.message.trim() : "";
  const sourceUrl =
    typeof record.sourceUrl === "string" ? record.sourceUrl.trim() : "";
  const neighborhood =
    typeof record.neighborhood === "string" ? record.neighborhood.trim() : "";
  const timeline =
    typeof record.timeline === "string" ? record.timeline.trim() : "";
  const priceRange =
    typeof record.priceRange === "string" ? record.priceRange.trim() : "";
  const personTag =
    typeof record.personTag === "string" ? record.personTag.trim() : "";

  return {
    ok: true,
    data: {
      formName,
      type,
      name,
      email,
      phone,
      message,
      sourceUrl,
      neighborhood,
      timeline,
      priceRange,
      personTag,
    },
  };
}

function parseInquiryType(value: unknown): FubInquiryType {
  const allowed: FubInquiryType[] = [
    "General Inquiry",
    "Seller Inquiry",
    "Property Inquiry",
    "Registration",
  ];
  if (typeof value === "string" && allowed.includes(value as FubInquiryType)) {
    return value as FubInquiryType;
  }
  return "General Inquiry";
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: "Unknown", lastName: "" };
  }
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function buildMessage(data: ValidatedContactPayload): string {
  const lines: string[] = [];
  if (data.message) {
    lines.push(data.message);
  }
  if (data.neighborhood) {
    lines.push(`Neighborhood: ${data.neighborhood}`);
  }
  if (data.timeline) {
    lines.push(`Timeline: ${data.timeline}`);
  }
  if (data.priceRange) {
    lines.push(`Price range: ${data.priceRange}`);
  }
  if (data.phone) {
    lines.push(`Phone: ${data.phone}`);
  }
  if (data.email) {
    lines.push(`Email: ${data.email}`);
  }
  return lines.join("\n") || "Website form submission";
}

export function buildFollowUpBossEventBody(
  data: ValidatedContactPayload,
  sourceUrl: string,
) {
  const { firstName, lastName } = splitName(data.name);
  const tagLabel = data.personTag || data.formName;

  const person: {
    firstName: string;
    lastName?: string;
    emails: { value: string }[];
    phones?: { value: string }[];
    tags: string[];
  } = {
    firstName,
    emails: data.email ? [{ value: data.email }] : [],
    tags: [SITE_SOURCE, tagLabel],
  };

  if (lastName) {
    person.lastName = lastName;
  }
  if (data.phone) {
    person.phones = [{ value: data.phone }];
  }

  return {
    source: SITE_SOURCE,
    system: SITE_SOURCE,
    type: data.type,
    message: buildMessage(data),
    description: `${data.formName}${sourceUrl ? ` — ${sourceUrl}` : ""}`,
    sourceUrl,
    person,
  };
}

export async function postFollowUpBossEvent(
  apiKey: string,
  eventBody: ReturnType<typeof buildFollowUpBossEventBody>,
): Promise<{ ok: true } | { ok: false; status?: number }> {
  const auth = Buffer.from(`${apiKey}:`).toString("base64");

  try {
    const response = await fetch("https://api.followupboss.com/v1/events", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
        "X-System": SITE_SOURCE,
      },
      body: JSON.stringify(eventBody),
    });

    if (response.status === 200 || response.status === 201 || response.status === 204) {
      return { ok: true };
    }

    console.error(
      `Follow Up Boss event rejected with status ${response.status}`,
    );
    return { ok: false, status: response.status };
  } catch (error) {
    console.error("Follow Up Boss request failed", error);
    return { ok: false };
  }
}
