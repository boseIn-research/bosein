import { SidebarNavItem, SiteConfig } from "types";

// const "https://bosein.com", = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "BoseIn - Unlocking Tommorrow's Innovations, Today",
  description:
    "At BoseIn, we're on a mission to democratise research. We understand the value of your expertise and the impact your research can have on real-world challenges. We offer Research as a Service (RAAS)— an innovative solution designed to support businesses and academic researchers with their R&D needs, without the hefty price tag typically associated with traditional research. ",
  url: "https://bosein.com",
  ogImage: `${"https://bosein.com"}/_static/og.png`,
  links: {
    twitter: "https://twitter.com/bosein",
    github: "https://github.com/boseIn-research",
    linkedin: "https://www.linkedin.com/company/bosein-org/",
  },
  domain: "bosein.com",
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
