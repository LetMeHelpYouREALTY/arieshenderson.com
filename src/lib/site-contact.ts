export const SITE_SOURCE = "arieshenderson.com";

/** Matches primary tel link on the live site (Centennial Hills office). */
export const SITE_CONTACT_PHONE_DISPLAY = "702-718-0043";

export const CONTACT_SUBMIT_ERROR_MESSAGE = `Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at ${SITE_CONTACT_PHONE_DISPLAY}.`;

export type FubInquiryType =
  | "General Inquiry"
  | "Seller Inquiry"
  | "Property Inquiry"
  | "Registration";
