interface BlogPost {
    id: string | number;
    title: string;
    description: string;
    image: string;
    author: string;
    date: string; // ISO format is preferred for flexibility
    tags?: string[]; // optional
}


export const dummyBlogs: BlogPost[] = [
    {
        id: 1,
        title: "Understanding Civil Litigation in India",
        description:
            "Explore the various stages of civil litigation and how our firm helps navigate the complex legal system efficiently.",
        image: "https://source.unsplash.com/600x400/?law,justice",
        author: "Adv. Rhea Kapoor",
        date: "2024-05-12",
        tags: ["Civil Law", "Litigation", "India"]
    },
    {
        id: "2",
        title: "Importance of Contract Law",
        description:
            "Learn why strong contracts are the backbone of business operations and how we ensure their legal soundness.",
        image: "https://source.unsplash.com/600x400/?contract,legal",
        author: "Adv. Amit Sharma",
        date: "2024-04-28",
        tags: ["Business Law", "Contracts", "Corporate"]
    },
    {
        id: "3",
        title: "Women's Rights and Legal Support",
        description:
            "An in-depth look at the evolving legal landscape supporting women's rights in India and how we advocate for change.",
        image: "https://source.unsplash.com/600x400/?women,rights",
        author: "Adv. Neha Verma",
        date: "2024-03-18",
        tags: ["Women's Rights", "Human Rights", "Social Justice"]
    },
    {
        id: "4",
        title: "Navigating Real Estate Law",
        description:
            "Understand how real estate transactions are governed in India and key legal considerations.",
        image: "https://source.unsplash.com/600x400/?realestate,law",
        author: "Adv. Karan Mehta",
        date: "2024-02-15",
        tags: ["Property Law", "Land Disputes"]
    },
    {
        id: "5",
        title: "The Role of Arbitration in Modern Disputes",
        description:
            "Why arbitration is gaining popularity as an alternative to traditional litigation.",
        image: "https://source.unsplash.com/600x400/?arbitration,justice",
        author: "Adv. Priya Nair",
        date: "2024-01-30",
        tags: ["Dispute Resolution", "Arbitration"]
    },
    {
        id: "6",
        title: "Cyber Crime and Digital Law",
        description:
            "A detailed overview of cyber laws in India and protection against digital fraud.",
        image: "https://source.unsplash.com/600x400/?cyber,crime",
        author: "Adv. Sanjay Rao",
        date: "2024-01-05",
        tags: ["Cyber Law", "Technology"]
    },
    {
        id: "7",
        title: "Intellectual Property Basics",
        description:
            "Learn about copyrights, trademarks, and patents in the Indian legal system.",
        image: "https://source.unsplash.com/600x400/?intellectual,property",
        author: "Adv. Kavita Joshi",
        date: "2023-12-20",
        tags: ["IPR", "Copyright", "Trademark"]
    },
    {
        id: "8",
        title: "Understanding Consumer Protection Laws",
        description:
            "How consumers can safeguard their rights and how we assist them legally.",
        image: "https://source.unsplash.com/600x400/?consumer,rights",
        author: "Adv. Aditya Roy",
        date: "2023-12-01",
        tags: ["Consumer Law", "Awareness"]
    },
    {
        id: "9",
        title: "Startups and Legal Compliance",
        description:
            "A legal checklist every startup should follow in India.",
        image: "https://source.unsplash.com/600x400/?startup,legal",
        author: "Adv. Manisha Das",
        date: "2023-11-10",
        tags: ["Startup", "Corporate Law"]
    },
    {
        id: "10",
        title: "Taxation and the Law",
        description:
            "Key taxation laws every business and individual should know.",
        image: "https://source.unsplash.com/600x400/?tax,law",
        author: "Adv. Rajeev Menon",
        date: "2023-10-25",
        tags: ["Tax Law", "Compliance"]
    },
    {
        id: "11",
        title: "Divorce Law and Custody Battles",
        description:
            "Insights into the legal procedures around divorce and child custody.",
        image: "https://source.unsplash.com/600x400/?divorce,court",
        author: "Adv. Anjali Bhatt",
        date: "2023-10-01",
        tags: ["Family Law", "Custody"]
    },
    {
        id: "12",
        title: "Domestic Violence and Legal Recourse",
        description:
            "Understanding legal aid and protections available under the law.",
        image: "https://source.unsplash.com/600x400/?violence,women",
        author: "Adv. Shruti Singh",
        date: "2023-09-15",
        tags: ["Domestic Violence", "Protection"]
    },
    {
        id: "13",
        title: "Employment Contracts and Worker Rights",
        description:
            "Legal aspects of employment, termination, and employee rights.",
        image: "https://source.unsplash.com/600x400/?employment,law",
        author: "Adv. Rohit Kulkarni",
        date: "2023-09-01",
        tags: ["Labour Law", "Employment"]
    },
    {
        id: "14",
        title: "Privacy Laws in India",
        description:
            "Exploring data privacy, protection policies, and individual rights.",
        image: "https://source.unsplash.com/600x400/?privacy,data",
        author: "Adv. Divya Sinha",
        date: "2023-08-10",
        tags: ["Privacy Law", "Data Protection"]
    },
    {
        id: "15",
        title: "Cheque Bounce and Legal Action",
        description:
            "What the law says about dishonored cheques and legal remedies.",
        image: "https://source.unsplash.com/600x400/?cheque,bounce",
        author: "Adv. Deepak Yadav",
        date: "2023-07-25",
        tags: ["Banking Law", "Criminal Law"]
    },
    {
        id: "16",
        title: "Court Procedure Simplified",
        description:
            "Breaking down courtroom procedures and terminologies for the common man.",
        image: "https://source.unsplash.com/600x400/?courtroom,judge",
        author: "Adv. Nisha Patel",
        date: "2023-07-01",
        tags: ["Court", "Procedure"]
    },
    {
        id: "17",
        title: "Will Drafting and Inheritance Law",
        description:
            "Why creating a will is crucial and how the inheritance system works in India.",
        image: "https://source.unsplash.com/600x400/?will,inheritance",
        author: "Adv. Mahesh Iyer",
        date: "2023-06-20",
        tags: ["Inheritance", "Family Law"]
    },
    {
        id: "18",
        title: "Motor Accidents and Insurance Claims",
        description:
            "Understanding how to legally approach motor accident compensation.",
        image: "https://source.unsplash.com/600x400/?accident,insurance",
        author: "Adv. Reena D’Souza",
        date: "2023-06-01",
        tags: ["Motor Law", "Insurance"]
    },
    {
        id: "19",
        title: "Environmental Law in India",
        description:
            "Laws that protect our environment and how you can enforce them.",
        image: "https://source.unsplash.com/600x400/?environment,law",
        author: "Adv. Tarun Khanna",
        date: "2023-05-15",
        tags: ["Environment", "Public Interest"]
    },
    {
        id: "20",
        title: "Juvenile Justice System",
        description:
            "How the Indian legal system treats underage offenders.",
        image: "https://source.unsplash.com/600x400/?juvenile,court",
        author: "Adv. Sneha Jain",
        date: "2023-05-01",
        tags: ["Juvenile", "Justice", "Children"]
    },
    {
        id: "21",
        title: "Legal Aid for Senior Citizens",
        description:
            "Support and legal rights of elderly in India.",
        image: "https://source.unsplash.com/600x400/?elderly,rights",
        author: "Adv. Vikram Singh",
        date: "2023-04-20",
        tags: ["Elder Law", "Legal Aid"]
    },
    {
        id: "22",
        title: "Digital Signatures and E-Contracts",
        description:
            "Are e-signatures legally binding? Let's explore Indian law.",
        image: "https://source.unsplash.com/600x400/?digital,signature",
        author: "Adv. Ruchi Malhotra",
        date: "2023-04-01",
        tags: ["Technology Law", "E-Commerce"]
    },
    {
        id: "23",
        title: "Bankruptcy and Insolvency Code",
        description:
            "A guide to India's IBC and how it affects companies and lenders.",
        image: "https://source.unsplash.com/600x400/?bankruptcy,law",
        author: "Adv. Harsh Vardhan",
        date: "2023-03-15",
        tags: ["IBC", "Corporate"]
    },
    {
        id: "24",
        title: "Mediation vs. Litigation",
        description:
            "How mediation can save time and cost over court trials.",
        image: "https://source.unsplash.com/600x400/?mediation,discussion",
        author: "Adv. Alka Joshi",
        date: "2023-03-01",
        tags: ["Mediation", "Dispute Resolution"]
    },
    {
        id: "25",
        title: "Understanding PILs",
        description:
            "What is a Public Interest Litigation and how you can file one?",
        image: "https://source.unsplash.com/600x400/?public,interest",
        author: "Adv. Raghav Bansal",
        date: "2023-02-15",
        tags: ["PIL", "Constitutional Law"]
    },
    {
        id: "26",
        title: "Anticipatory Bail Explained",
        description:
            "When and how anticipatory bail is granted in India.",
        image: "https://source.unsplash.com/600x400/?bail,legal",
        author: "Adv. Seema Tripathi",
        date: "2023-02-01",
        tags: ["Criminal Law", "Bail"]
    },
    {
        id: "27",
        title: "Dowry Laws in India",
        description: "Understanding Section 498A of IPC and related dowry provisions.",
        image: "https://source.unsplash.com/600x400/?court,marriage",
        author: "Adv. Rajesh Verma",
        date: "2023-02-05",
        tags: [
            "Family Law",
            "IPC"
        ]
    },
    {
        id: "28",
        title: "Consumer Protection Rights",
        description: "How to file a complaint under Consumer Protection Act 2019.",
        image: "https://source.unsplash.com/600x400/?consumer,shopping",
        author: "Adv. Priya Malhotra",
        date: "2023-02-10",
        tags: [
            "Consumer Law",
            "Rights"
        ]
    },
    {
        id: "29",
        title: "Cheque Bounce Cases",
        description: "Legal recourse available under Section 138 of Negotiable Instruments Act.",
        image: "https://source.unsplash.com/600x400/?cheque,money",
        author: "Adv. Amit Khanna",
        date: "2023-02-15",
        tags: [
            "Banking Law",
            "Civil Litigation"
        ]
    },
    {
        id: "30",
        title: "Property Inheritance Laws",
        description: "Hindu Succession Act vs Indian Succession Act explained.",
        image: "https://source.unsplash.com/600x400/?property,will",
        author: "Adv. Neha Sharma",
        date: "2023-02-20",
        tags: [
            "Property Law",
            "Inheritance"
        ]
    },
    {
        id: "31",
        title: "Cyber Crime Complaints",
        description: "Step-by-step guide to filing cyber crime complaints in India.",
        image: "https://source.unsplash.com/600x400/?cyber,crime",
        author: "Adv. Vikram Singh",
        date: "2023-02-25",
        tags: [
            "Cyber Law",
            "IT Act"
        ]
    },
    {
        id: "32",
        title: "Divorce by Mutual Consent",
        description: "Complete procedure under Section 13B of Hindu Marriage Act.",
        image: "https://source.unsplash.com/600x400/?divorce,court",
        author: "Adv. Anjali Kapoor",
        date: "2023-03-01",
        tags: [
            "Family Law",
            "Divorce"
        ]
    },
    {
        id: "33",
        title: "Rights of Arrested Persons",
        description: "Legal safeguards available to arrested individuals in India.",
        image: "https://source.unsplash.com/600x400/?arrest,police",
        author: "Adv. Rohit Joshi",
        date: "2023-03-05",
        tags: [
            "Criminal Law",
            "Rights"
        ]
    },
    {
        id: "34",
        title: "GST Dispute Resolution",
        description: "How to appeal against GST orders and assessments.",
        image: "https://source.unsplash.com/600x400/?gst,tax",
        author: "Adv. Sanjay Gupta",
        date: "2023-03-10",
        tags: [
            "Tax Law",
            "GST"
        ]
    },
    {
        id: "35",
        title: "Domestic Violence Protection",
        description: "Understanding remedies under Protection of Women from Domestic Violence Act.",
        image: "https://source.unsplash.com/600x400/?violence,women",
        author: "Adv. Meena Patel",
        date: "2023-03-15",
        tags: [
            "Family Law",
            "Women Rights"
        ]
    },
    {
        id: "36",
        title: "Trademark Registration Process",
        description: "Complete guide to trademark registration in India.",
        image: "https://source.unsplash.com/600x400/?trademark,brand",
        author: "Adv. Arjun Reddy",
        date: "2023-03-20",
        tags: [
            "IPR",
            "Trademark"
        ]
    },
    {
        id: "37",
        title: "Motor Accident Claims",
        description: "How to file compensation claims under Motor Vehicles Act.",
        image: "https://source.unsplash.com/600x400/?accident,car",
        author: "Adv. Sunil Kumar",
        date: "2023-03-25",
        tags: [
            "Accident Claims",
            "Insurance"
        ]
    },
    {
        id: "38",
        title: "Right to Information Act",
        description: "How citizens can use RTI to seek government information.",
        image: "https://source.unsplash.com/600x400/?government,documents",
        author: "Adv. Nandini Desai",
        date: "2023-04-01",
        tags: [
            "Constitutional Law",
            "RTI"
        ]
    },
    {
        id: "39",
        title: "Medico-Legal Cases",
        description: "Legal obligations of doctors and hospitals in criminal cases.",
        image: "https://source.unsplash.com/600x400/?hospital,law",
        author: "Adv. Karan Malhotra",
        date: "2023-04-05",
        tags: [
            "Medical Law",
            "Criminal Law"
        ]
    },
    {
        id: "40",
        title: "Tenant Rights in India",
        description: "Understanding rent control laws and eviction procedures.",
        image: "https://source.unsplash.com/600x400/?rent,house",
        author: "Adv. Deepika Iyer",
        date: "2023-04-10",
        tags: [
            "Property Law",
            "Rental"
        ]
    },
    {
        id: "41",
        title: "Corporate Insolvency Process",
        description: "Step-by-step guide to IBC proceedings in India.",
        image: "https://source.unsplash.com/600x400/?bankruptcy,business",
        author: "Adv. Rohan Mehta",
        date: "2023-04-15",
        tags: [
            "Corporate Law",
            "IBC"
        ]
    },
    {
        id: "42",
        title: "Corporate Insolvency Process",
        description: "Step-by-step guide to IBC proceedings in India.",
        image: "https://source.unsplash.com/600x400/?bankruptcy,business",
        author: "Adv. Rohan Mehta",
        date: "2023-04-15",
        tags: [
            "Corporate Law",
            "IBC"
        ]
    }, {
        id: "43",
        title: "Corporate Insolvency Process",
        description: "Step-by-step guide to IBC proceedings in India.",
        image: "https://source.unsplash.com/600x400/?bankruptcy,business",
        author: "Adv. Rohan Mehta",
        date: "2023-04-15",
        tags: [
            "Corporate Law",
            "IBC"
        ]
    }, {
        id: "44",
        title: "Corporate Insolvency Process",
        description: "Step-by-step guide to IBC proceedings in India.",
        image: "https://source.unsplash.com/600x400/?bankruptcy,business",
        author: "Adv. Rohan Mehta",
        date: "2023-04-15",
        tags: [
            "Corporate Law",
            "IBC"
        ]
    }, {
        id: "45",
        title: "Corporate Insolvency Process",
        description: "Step-by-step guide to IBC proceedings in India.",
        image: "https://source.unsplash.com/600x400/?bankruptcy,business",
        author: "Adv. Rohan Mehta",
        date: "2023-04-15",
        tags: [
            "Corporate Law",
            "IBC"
        ]
    },
];
