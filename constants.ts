import { EcosystemCard, Industry, Milestone, Stat } from './types';

export const NAV_ITEMS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Company', href: '#company' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    title: 'Engineering (SSD)',
    description: 'End-to-end turnkey water and wastewater treatment systems engineered for high performance.',
    image: 'https://picsum.photos/seed/eng/600/400'
  },
  {
    title: 'Resins',
    description: 'Comprehensive range of ion exchange resins for separation, purification and softening.',
    image: 'https://picsum.photos/seed/resin/600/400'
  },
  {
    title: 'Membranes',
    description: 'Advanced RO, UF and NF membranes delivering precision filtration and high-purity water.',
    image: 'https://picsum.photos/seed/memb/600/400'
  },
  {
    title: 'Chemicals',
    description: 'Proprietary process and speciality chemicals that ensure optimal system performance.',
    image: 'https://picsum.photos/seed/chem/600/400'
  },
  {
    title: 'Services',
    description: 'Lifecycle maintenance, audits, technical support, and O&M contracts.',
    image: 'https://picsum.photos/seed/serv/600/400'
  },
  {
    title: 'Digital Solutions',
    description: 'IonSite Digital Twin delivers real-time insights and predictive analytics.',
    image: 'https://picsum.photos/seed/digi/600/400'
  },
  {
    title: 'ZeroB',
    description: 'Home and community water purification systems offering safe, affordable drinking water.',
    image: 'https://picsum.photos/seed/zero/600/400'
  },
];

export const INDUSTRIES: Industry[] = [
  { name: 'Power', image: 'https://picsum.photos/seed/power/400/300' },
  { name: 'Pharmaceuticals', image: 'https://picsum.photos/seed/pharma/400/300' },
  { name: 'Food & Beverage', image: 'https://picsum.photos/seed/food/400/300' },
  { name: 'Textiles', image: 'https://picsum.photos/seed/textile/400/300' },
  { name: 'Chemical', image: 'https://picsum.photos/seed/chemical/400/300' },
  { name: 'Municipal', image: 'https://picsum.photos/seed/muni/400/300' },
  { name: 'Electronics', image: 'https://picsum.photos/seed/electro/400/300' },
];

export const MILESTONES: Milestone[] = [
  { 
    year: '1964', 
    title: 'Foundation',
    description: 'Ion Exchange is incorporated, marking the beginning of its journey in water and environment management.',
    image: 'https://picsum.photos/seed/m1964/800/600'
  },
  { 
    year: '1978', 
    title: 'Reverse Osmosis Pioneer',
    description: 'Becomes one of the first companies in India to introduce reverse osmosis technology.',
    image: 'https://picsum.photos/seed/m1978/800/600'
  },
  { 
    year: '1985', 
    title: 'Fully Indian Company',
    description: 'Transitions to 100% Indian ownership, strengthening its identity and independence.',
    image: 'https://picsum.photos/seed/m1985/800/600'
  },
  { 
    year: '1991', 
    title: 'International Operations',
    description: 'Expands beyond India with international operations in Southeast Asia.',
    image: 'https://picsum.photos/seed/m1991/800/600'
  },
  { 
    year: '1998', 
    title: 'ZeroB Launched',
    description: 'Launches ZeroB, a dedicated consumer brand for safe drinking water solutions.',
    image: 'https://picsum.photos/seed/m1998/800/600'
  },
  { 
    year: '2003', 
    title: 'Rail Neer Project',
    description: 'Commissions the first packaged drinking water plant for Indian Railways under the "Rail Neer" brand.',
    image: 'https://picsum.photos/seed/m2003/800/600'
  },
  { 
    year: '2014', 
    title: 'ZLD in Petrochemicals',
    description: 'Executes its first Zero Liquid Discharge (ZLD) project in the petrochemical sector.',
    image: 'https://picsum.photos/seed/m2014/800/600'
  },
  { 
    year: '2017', 
    title: 'Advanced Membrane Facility',
    description: 'Opens an integrated advanced membrane manufacturing facility in Goa.',
    image: 'https://picsum.photos/seed/m2017/800/600'
  },
  { 
    year: '2019', 
    title: 'New R&D Centre',
    description: 'Establishes a state-of-the-art research & development centre in Patancheru.',
    image: 'https://picsum.photos/seed/m2019/800/600'
  },
  { 
    year: '2021', 
    title: 'National Water Missions',
    description: 'Undertakes major EPC projects under national water initiatives like Jal Jeevan Mission and Namami Gange.',
    image: 'https://picsum.photos/seed/m2021/800/600'
  },
];

export const STATS: Stat[] = [
  { value: '40+', label: 'Countries Served' },
  { value: '1M+', label: 'Installations' },
  { value: '7', label: 'Manufacturing Units' },
  { value: '1000+', label: 'Service Engineers' },
];