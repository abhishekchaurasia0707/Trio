export const products = [
  {
    id: 'it-server-rack',
    name: 'IT Server Rack',
    category: 'racks',
    description: 'Heavy-duty server racks designed for data centers and enterprise IT infrastructure. Features superior ventilation, cable management, and load capacity.',
    images: [],
    features: [
      'Heavy-duty steel construction',
      'Perforated doors for optimal airflow',
      'Removable side panels',
      'Cable management system',
      'Load capacity up to 1000kg',
      'Available in 42U, 45U, 47U'
    ],
    applications: [
      'Data Centers',
      'Server Rooms',
      'Enterprise IT',
      'Cloud Infrastructure'
    ],
    specifications: {
      'Material': 'Cold-rolled steel',
      'Depth': '800mm, 1000mm, 1200mm',
      'Width': '600mm, 800mm',
      'Finish': 'Powder-coated',
      'Color': 'Black (RAL 9005)'
    }
  },
  {
    id: 'network-rack',
    name: 'Network Rack',
    category: 'racks',
    description: 'Compact network racks ideal for telecom equipment, switches, and patch panels. Perfect for limited space installations.',
    images: [],
    features: [
      'Compact design',
      'Glass front door',
      'Lockable rear door',
      'Ventilated side panels',
      'Easy assembly',
      'Available in 6U to 24U'
    ],
    applications: [
      'Network Closets',
      'Telecom Rooms',
      'Small Offices',
      'Retail Locations'
    ],
    specifications: {
      'Material': 'Cold-rolled steel',
      'Depth': '600mm, 800mm',
      'Width': '600mm, 800mm',
      'Finish': 'Powder-coated',
      'Color': 'Black (RAL 9005)'
    }
  },
  {
    id: 'wall-mount-cabinet',
    name: 'Wall Mount Cabinet',
    category: 'cabinets',
    description: 'Space-saving wall-mount cabinets for edge computing, small networks, and security systems. Ideal for locations with limited floor space.',
    images: [
      '/products/Wall_Mount1.jpeg',
      '/products/Wall_Mount2.jpeg',
      '/products/Wall_Mount3.jpeg',
      '/products/Wall_Mount4.jpeg',
      '/products/Wall_Mount5.jpeg'
    ],
    features: [
      'Wall-mountable design',
      'Lockable glass door',
      'Removable rear panel',
      'Cable entry points',
      'Lightweight construction',
      'Available in 4U to 18U'
    ],
    applications: [
      'Edge Computing',
      'Security Systems',
      'Small Networks',
      'Retail Stores'
    ],
    specifications: {
      'Material': 'Cold-rolled steel',
      'Depth': '300mm, 450mm, 600mm',
      'Width': '600mm, 800mm',
      'Finish': 'Powder-coated',
      'Color': 'Black (RAL 9005)'
    }
  },
  {
    id: 'open-frame-rack',
    name: 'Open Frame Rack',
    category: 'racks',
    description: 'Open frame racks for maximum airflow and easy access. Perfect for environments requiring frequent equipment changes.',
    images: [],
    features: [
      'Open design for maximum airflow',
      'Easy equipment access',
      'Lightweight construction',
      'Quick assembly',
      'Cost-effective',
      'Available in various heights'
    ],
    applications: [
      'Data Centers',
      'Server Rooms',
      'Testing Labs',
      'Development Environments'
    ],
    specifications: {
      'Material': 'Cold-rolled steel',
      'Depth': '600mm, 800mm, 1000mm',
      'Width': '600mm, 800mm',
      'Finish': 'Powder-coated',
      'Color': 'Black (RAL 9005)'
    }
  },
  {
    id: 'perforated-door-rack',
    name: 'Perforated Door Rack',
    category: 'racks',
    description: 'High-ventilation racks with perforated doors for optimal cooling. Designed for high-density server deployments.',
    images: [],
    features: [
      '82% perforation for airflow',
      'Removable doors',
      'Heavy-duty construction',
      'Cable management',
      'Lockable security',
      'Available in 42U, 45U, 47U'
    ],
    applications: [
      'High-Density Data Centers',
      'Cloud Infrastructure',
      'Enterprise IT',
      'Colocation Facilities'
    ],
    specifications: {
      'Material': 'Cold-rolled steel',
      'Depth': '1000mm, 1200mm',
      'Width': '600mm, 800mm',
      'Finish': 'Powder-coated',
      'Color': 'Black (RAL 9005)'
    }
  },
  {
    id: 'vertical-pdu',
    name: 'Vertical PDU',
    category: 'pdu',
    description: 'Vertical Power Distribution Units for efficient power management in server racks. Zero U design maximizes rack space.',
    images: [
      '/products/PDU_1.jpeg',
      '/products/PDU_2.jpeg',
      '/products/PDU_3.jpeg',
      '/products/PDU_4.jpeg',
      '/products/PDU_5.jpeg',
      '/products/PDU_6.jpeg',
      '/products/PDU_7.jpeg',
      '/products/PDU_8.jpeg',
      '/products/PDU_9.jpeg',
      '/products/PDU_10.jpeg',
      '/products/PDU-11.jpeg',
      '/products/PDU-12.jpeg',
      '/products/PDU_13.jpeg'
    ],
    features: [
      'Zero U design',
      'Multiple outlet configurations',
      'Surge protection',
      'Current monitoring',
      'Locking outlets',
      'Available in various amperages'
    ],
    applications: [
      'Data Centers',
      'Server Rooms',
      'Enterprise IT',
      'Colocation'
    ],
    specifications: {
      'Input': '16A, 32A, 63A',
      'Output': 'Multiple IEC C13/C19',
      'Voltage': '230V AC',
      'Mounting': 'Vertical 0U',
      'Color': 'Black'
    }
  },
  {
    id: 'horizontal-pdu',
    name: 'Horizontal PDU',
    category: 'pdu',
    description: 'Horizontal Power Distribution Units for reliable power distribution. Features advanced monitoring and surge protection.',
    images: [],
    features: [
      '1U or 0U horizontal mounting',
      'Multiple outlet types',
      'LED current display',
      'Surge protection',
      'Circuit breaker protection',
      'Various configurations'
    ],
    applications: [
      'Server Racks',
      'Network Cabinets',
      'IT Equipment',
      'Audio/Video Systems'
    ],
    specifications: {
      'Input': '10A, 16A, 32A',
      'Output': 'Multiple IEC C13/C19',
      'Voltage': '230V AC',
      'Mounting': 'Horizontal 1U/0U',
      'Color': 'Black'
    }
  },
  {
    id: 'rack-accessories',
    name: 'Rack Accessories',
    category: 'accessories',
    description: 'Complete range of rack accessories including cable managers, shelves, panels, and cooling solutions.',
    images: [],
    features: [
      'Cable management arms',
      'Sliding shelves',
      'Blank panels',
      'Fan trays',
      'Power strips',
      'KVM switches'
    ],
    applications: [
      'All Rack Installations',
      'Cable Organization',
      'Equipment Support',
      'Cooling Solutions'
    ],
    specifications: {
      'Compatibility': 'Standard 19" racks',
      'Material': 'Steel/Plastic',
      'Finish': 'Powder-coated',
      'Color': 'Black'
    }
  },
  {
    id: 'cooling-fan',
    name: 'Cooling Fan',
    category: 'accessories',
    description: 'High-performance cooling fans for server racks and cabinets. Maintains optimal temperature for equipment.',
    images: [
      '/products/FAN TRAY_3.jpeg',
      '/products/FAN_TRAY1.jpeg',
      '/products/fan_tray2.jpeg'
    ],
    features: [
      'High airflow',
      'Low noise operation',
      'Variable speed control',
      'Easy installation',
      'Long lifespan',
      'Multiple sizes'
    ],
    applications: [
      'Server Racks',
      'Network Cabinets',
      'Enclosed Systems',
      'IT Equipment'
    ],
    specifications: {
      'Airflow': 'Up to 200 CFM',
      'Noise Level': '< 40 dB',
      'Voltage': '230V AC',
      'Mounting': '1U/2U',
      'Color': 'Black'
    }
  },
  {
    id: 'panel-harness',
    name: 'Panel Harness',
    category: 'accessories',
    description: 'Professional panel harness solutions for organized cable management and power distribution.',
    images: [],
    features: [
      'Custom configurations',
      'High-quality connectors',
      'Color-coded cables',
      'Strain relief',
      'Fire-resistant',
      'Various lengths'
    ],
    applications: [
      'Power Distribution',
      'Cable Management',
      'Server Rooms',
      'Data Centers'
    ],
    specifications: {
      'Connector Type': 'Custom',
      'Cable Gauge': 'Various',
      'Length': 'Custom',
      'Rating': 'High current',
      'Color': 'Multiple'
    }
  },
  {
    id: 'cable-management',
    name: 'Cable Management',
    category: 'accessories',
    description: 'Complete cable management solutions for organized and efficient infrastructure.',
    images: [],
    features: [
      'Cable organizers',
      'D-rings',
      'Vertical managers',
      'Horizontal managers',
      'Velcro ties',
      'Label holders'
    ],
    applications: [
      'All IT Installations',
      'Data Centers',
      'Server Rooms',
      'Network Closets'
    ],
    specifications: {
      'Material': 'Plastic/Metal',
      'Compatibility': '19" racks',
      'Finish': 'Various',
      'Color': 'Black/White'
    }
  },
  {
    id: 'custom-rack-solutions',
    name: 'Custom Rack Solutions',
    category: 'custom',
    description: 'Bespoke rack solutions designed to meet specific requirements. From concept to manufacturing.',
    images: [],
    features: [
      'Custom dimensions',
      'Special configurations',
      'Unique features',
      'Engineering support',
      'Quality assurance',
      'Fast turnaround'
    ],
    applications: [
      'Special Projects',
      'Unique Requirements',
      'OEM Solutions',
      'Enterprise Customization'
    ],
    specifications: {
      'Dimensions': 'Custom',
      'Material': 'Various',
      'Finish': 'Custom',
      'Features': 'As required'
    }
  }
]

export const industries = [
  {
    id: 'data-centers',
    name: 'Data Centers',
    icon: '🏢',
    description: 'Enterprise-grade infrastructure for mission-critical data center operations.',
    features: ['High-density solutions', 'Optimal cooling', 'Scalable designs']
  },
  {
    id: 'telecom',
    name: 'Telecom',
    icon: '📡',
    description: 'Reliable equipment for telecommunications infrastructure and network operations.',
    features: ['Network racks', 'Cable management', 'Power distribution']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'Secure and compliant infrastructure for healthcare IT systems.',
    features: ['HIPAA compliant', 'Secure enclosures', 'Reliable power']
  },
  {
    id: 'education',
    name: 'Education',
    icon: '🎓',
    description: 'Cost-effective solutions for educational institutions and research facilities.',
    features: ['Budget-friendly', 'Easy installation', 'Low maintenance']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Industrial-grade solutions for manufacturing and factory environments.',
    features: ['Heavy-duty', 'Durable construction', 'Industrial ratings']
  },
  {
    id: 'government',
    name: 'Government',
    icon: '🏛️',
    description: 'Secure infrastructure solutions for government and public sector organizations.',
    features: ['High security', 'Compliant designs', 'Reliable performance']
  },
  {
    id: 'banking',
    name: 'Banking',
    icon: '🏦',
    description: 'Secure and compliant infrastructure for financial institutions and banking systems.',
    features: ['Security-focused', 'Regulatory compliant', 'High availability']
  },
  {
    id: 'it-companies',
    name: 'IT Companies',
    icon: '💻',
    description: 'Modern infrastructure solutions for technology companies and startups.',
    features: ['Scalable', 'Modern design', 'Quick deployment']
  }
]

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'TechCorp India',
    role: 'CTO',
    avatar: 'RK',
    rating: 5,
    quote: 'Trio Power Technologies has been our trusted partner for 5 years. Their server racks are exceptional in quality and durability. The team\'s attention to detail and commitment to excellence is remarkable. Highly recommended for any enterprise IT infrastructure needs.',
    project: 'Data Center Expansion - 500+ Racks',
    location: 'Mumbai, Maharashtra'
  },
  {
    name: 'Priya Sharma',
    company: 'DataCenter Solutions',
    role: 'Infrastructure Manager',
    avatar: 'PS',
    rating: 5,
    quote: 'The custom rack solutions provided by Trio exceeded our expectations. Professional team, excellent support, and premium quality products. They delivered on time and within budget, which is rare in this industry.',
    project: 'Custom Rack Design - 200 Units',
    location: 'Bangalore, Karnataka'
  },
  {
    name: 'Amit Patel',
    company: 'Network Systems Ltd',
    role: 'Network Director',
    avatar: 'AP',
    rating: 5,
    quote: 'Outstanding product quality and customer service. Their PDUs and cable management solutions have significantly improved our infrastructure. The technical support team is always responsive and knowledgeable.',
    project: 'Network Cabinet Upgrade - 150 Units',
    location: 'Delhi NCR'
  },
  {
    name: 'Sneha Reddy',
    company: 'Enterprise IT Services',
    role: 'Operations Head',
    avatar: 'SR',
    rating: 5,
    quote: 'We\'ve been using Trio Power products across all our data centers. The reliability and performance are unmatched in the industry. Their products have reduced our maintenance costs by 40%.',
    project: 'Multi-Location Deployment - 1000+ Units',
    location: 'Hyderabad, Telangana'
  },
  {
    name: 'Vikram Singh',
    company: 'Cloud Infrastructure Pvt Ltd',
    role: 'CEO',
    avatar: 'VS',
    rating: 5,
    quote: 'Best-in-class products at competitive prices. The team at Trio Power Technologies truly understands enterprise requirements. Their ISO certification and quality standards give us complete confidence.',
    project: 'Cloud Data Center - 300 Racks',
    location: 'Pune, Maharashtra'
  },
  {
    name: 'Anjali Mehta',
    company: 'Telecom Giants India',
    role: 'Technical Lead',
    avatar: 'AM',
    rating: 5,
    quote: 'Exceptional build quality and innovative designs. Trio Power\'s solutions have helped us optimize our telecom infrastructure significantly. Their after-sales support is exemplary.',
    project: 'Telecom Rack Deployment - 400 Units',
    location: 'Chennai, Tamil Nadu'
  }
]

export const faqs = [
  {
    question: 'What is the lead time for standard products?',
    answer: 'Standard products typically have a lead time of 2-3 weeks. Custom solutions may require 4-6 weeks depending on the complexity of the requirements.'
  },
  {
    question: 'Do you offer installation services?',
    answer: 'Yes, we provide professional installation services across India. Our team of experts ensures proper setup and configuration of all equipment.'
  },
  {
    question: 'What warranty do you offer on your products?',
    answer: 'We offer a standard 2-year warranty on all our products. Extended warranty options are available for enterprise customers.'
  },
  {
    question: 'Can you customize rack dimensions?',
    answer: 'Absolutely! We specialize in custom rack solutions. Our engineering team can design and manufacture racks to your exact specifications.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we primarily serve the Indian market. However, we can evaluate international orders on a case-by-case basis.'
  },
  {
    question: 'What materials are used in your products?',
    answer: 'We use high-quality cold-rolled steel with powder-coated finish for durability. All materials meet international standards for IT infrastructure.'
  },
  {
    question: 'Do you provide technical support?',
    answer: 'Yes, we provide comprehensive technical support including installation guidance, troubleshooting, and maintenance recommendations.'
  },
  {
    question: 'What payment terms do you offer?',
    answer: 'We offer flexible payment terms including advance payment, letter of credit, and credit facilities for established customers.'
  }
]
