import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "BoseIn - Unlocking Tommorrow's Innovations, Today",
  description:
    "At BoseIn, we're on a mission to democratise research. We understand the value of your expertise and the impact your research can have on real-world challenges. We offer Research as a Service (RAAS)— an innovative solution designed to support businesses and academic researchers with their R&D needs, without the hefty price tag typically associated with traditional research. ",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-saas-stripe-starter",
    linkedin: "https://www.linkedin.com/company/bosein-org/",
  },
  mailSupport: "operations@bosein.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#about" },

      // { title: "Terms", href: "#" },
      // { title: "Privacy", href: "#" },
    ],
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
