import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Gavel,
  Globe,
  HeartHandshake,
  HelpingHand,
  Scale,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const practiceAreas = [
  {
    title: "Criminal Law",
    description:
      "Comprehensive representation in criminal matters including bail applications, anticipatory bail, and defense in trial proceedings.",
    icon: ShieldCheck,
    cases: "350+ Cases",
    href: "/criminal-law",
  },
  {
    title: "Civil Law",
    description:
      "Handling of lease disputes, agreements, revenue matters, civil trials, and code-related issues with precision.",
    icon: Gavel,
    cases: "420+ Cases",
    href: "/civil-law",
  },
  {
    title: "Commercial Law",
    description:
      "Specialized in industrial disputes, arbitration, commercial sub-business law, business contracts, settlements, and insurance matters.",
    icon: BriefcaseBusiness,
    cases: "300+ Cases",
    href: "/commercial-law",
  },
  {
    title: "Banking Law",
    description:
      "Legal services covering banking regulations, loan disputes, non-performing assets (NPAs), debt recovery, and regulatory compliance with RBI guidelines.",
    icon: Banknote,
    cases: "180+ Cases",
    href: "/banking-law",
  },
  {
    title: "Matrimonial Law",
    description:
      "Legal support in divorce, maintenance, child custody, and related family law matters with sensitivity and experience.",
    icon: HeartHandshake,
    cases: "280+ Cases",
    href: "/matrimonial-law",
  },
  {
    title: "Intellectual Property Rights",
    description:
      "Advisory and litigation on trademark, patent, and copyright protection to safeguard your creative and business assets.",
    icon: BadgeCheck,
    cases: "150+ Cases",
    href: "/intellectual-property-rights",
  },
  {
    title: "Labour and Industrial Law",
    description:
      "Representation in employment disputes, labour compliance, industrial relations, and employee rights enforcement.",
    icon: Scale,
    cases: "310+ Cases",
    href: "/labour-and-industrial-law",
  },
  {
    title: "Service Law",
    description:
      "Expertise in service matters involving government employees, departmental inquiries, promotions, and retirement benefits.",
    icon: UserCheck,
    cases: "260+ Cases",
    href: "/service-law",
  },
  {
    title: "Pro Bono Services",
    description:
      "Free legal assistance for underserved and economically weaker sections, promoting access to justice for all.",
    icon: HelpingHand,
    cases: "120+ Cases",
    href: "/probono",
  },
  {
    title: "NRI Legal Services",
    description:
      "Specialized legal support for Non-Resident Indians including property disputes, inheritance, and power of attorney.",
    icon: Globe,
    cases: "200+ Cases",
    href: "/nri-legal-services",
  },
];
