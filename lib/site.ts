// Every contact route on the site funnels through here, so the number lives in
// exactly one place.
// TODO: replace with the real WhatsApp number before launch — this one is unassigned.
export const WHATSAPP = "34600000000";

export const INSTAGRAM = "https://instagram.com/hebrastejidos";

/**
 * Builds a wa.me link with a prefilled message. Always phrase `text` as an
 * inquiry ("me interesa", "busco") — never as a placed order. The site is a
 * catalog, not a shop.
 */
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
