import {
  people01,
  people02,
  people03,
  instagram,
  linkedin,
  twitter,
  polygon,
  aptos,
  zeta,
  omni,
  send,
  shield,
  star,
  instruction_1,
  instruction_2,
  instruction_3,
  instruction_4,
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'features',
    title: 'Features',
  },
  {
    id: 'product',
    title: 'Product',
  },
  {
    id: 'clients',
    title: 'Clients',
  },
];

export const features = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Transparency and immutability',
    content:
      'Asetpay enables a transparent and immutable record of transactions. Each transaction is recorded in a block, which is linked to previous blocks, forming a chain.',
  },
  {
    id: 'feature-2',
    icon: shield,
    title: 'Centralized ecosystem',
    content:
      ' Asetpay offers a centralized ecosystem that prioritizes regulatory compliance, distinguishing itself from decentralized alternatives. By incorporating robust Know Your Customer (KYC) and Anti-Money Laundering (AML) measures, Asetpay empowers businesses to fulfill their legal obligations and mitigate potential legal risks associated with accepting cryptocurrencies.',
  },
  {
    id: 'feature-3',
    icon: send,
    title: 'Enhanced security',
    content:
      'Asetpay employs cryptographic techniques to secure transactions and user data.',
  },
];
export const featuresNew = [
  {
    id: 'feature-1',
    icon: star,
    title: 'Transparency and immutability',
    content:
      'Asetpay enables a transparent and immutable record of transactions. Each transaction is recorded in a block, which is linked to previous blocks, forming a chain.',
  },
];

export const feedback = [
  {
    id: 'feedback-1',
    content:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    name: 'Herman Jensen',
    title: 'Founder & Leader',
    img: people01,
  },
  {
    id: 'feedback-2',
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: 'Steve Mark',
    title: 'Founder & Leader',
    img: people02,
  },
  {
    id: 'feedback-3',
    content:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    name: 'Kenn Gallagher',
    title: 'Founder & Leader',
    img: people03,
  },
];

export const instructions = [
  {
    id: 'instruction-1',
    img: instruction_1,
    altText: 'Step 1',
    cardTitle: 'Safe & Secure',
    cardText:
      'A payment Using the technology known as AsetPay, businesses may securely accept and process online payments.',
  },
  {
    id: 'instruction-2',
    img: instruction_2,
    altText: 'Step 2',
    cardTitle: 'Cryptocurrency Vault',
    cardText:
      "For as long as you'd like, you can lock your coins in our safe to keep them secure. You will not be charged for it; it is free for you.",
  },
  {
    id: 'instruction-3',
    img: instruction_3,
    altText: 'Step 3',
    cardTitle: 'Affordable Plans',
    cardText:
      "If you'd like, you can also use our paid services, and we'll still give you excellent service for an industry-low processing cost.",
  },
  {
    id: 'instruction-4',
    img: instruction_4,
    altText: 'Step 4',
    cardTitle: 'Global Payments',
    cardText:
      'With quick, borderless, and affordable crypto transactions, expand your business internationally.',
  },
];

export const stats = [
  {
    id: 'stats-1',
    title: 'Community Members',
    value: '90000+',
  },
  {
    id: 'stats-2',
    title: 'Partners',
    value: '10+',
  },
  {
    id: 'stats-3',
    title: 'Entry Pass Minted',
    value: '210k+',
  },
];

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'How it Works',
        link: 'https://www.docs.asetpay.org',
      },
      {
        name: 'Explore',
        link: 'https://www.asetlab.org',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.terms-and-services.asetpay.org',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.help-center.asetpay.org',
      },
      {
        name: 'Suggestions',
        link: 'https://discord.com/invite/asetpay',
      },
      {
        name: 'Blog',
        link: 'https://www.blog.asetpay.org',
      },
    ],
  },
  {
    title: 'Partner',
    links: [
      {
        name: 'Our Partner',
        link: 'https://www.partners.asetpay.org',
      },
      {
        name: 'Become a Partner',
        link: 'https://www.partnership-request.asetpay.org',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: instagram,
    link: 'https://www.instagram.com/asetpayofficial/',
  },
  {
    id: 'social-media-3',
    icon: twitter,
    link: 'https://twitter.com/ASETPay',
  },
  {
    id: 'social-media-4',
    icon: linkedin,
    link: 'https://www.linkedin.com/company/asetpay/',
  },
];

export const clients = [
  {
    id: 'client-1',
    logo: zeta,
  },
  {
    id: 'client-2',
    logo: omni,
  },
  {
    id: 'client-3',
    logo: polygon,
  },
  {
    id: 'client-4',
    logo: aptos,
  },
];
