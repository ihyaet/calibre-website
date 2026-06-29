export interface NavColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export const FOOTER_NAV: NavColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "Press", href: "#" },
      { label: "Affiliates", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Our Story", href: "#" },
      { label: "The Screen", href: "#" },
      { label: "The Feel", href: "#" },
      { label: "Colorways", href: "#" },
      { label: "Specifications", href: "#" },
    ],
  },
  {
    heading: "Shop",
    links: [
      { label: "Accessories", href: "#" },
      { label: "Switch Sets", href: "#" },
      { label: "Keycap Sets", href: "#" },
      { label: "Gift Cards", href: "#" },
      { label: "Shipping Info", href: "#" },
    ],
  },
];
