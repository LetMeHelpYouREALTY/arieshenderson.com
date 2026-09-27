"use client";

import {
  CONTACT_SUBMIT_ERROR_MESSAGE,
  FubInquiryType,
} from "@/lib/site-contact";
import { FormEvent, useState } from "react";

type UseContactFormSubmitOptions = {
  formName: string;
  inquiryType?: FubInquiryType;
  successMessage?: string;
  getExtraFields?: (
    form: HTMLFormElement,
  ) => Record<string, string | undefined>;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function useContactFormSubmit({
  formName,
  inquiryType = "General Inquiry",
  successMessage = "Thank you! Your message was sent. We'll get back to you within 24 hours.",
  getExtraFields,
}: UseContactFormSubmitOptions) {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const extra = getExtraFields?.(form) ?? {};

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName,
          type: inquiryType,
          name,
          email: email || undefined,
          phone: phone || undefined,
          message: message || undefined,
          sourceUrl:
            typeof window !== "undefined" ? window.location.href : undefined,
          ...extra,
        }),
      });

      if (!response.ok) {
        setState("error");
        setErrorMessage(CONTACT_SUBMIT_ERROR_MESSAGE);
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMessage(CONTACT_SUBMIT_ERROR_MESSAGE);
    }
  }

  return {
    state,
    errorMessage,
    successMessage,
    handleSubmit,
    isSubmitting: state === "submitting",
  };
}
