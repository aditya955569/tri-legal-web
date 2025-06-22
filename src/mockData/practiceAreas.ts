import { BadgeCheck, Banknote, BriefcaseBusiness, Gavel, HeartHandshake, Scale, ShieldCheck, UserCheck } from "lucide-react";

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
        description: "Handling of lease disputes, agreements, revenue matters, civil trials, and code-related issues with precision.",
        icon: Gavel,
        cases: "420+ Cases",
        href: "/civil-law",
    },
    {
        title: "Commercial Law",
        description: "Specialized in industrial disputes, arbitration, commercial sub-business law, business contracts, settlements, and insurance matters.",
        icon: BriefcaseBusiness,
        cases: "300+ Cases",
        href: "/commercial-law",
    },
    {
        title: "Banking Law",
        description: "Legal services covering banking regulations, loan disputes, non-performing assets (NPAs), debt recovery, and regulatory compliance with RBI guidelines.",
        icon: Banknote,
        cases: "180+ Cases",
        href: "/banking-law",
    },
    {
        title: "Matrimonial Law",
        description: "Legal support in divorce, maintenance, child custody, and related family law matters with sensitivity and experience.",
        icon: HeartHandshake,
        cases: "280+ Cases",
        href: "/matrimonial-law",
    },
    {
        title: "Intellectual Property Rights",
        description: "Advisory and litigation on trademark, patent, and copyright protection to safeguard your creative and business assets.",
        icon: BadgeCheck,
        cases: "150+ Cases",
        href: "/intellectual-property-rights",
    },
    {
        title: "Labour and Industrial Law",
        description: "Representation in employment disputes, labour compliance, industrial relations, and employee rights enforcement.",
        icon: Scale,
        cases: "310+ Cases",
        href: "/labour-and-industrial-law",
    },
    {
        title: "Service Law",
        description: "Expertise in service matters involving government employees, departmental inquiries, promotions, and retirement benefits.",
        icon: UserCheck,
        cases: "260+ Cases",
        href: "/service-law",
    },
];



export const practiceAreaDetails = {
    "Criminal Law": {
        overview:
            "Criminal law is the body of law that relates to crime. It encompasses the prosecution of individuals by the government for acts classified as crimes, including both bailable and non-bailable offenses. This area of law ensures justice by punishing individuals who violate laws meant to maintain public order and safety.",
        services: [
            "Filing and arguing bail and anticipatory bail applications",
            "Defending accused in criminal trials under the Indian Penal Code and special laws (NDPS, POCSO, etc.)",
            "Challenging and quashing FIRs and criminal complaints",
            "Handling white-collar crimes, cybercrimes, and economic offenses",
            "Assisting in appeal and revision petitions before High Courts and Supreme Court",
        ],
        experienceHighlight:
            "Our firm has successfully represented clients in over 350 criminal cases involving a wide range of charges, including serious offenses under IPC, PMLA, NDPS Act, and white-collar crimes. We have secured acquittals, bail, and favorable judgments across various courts with a strong emphasis on strategic defense and legal diligence.",
    },

    "Civil Law": {
        overview:
            "Civil law deals with the rights and duties of individuals and organizations towards one another. It includes property matters, contracts, family obligations, and torts. Unlike criminal law, civil law typically results in monetary compensation or orders of specific performance rather than imprisonment.",
        services: [
            "Drafting and enforcing lease deeds, sale agreements, and property-related contracts",
            "Handling revenue court matters including land ownership and tenancy disputes",
            "Filing and defending civil suits for declaration, injunction, partition, and possession",
            "Challenging government notifications and encroachments",
            "Representation in civil trial courts and appellate tribunals",
        ],
        experienceHighlight:
            "We have successfully handled more than 420 civil law cases, ranging from intricate property partition matters among co-owners to large-scale land acquisition disputes, always ensuring our clients’ rights are protected and enforced through the civil court machinery.",
    },

    "Commercial Law": {
        overview:
            "Commercial law governs the legal aspects of commerce and trade, including the regulation of business operations, commercial transactions, banking, insurance, and arbitration. It ensures a legal framework for the functioning and regulation of business enterprises and protects the rights of all parties involved.",
        services: [
            "Drafting and reviewing commercial contracts and MOUs",
            "Legal assistance in company law compliance and corporate governance",
            "Advising on mergers, acquisitions, and business restructuring",
            "Representation in arbitration and alternative dispute resolution mechanisms",
            "Litigation in banking disputes, insurance claims, and commercial frauds",
        ],
        experienceHighlight:
            "We have advised and represented clients in more than 300 commercial law matters, including high-value arbitrations, commercial suits in High Courts, and settlement of complex banking and insurance disputes. Our clients include MSMEs, corporations, and financial institutions.",
    },

    "Matrimonial Law": {
        overview:
            "Matrimonial law encompasses all legal matters related to marriage and family life, including divorce, maintenance, child custody, and domestic violence. It aims to resolve disputes in personal relationships through a combination of legal expertise and sensitivity to emotional dynamics.",
        services: [
            "Filing for contested and mutual divorce under Hindu and Muslim personal laws",
            "Seeking interim and permanent maintenance under relevant statutes",
            "Child custody and guardianship litigation",
            "Protection from domestic violence and harassment through DV Act proceedings",
            "Mediation and counseling in marital disputes",
        ],
        experienceHighlight:
            "With over 280 matrimonial cases handled we have developed a deep understanding of family laws and the emotional intricacies involved. Our firm has helped individuals, especially women, achieve justice in maintenance, custody, and domestic violence matters through compassionate and legally sound representation.",
    },

    "Intellectual Property Rights": {
        overview:
            "IPR law protects creations of the mind — inventions, artistic works, designs, symbols, names, and images used in commerce. It provides exclusive rights to creators to use and profit from their intellectual creations, and legal tools to enforce these rights in case of infringement.",
        services: [
            "Trademark registration, renewal, opposition, and infringement litigation",
            "Patent searches, filing, and defense before the patent office",
            "Copyright registration and protection of literary, artistic, and digital works",
            "Drafting licensing and assignment agreements for IP rights",
            "Legal action against IP theft, counterfeiting, and piracy",
        ],
        experienceHighlight:
            "We have supported over 150 creators, entrepreneurs, and businesses in safeguarding their intellectual property. From registering trademarks and patents to pursuing litigation against infringers, our legal team ensures the full spectrum of IPR protection.",
    },

    "Labour and Industrial Law": {
        overview:
            "Labour and industrial law governs the relationship between employers, employees, and trade unions. It includes the regulation of wages, working conditions, benefits, industrial disputes, and employment termination. This area of law is crucial for maintaining harmony and fairness in the workplace.",
        services: [
            "Advising employers on compliance with labour laws and regulations",
            "Representation in disputes before labour courts and industrial tribunals",
            "Handling wrongful termination, retrenchment, and disciplinary action cases",
            "Collective bargaining and trade union negotiations",
            "Drafting employment agreements, HR policies, and workplace codes of conduct",
        ],
        experienceHighlight:
            "With over 310 labour-related cases managed, we have served both employees and employers in high-stakes disputes, ensuring compliance, protecting rights, and negotiating effective settlements across various sectors including manufacturing, IT, and services.",
    },

    "Service Law": {
        overview:
            "Service law deals with disputes and regulations concerning public servants and government employees. It addresses employment terms, transfers, promotions, suspensions, retirements, and pensionary benefits. This branch of law ensures fair administrative treatment of civil servants.",
        services: [
            "Challenging illegal suspension, termination, or disciplinary actions",
            "Representation in Central Administrative Tribunal (CAT) and High Courts",
            "Promotion, seniority, and pay-scale disputes",
            "Seeking pension and post-retirement benefits",
            "Legal opinions on service rules and departmental proceedings",
        ],
        experienceHighlight:
            "Our firm has helped over 260 government employees resolve service-related grievances, secure promotions, and reclaim benefits unlawfully withheld. We have extensive experience appearing before CAT, service tribunals, and High Courts in service jurisprudence matters.",
    },
};
