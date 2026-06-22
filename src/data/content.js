export const nav = [
  { label: 'Work', to: 'portfolio' },
  { label: 'Services', to: 'services' },
  { label: 'Process', to: 'process' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Contact', to: 'contact' },
];

export const socials = [
  { icon: 'github', url: 'https://github.com' },
  { icon: 'linkedin', url: 'https://linkedin.com' },
  { icon: 'twitter', url: 'https://twitter.com' },
  { icon: 'dribbble', url: 'https://dribbble.com' },
];

export const heroLines = [
  '$ mateke deploy --target production',
  '✓ bundling assets ........... 1.2s',
  '✓ optimizing images .......... 0.8s',
  '✓ running lighthouse audit ... 98/100',
  '✓ live at mateke.studio ...... done in 2.1s',
];

export const stats = [
  { value: 200, suffix: '+', label: 'Clients served' },
  { value: 500, suffix: '+', label: 'Projects shipped' },
  { value: 98, suffix: '%', label: 'Client retention' },
  { value: 12, suffix: '', label: 'Countries reached' },
];

export const services = [
  {
    title: 'Web Development',
    desc: 'Fast, accessible, production-grade sites and web apps built with modern frameworks and a obsessive eye for performance budgets.',
    icon: 'code',
  },
  {
    title: 'Product Design',
    desc: 'Interfaces designed from first principles — wireframes, design systems, and prototypes that hold up under real usage.',
    icon: 'layout',
  },
  {
    title: 'Brand Identity',
    desc: 'Logos, type systems, and visual languages that give early-stage companies a voice that scales with them.',
    icon: 'pen-tool',
  },
  {
    title: 'Cloud & DevOps',
    desc: 'CI/CD pipelines, container orchestration, and infrastructure-as-code so deployments are boring — in a good way.',
    icon: 'server',
  },
  {
    title: 'Mobile Apps',
    desc: 'Cross-platform native experiences with React Native and Flutter, shipped to both app stores without the usual drama.',
    icon: 'smartphone',
  },
  {
    title: 'Growth & SEO',
    desc: 'Technical SEO, analytics instrumentation, and conversion-focused iteration once the product is live.',
    icon: 'trending-up',
  },
];

export const portfolio = [
  {
    title: 'Cargo Go',
    category: 'Logistics · Marketplace',
    desc: "A freight-matching marketplace connecting shippers and verified carriers across Uzbekistan, with live GPS tracking and invoice-based escrow payments.",
    tags: ['React', 'Real-time tracking', 'Marketplace'],
    url: 'https://cargogo.asia',
    color: '#5b8cff',
  },
  {
    title: 'Northbeam Finance',
    category: 'Fintech · Dashboard',
    desc: 'A real-time analytics dashboard for treasury teams, processing millions of transactions with sub-second query latency.',
    tags: ['Next.js', 'Data viz', 'Fintech'],
    url: '#',
    color: '#ff6b4a',
  },
  {
    title: 'Aperture Studio',
    category: 'Creative · Portfolio',
    desc: 'An immersive WebGL portfolio for a photography collective, built around scroll-driven scene transitions.',
    tags: ['WebGL', 'GSAP', 'Creative'],
    url: '#',
    color: '#5b8cff',
  },
  {
    title: 'Harvest & Co.',
    category: 'E-commerce',
    desc: 'A headless storefront for a direct-to-consumer food brand, handling seasonal traffic spikes without breaking a sweat.',
    tags: ['Shopify', 'Headless', 'E-commerce'],
    url: '#',
    color: '#ff6b4a',
  },
];

export const testimonials = [
  {
    name: 'Aibek Rashidov',
    role: 'Founder, Cargo Go',
    quote: 'Mateke rebuilt our platform from the ground up and it shows in every metric — load times, conversion, support tickets, all moved in the right direction.',
    rating: 5,
  },
  {
    name: 'Priya Nandakumar',
    role: 'Head of Product, Northbeam',
    quote: 'They think like engineers and design like a studio twice their size. The dashboard rebuild paid for itself within a quarter.',
    rating: 5,
  },
  {
    name: 'Daniel Osei',
    role: 'CEO, Harvest & Co.',
    quote: "Communication was the standout. We always knew exactly what was shipping and why. No surprises, no scope creep.",
    rating: 5,
  },
];

export const blog = [
  {
    title: 'Why your scroll animations feel cheap (and how to fix them)',
    category: 'Engineering',
    date: 'May 14, 2026',
    img: 'gradient-1',
  },
  {
    title: 'A practical guide to CI/CD for small teams',
    category: 'DevOps',
    date: 'Apr 29, 2026',
    img: 'gradient-2',
  },
  {
    title: "Design systems that don't fall apart at scale",
    category: 'Design',
    date: 'Apr 02, 2026',
    img: 'gradient-3',
  },
];

export const process = [
  { title: 'Discover', desc: 'We dig into the problem, the users, and the constraints before opening a design tool.' },
  { title: 'Design', desc: 'Wireframes to high-fidelity prototypes, reviewed with you at every checkpoint.' },
  { title: 'Build', desc: 'Clean, tested, version-controlled code — deployed continuously, not dumped at the end.' },
  { title: 'Launch & Grow', desc: 'We stay on after launch to monitor, iterate, and tune for real-world usage.' },
];
