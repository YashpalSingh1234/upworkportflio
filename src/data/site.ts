import type { SocialLinks } from "@/types";

export const navigation = ["Home", "Work", "Services", "Skills", "About", "Contact"] as const;

// TODO: replace placeholders with real URLs
export const socialLinks: SocialLinks = {
  github: "#",
  linkedin: "#",
  email: "mailto:your-email@example.com",
};
