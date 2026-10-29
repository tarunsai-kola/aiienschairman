export const personalInfo = {
  name: "Prof. Tumati Venkateswara Rao",
  shortName: "Prof. T. Venkateswara Rao",
  credentials: "PhD(AU), PhD(JNTUK), MS(BITS Pilani), SMIEEE",
  pronouns: "He / Him",
  designation: "Chairman",
  brandName: "AIIENS Campus",
  identity: "Academic Leader, ECE Professor & Chairman of AIIENS Campus",
  location: "Greater Vijayawada District, Andhra Pradesh, India",
  tagline: "Inspiring Engineering Excellence Through Rigor, Research & Leadership.",
  heroHeading: "Empowering Next-Gen Engineers Through Institutional Rigor & Innovation.",
  heroSubtitle: "Academic Leader, ECE Professor & BITS Pilani Alumnus with over 30 years of excellence across NBA, NAAC 'A' Grade & Autonomous Accreditations — currently steering AIIENS Campus as Chairman.",
  
  aboutDescription: "Prof. Dr. Tumati Venkateswara Rao is a distinguished academician, researcher, and educational administrator with more than three decades of leadership in higher technical education. As Chairman of AIIENS Campus, he brings visionary governance, industry-aligned pedagogy, and institutional excellence to empower engineering students. A proud alumnus of BITS Pilani with dual doctorates from JNTUK and Acharya Nagarjuna University, he has served as Principal, Head of Department (HOD) of ECE, and Senior Member of IEEE (SMIEEE), leading multiple institutions to prestigious NBA, NAAC 'A' Grade, and UGC Autonomous accreditations.",

  leadershipPhilosophy: "Education is not merely the transmission of syllabi; it is the deliberate cultivation of engineering mindset, research integrity, and autonomous problem-solving capabilities.",

  stats: [
    { value: "30+", label: "Years Experience" },
    { value: "50+", label: "Research Papers" },
    { value: "SMIEEE", label: "Senior Member" },
    { value: "Dual PhD", label: "JNTUK & AU" }
  ],

  interests: [
    "Institutional Governance",
    "AIIENS Campus Leadership",
    "Microwave & Antenna Design",
    "Outcome-Based Education (OBE)",
    "NBA & NAAC Accreditations",
    "Autonomous College Strategy",
    "Computational Electromagnetics",
    "Fiber Optic Communications",
    "Applied AI in Engineering"
  ],

  profileImage: "/images/prof-venkateswara-rao.png",
  googleScriptUrl: import.meta.env.VITE_GOOGLE_SCRIPT_URL || "",
  email: "tumativrao@gmail.com",
  phone: "+91 94401 54728",
  
  socials: {
    linkedin: "https://www.linkedin.com/in/prof-tumati-venkatewara-rao-smieee-76092240/",
    linkedinHandle: "prof-tumati-venkatewara-rao-smieee-76092240",
    scholar: "https://scholar.google.com/citations?user=T_Venkateswara_Rao",
    scholarHandle: "Google Scholar Profile",
    ieee: "https://www.ieee.org",
    ieeeHandle: "Senior Member (SMIEEE)"
  }
};

export const aiiensBrand = {
  name: "AIIENS Campus",
  tagline: "Empowering Next-Gen Engineers Through Practical Excellence.",
  description: "Under the chairmanship of Prof. Tumati Venkateswara Rao, AIIENS Campus delivers practical engineering learning experiences, project-first bootcamps, and industry mentorship to prepare engineering students for global tech careers.",
  masterCard: "/images/brand/aiiens-master.png",
  website: "https://www.aiienscampus.in",
  domain: "aiienscampus.in",
  chairmanRole: "Prof. Tumati Venkateswara Rao serves as the Chairman of AIIENS Campus, architecting the academic roadmap, industry partnerships, and engineering excellence programs.",
  initiatives: [
    {
      id: "aiiens-campus",
      name: "AIIENS Campus",
      chairmanStatus: "Chairman Led",
      category: "Education Technology & Incubation",
      description: "Under the chairmanship of Prof. Tumati Venkateswara Rao, AIIENS Campus delivers practical engineering learning experiences, project-first bootcamps, and industry mentorship to prepare engineering students for global tech careers.",
      targetAudience: "Engineering students, academic institutions, and technology recruiters.",
      focus: [
        "Chairman-guided technical curriculum",
        "Hands-on project development sprints",
        "Outcome-based skill verification",
        "Bridging academia with global software industry"
      ],
      pillars: [
        {
          title: "Project-First Engineering",
          desc: "Transcending passive theoretical lectures into production-grade software development, systems engineering, and applied AI."
        },
        {
          title: "Outcome-Based Skill Verification",
          desc: "Industry-aligned rubric assessments certifying competency across modern full-stack, cloud, and computational stacks."
        },
        {
          title: "Expert Mentorship Sprints",
          desc: "Direct guidance by senior engineering practitioners combined with Dr. Rao's 30+ years of institutional academic leadership."
        },
        {
          title: "Autonomous Placement Pathways",
          desc: "Dedicated project portfolios, technical interview preparation, and institutional hiring partnerships with tech enterprises."
        }
      ],
      ctaText: "Explore AIIENS Campus",
      url: "https://www.aiienscampus.in",
      domain: "www.aiienscampus.in",
      logo: "/images/brand/aiiens-campus.png",
      badgeColor: "bg-blue-500/10 text-cyan-400 border-cyan-500/30"
    }
  ]
};

export const projects = [
  {
    id: "aiiens-incubator",
    number: "01",
    name: "AIIENS Campus Skill Incubator",
    category: "Academic Leadership",
    tagline: "Industry-aligned technical skill roadmap and project assessment system for engineering undergraduates.",
    problem: "Traditional academic syllabi in engineering universities struggle to keep pace with rapid evolutions in software engineering, applied AI, and cloud systems, causing high placement deficits.",
    solution: "Established a structured project-driven talent incubation ecosystem at AIIENS Campus featuring hands-on coding roadmaps, live mentor evaluations, and outcome-based competency badges.",
    contribution: "Serving as Chairman: Formulated the governance charter, aligned academic sprints with industry expectations, and established institutional review boards.",
    technologies: ["Outcome-Based Education (OBE)", "Curriculum Architecture", "Applied AI Tracks", "Project Sprint Roadmaps", "Industry Mentorship"],
    status: "Active Institutional Deployment",
    image: "/images/projects/aiiens-incubator.jpg",
    screenshot: "/images/projects/aiiens-incubator.jpg",
    liveUrl: "https://www.aiienscampus.in",
    domain: "aiienscampus.in"
  },
  {
    id: "mimo-antenna",
    number: "02",
    name: "Dual-Band MIMO Antenna for 5G & Ku-Band",
    category: "Research & Antennas",
    tagline: "Dielectric-stacked microstrip patch antennas with mutual coupling suppression for satellite & wireless communications.",
    problem: "Compact wireless and satellite transceivers require multi-band operation with minimal electromagnetic interference between adjacent antenna elements in limited space.",
    solution: "Engineered high-isolation microstrip patch antenna architectures utilizing dielectric substrate stacking and defected ground structures (DGS), yielding superior gain and wide impedance bandwidth.",
    contribution: "Formulated the mathematical EM wave models, conducted CST/HFSS simulations, and fabricated test prototypes with validated return loss (S11 < -10 dB).",
    technologies: ["HFSS", "CST Microwave Studio", "Microstrip Patch", "Dielectric Stacking", "MIMO Diversity", "Vector Network Analyzer"],
    status: "Peer-Reviewed & Published",
    image: "/images/projects/mimo-antenna.jpg",
    screenshot: "/images/projects/mimo-antenna.jpg",
    liveUrl: "https://scholar.google.com/citations?user=T_Venkateswara_Rao",
    domain: "researchgate.net/publication"
  },
  {
    id: "accreditation-framework",
    number: "03",
    name: "Institutional Accreditation & Quality Framework",
    category: "Institutional Governance",
    tagline: "Holistic institutional compliance framework driving NBA, NAAC 'A' Grade, and Autonomous status attainment.",
    problem: "Colleges face complex operational and pedagogical bottlenecks when preparing self-study reports (SSR), Course Outcome (CO) / Program Outcome (PO) mapping, and continuous quality audit metrics.",
    solution: "Pioneered a systemic Outcome-Based Education (OBE) audit methodology that aligns lesson plans, laboratory experiments, student feedback, and placement records directly to accreditation criteria.",
    contribution: "Led institutional steering committees as Principal & HOD, successfully securing NAAC 'A' Grade accreditation, NBA Tier-1 accreditation, and UGC Autonomous recognition.",
    technologies: ["OBE Framework", "CO-PO Attainment", "NAAC Criteria 1–7", "NBA Criteria 1–10", "Academic Audits", "Institutional Governance"],
    status: "Successfully Implemented",
    image: "/images/projects/accreditation-framework.jpg",
    screenshot: "/images/projects/accreditation-framework.jpg",
    liveUrl: "https://www.linkedin.com/in/prof-tumati-venkatewara-rao-smieee-76092240/",
    domain: "institutional-governance.edu"
  },
  {
    id: "computational-em",
    number: "04",
    name: "Computational Electromagnetics & Optical Sensors",
    category: "Computational EM",
    tagline: "FDTD wave propagation simulations and fiber Bragg grating optical sensor arrays for high-EMI industrial monitoring.",
    problem: "Electromagnetic interference (EMI) severely distorts traditional electronic sensor telemetry in high-voltage substations and radar transmitter environments.",
    solution: "Researched optical fiber communication and fiber Bragg grating (FBG) sensing mechanisms combined with finite-difference time-domain (FDTD) computational modeling to achieve immune data acquisition.",
    contribution: "Guided computational EM simulations, analyzed spectral response waveforms, and published multiple IEEE/journal conference papers.",
    technologies: ["Computational EM", "FDTD Modeling", "Fiber Bragg Gratings", "Optical Fiber Sensors", "MATLAB", "Electromagnetic Fields"],
    status: "Published Research",
    image: "/images/projects/computational-em.jpg",
    screenshot: "/images/projects/computational-em.jpg",
    liveUrl: "https://scholar.google.com/citations?user=T_Venkateswara_Rao",
    domain: "scholar.google.com"
  },
  {
    id: "doctoral-consortium",
    number: "05",
    name: "Research Mentorship & Faculty R&D Consortium",
    category: "Academic Leadership",
    tagline: "Interdisciplinary mentoring engine fostering doctoral dissertations, patents, and peer-reviewed IEEE publications.",
    problem: "Early-career engineering faculty and postgraduate researchers often lack structured mentorship in mathematical rigor, patent drafting, and high-impact journal indexing.",
    solution: "Mentored dozens of doctoral scholars and postgraduate dissertations in ECE, instituting research clinics, paper writing workshops, and IEEE Vizag Bay Section technical colloquia.",
    contribution: "Supervised doctoral research scholars, reviewed international IEEE conferences, and established institutional R&D cells with sponsored lab equipment.",
    technologies: ["IEEE Technical Sponsorship", "Scopus / SCI Indexing", "Doctoral Advising", "Patent Filing Support", "R&D Grant Procurement"],
    status: "30+ Years Ongoing Impact",
    image: "/images/projects/research-consortium.jpg",
    screenshot: "/images/projects/research-consortium.jpg",
    liveUrl: "https://www.linkedin.com/in/prof-tumati-venkatewara-rao-smieee-76092240/",
    domain: "ieee.org/membership"
  }
];

export const educationData = [
  {
    institution: "JNTU Kakinada (JNTUK)",
    location: "Kakinada, Andhra Pradesh",
    period: "Doctor of Philosophy",
    qualification: "Ph.D. in Electronics and Communication Engineering (ECE)",
    score: "Doctorate Awarded",
    badge: "Ph.D. (JNTUK)",
    description: "Advanced research in microwave antennas, microstrip patch design, and computational electromagnetics."
  },
  {
    institution: "Acharya Nagarjuna University (AU)",
    location: "Guntur, Andhra Pradesh",
    period: "Doctor of Philosophy",
    qualification: "Ph.D. in Electronics",
    score: "Doctorate Awarded",
    badge: "Ph.D. (AU)",
    description: "Doctoral dissertation focused on high-frequency electromagnetic theory, optical fiber communications, and sensors."
  },
  {
    institution: "BITS Pilani (Birla Institute of Technology & Science)",
    location: "Pilani, Rajasthan",
    period: "Master of Science",
    qualification: "M.S. in Software Systems",
    score: "Distinction",
    badge: "BITS Pilani Alumnus",
    description: "Rigorous graduate coursework bridging software architectures, computational algorithms, and system integration."
  },
  {
    institution: "Premier Technical University",
    location: "Andhra Pradesh, India",
    period: "Master of Technology",
    qualification: "M.Tech in Microwave Engineering",
    score: "First Class with Distinction",
    badge: "M.Tech Microwave",
    description: "Specialized post-graduate training in microwave propagation, transmission lines, waveguides, and radar electronics."
  }
];

export const experienceData = [
  {
    period: "2024 — Present",
    role: "Chairman",
    organization: "AIIENS Campus",
    location: "Andhra Pradesh / India",
    type: "Executive Leadership",
    description: "Guiding the institutional vision, academic strategy, and industry acceleration programs of AIIENS Campus to empower engineering students with cutting-edge technical competencies.",
    bullets: [
      "Steering the academic roadmap and student incubation sprints across modern computing, applied AI, and systems engineering.",
      "Championing outcome-based project learning models that seamlessly transition students into top-tier tech careers.",
      "Establishing institutional alliances with engineering colleges, recruiters, and tech enterprises."
    ]
  },
  {
    period: "2018 — 2024",
    role: "Principal & Professor of ECE",
    organization: "Vijaya Institute of Technology for Women (VITW)",
    location: "Vijayawada, Andhra Pradesh",
    type: "Academic Administration",
    description: "Served as the head of the institution, directing academic excellence, faculty recruitment, infrastructure development, and student development.",
    bullets: [
      "Successfully drove institutional accreditation initiatives including NAAC, NBA, and UGC Autonomous readiness.",
      "Expanded student enrollment, industry internships, and international technical symposium participation.",
      "Supervised faculty development programs and elevated college research output and lab modernization."
    ]
  },
  {
    period: "2005 — 2018",
    role: "Professor & Head of Department (HOD), ECE",
    organization: "Sir C. R. Reddy College of Engineering",
    location: "Eluru, Andhra Pradesh",
    type: "Department Leadership & Teaching",
    description: "Led one of the largest ECE departments in the region with over 800+ undergraduate and postgraduate students, managing academic curriculums and research laboratories.",
    bullets: [
      "Instrumental in securing NBA accreditation for the ECE department across multiple continuous evaluation cycles.",
      "Established advanced laboratories in Microwave Engineering, Optical Communications, VLSI, and Digital Signal Processing.",
      "Mentored faculty research grants and guided numerous M.Tech and Ph.D. research projects."
    ]
  },
  {
    period: "1993 — 2005",
    role: "Associate Professor & Assistant Professor of ECE",
    organization: "Sir C. R. Reddy College of Engineering",
    location: "Eluru, Andhra Pradesh",
    type: "Teaching & Research",
    description: "Delivered comprehensive undergraduate and postgraduate lectures in Electromagnetic Fields, Antenna Theory, Microwave Engineering, and Fiber Optics.",
    bullets: [
      "Recognized with multiple best-teacher commendations for exemplary pedagogical clarity and student mentorship.",
      "Initiated student technical associations, annual technical symposiums, and IEEE student branches."
    ]
  },
  {
    period: "Distinguished Service",
    role: "Senior Member IEEE (SMIEEE) & Former Chairman, IETE",
    organization: "IEEE / Institution of Electronics and Telecommunication Engineers",
    location: "India / Vizag Bay Section",
    type: "Professional Governance",
    description: "Active contributor and leader in national and international engineering professional societies.",
    bullets: [
      "Elevated to Senior Member of IEEE (SMIEEE), an honor reserved for engineers with demonstrated significant performance.",
      "Served as Chairman and Honorary Secretary of IETE Local Centre, organizing technical seminars and conferences.",
      "Active member of the IEEE Antennas and Propagation Society (AP-S) Vizag Bay Section."
    ]
  }
];

export const achievementsData = [
  {
    title: "Senior Member IEEE (SMIEEE)",
    description: "Conferred Senior Membership by IEEE in recognition of extensive technical leadership, publications, and service to the electronics and telecommunication engineering community."
  },
  {
    title: "BITS Pilani Alumnus",
    description: "Completed Master of Science in Software Systems from Birla Institute of Technology and Science, Pilani, mastering computational architectures alongside hardware microwave engineering."
  },
  {
    title: "Dual Doctorate in Electronics & ECE",
    description: "Awarded Ph.D. in Electronics from Acharya Nagarjuna University and Ph.D. in ECE from JNTU Kakinada, demonstrating profound scholarly dedication."
  },
  {
    title: "NBA & NAAC 'A' Grade Champion",
    description: "Spearheaded institutional self-study reports and compliance audits, securing NAAC 'A' Grade and multi-year NBA accreditations for leading technical colleges."
  },
  {
    title: "50+ Research Papers & Citations",
    description: "Authored peer-reviewed papers in IEEE transactions, Springer, Elsevier, and international journals in microwave antennas and optical communication."
  }
];
