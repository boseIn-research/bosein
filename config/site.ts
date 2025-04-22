import { SidebarNavItem, SiteConfig } from "types";

// const "https://bosein.com", = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "BoseIn - Unlocking Tommorrow's Innovations, Today",
  description:
    "Founded with a vision to establish India as a global research hub, Bosein is committed to bridging the gap between academic excellence and industry innovation.    Our team combines expertise in research, technology, and business to create a platform that democratizes access to specialized knowledge while upholding the highest standards of ethical research practices.",
  url: "https://bosein.com",
  ogImage: `https://bosein.com/_static/og.png`,
  links: {
    twitter: "https://x.com/BoseIn_Research",
    github: "https://github.com/boseIn-research",
    linkedin: "https://www.linkedin.com/company/bosein-org/",
    instagram: "https://www.instagram.com/bosein_research/",
    whatsapp: "https://wa.me/916204011615",
  },
  domain: "bosein.com",
  mailSupport: "operations@bosein.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [{ title: "About", href: "#about" }],
  },
  // {
  //   title: "Product",
  //   items: [
  //     { title: "Security", href: "#" },
  //     { title: "Customization", href: "#" },
  //     { title: "Customers", href: "#" },
  //     { title: "Changelog", href: "#" },
  //   ],
  // },
  // {
  //   title: "Docs",
  //   items: [
  //     { title: "Introduction", href: "#" },
  //     { title: "Installation", href: "#" },
  //     { title: "Components", href: "#" },
  //     { title: "Code Blocks", href: "#" },
  //   ],
  // },
];
