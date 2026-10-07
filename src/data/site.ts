import type { SocialLinks } from "@/types";

export const navigation = ["Home", "Work", "Services", "Skills", "About", "Contact"] as const;

// TODO: replace the LinkedIn and email placeholders with real values
export const socialLinks: SocialLinks = {
  githubProfileUrl: "https://github.com/YashpalSingh1234",
  linkedin: "#",
  email: "mailto:your-email@example.com",
};
