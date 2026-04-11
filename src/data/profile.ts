/** Site copy — adapted from CV. Edit here to update the portfolio. */

export const profile = {
  name: "renuka singh virk",
  tagline:
    "AI & Data Science Intern at Logitech on the SW Analytics team.\nM.Sc. in Electrical & Electronic Engineering at EPFL — ML, optimization, and signal processing.",
  location: "Lausanne, Switzerland",
  heroNote:
    "I'm motivated by technically challenging work with societal relevance, and I care about the intersection of engineering, ethics, and human impact.",

  currentRole: {
    company: "Logitech Europe SA",
    title: "AI & Data Science Intern",
    team: "Software (SW) Analytics team",
    period: "2026",
    description:
      "I'm working with the SW Analytics team on agent-based systems that automate data analysis workflows and help teams make faster, better-informed decisions.",
  },

  intro: [
    "Right now I'm an AI & Data Science intern at Logitech with the Software (SW) Analytics team, building agent-based tooling for data analysis and decision support. In parallel I'm a Swiss M.Sc. student in Electrical & Electronic Engineering at EPFL, with experience across ML, optimization, and signal processing — from RAG for migration information to multimodal models for online safety.",
    "Whether you're hiring, exploring a master's thesis together, or just curious about my work, there's a dedicated projects page for code and reports, plus background and research here on the home site.",
  ],

  highlights: [
    {
      title: "Logitech · SW Analytics",
      text: "AI & Data Science intern: agents and workflows for analytics, automating data analysis and supporting decision-making.",
    },
    {
      title: "AI & applied ML",
      text: "RAG chatbots, multimodal deep learning, gradient-boosted models, and classical ML on real-world and clinical-scale data.",
    },
    {
      title: "Systems & signals",
      text: "OFDM communications, image and video processing, embedded C/assembly, and hardware-aware thinking.",
    },
    {
      title: "Teaching & impact",
      text: "Teaching assistant for EE and math courses at EPFL, first-aid instructor, and mentor for first-year students.",
    },
  ],

  projects: [
    {
      title: "Ask the Migration Reports",
      context: "RAG chatbot · IDIAP · EU ELIAS (Use Case 4)",
      year: "2024",
      description:
        "Developed a RAG chatbot that helps migrants and refugees access official migration reports (EMN Country Factsheets), with answers grounded in sources.",
      tech: ["Python", "RAG", "NLP"],
      demo: null as string | null,
      repo: "https://github.com/renukasinghvirk/qa-migration-reports",
      report:
        "https://github.com/renukasinghvirk/qa-migration-reports/blob/main/documents/report/Ask_the_Migration_Reports.pdf",
    },
    {
      title: "AI-driven transformation of hate-speech video content",
      context: "EE-559 · multimodal ML",
      year: "2025",
      description:
        "Deployed a multimodal deep-learning pipeline (BERT + Meta Llama 3 8B) to detect and rephrase hateful speech in video streams.",
      tech: ["Python", "PyTorch", "BERT", "Llama"],
      demo: null as string | null,
      repo: null as string | null,
      report: null as string | null,
    },
    {
      title: "World Values Survey — interactive data visualization",
      context: "COM-480 · team project",
      year: "2024",
      description:
        "Built a quiz-style visualization that maps user values to countries and explores the World Values Survey dataset in depth.",
      tech: ["JavaScript", "D3-style viz", "Data"],
      demo: "https://com-480-data-visualization.github.io/data-vizards/",
      repo: "https://github.com/com-480-data-visualization/data-vizards",
      report:
        "https://github.com/com-480-data-visualization/data-vizards/blob/master/process_book_final.pdf",
    },
    {
      title: "Signal & image processing lab",
      context: "EE-490(f)",
      year: "2024",
      description:
        "Filtering for images, edge and object detection (including HOG), template matching, and tracking for video.",
      tech: ["Python", "OpenCV", "DSP"],
      demo: null as string | null,
      repo: "https://github.com/renukasinghvirk/lab_signal_processing",
      report: null as string | null,
    },
    {
      title: "Coin-image classification with AlexNet",
      context: "EE-451",
      year: "2023",
      description:
        "Combined morphological segmentation with AlexNet-based classification to recognize coin denominations.",
      tech: ["Python", "CNN", "Segmentation"],
      demo: null as string | null,
      repo: "https://github.com/renukasinghvirk/Project_imageanalysis",
      report: null as string | null,
    },
    {
      title: "Clinical ML — intrusive memory & cardiovascular risk",
      context: "CS-433 · UZH",
      year: "2023",
      description:
        "Gradient-boosted models and logistic regression to distinguish PTSD vs. CUD from survey features; logistic regression on 328k+ patients for CVD risk under imbalance.",
      tech: ["Python", "Scikit-learn", "Health data"],
      demo: null as string | null,
      repo: "https://github.com/renukasinghvirk/project_inference",
      report: null as string | null,
    },
    {
      title: "OFDM acoustic transmitter / receiver",
      context: "EE-442",
      year: "2023",
      description:
        "Implemented OFDM with BPSK/QPSK, cyclic prefix, channel equalization, and phase tracking; evaluated spectral efficiency and sent images over an acoustic channel.",
      tech: ["MATLAB", "OFDM", "Communications"],
      demo: null as string | null,
      repo: "https://github.com/renukasinghvirk/OFDM_system",
      report: "https://github.com/renukasinghvirk/OFDM_system/blob/main/Wireless_project_final.pdf",
    },
    {
      title: "Game & embedded projects",
      context: "EE-310 · MICRO-210 · CS-112",
      year: "2021 — 2023",
      description:
        "Nintendo DS side-scroller in C; AVR assembly mini-games (keypad, LCD, EEPROM); ant-colony foraging simulation in C++.",
      tech: ["C", "Assembly", "C++", "Embedded"],
      demo: null as string | null,
      repo: "https://github.com/renukasinghvirk/NintendoDS_project",
      report: "https://github.com/renukasinghvirk/NintendoDS_project/blob/main/REMPLE_TUN.pdf",
    },
  ],

  thesis: {
    title: "Master's thesis — what I'm looking for",
    intro:
      "I'm seeking a thesis that combines rigorous methods with questions that matter in the real world — ideally at the boundary of machine learning, signal processing, and responsible deployment.",
    topics: [
      "Trustworthy NLP and retrieval: factuality, grounding, and evaluation in high-stakes domains",
      "Multimodal and generative models for safety, moderation, or accessibility",
      "Robust learning under distribution shift — with links to communications or sensing when relevant",
      "ML for health or social good, with attention to data limitations and ethics",
    ],
    footnote:
      "If you're a professor or researcher at EPFL or elsewhere, I'd be glad to share a CV, transcripts, or a short research statement — coffee or a video call works too.",
  },

  education: [
    {
      org: "EPFL",
      role: "M.Sc. Electrical and Electronic Engineering",
      period: "2023 — present",
      detail:
        "Master's in progress. Completed a 21-ECTS bridging program in 2024 to transition into Electrical Engineering.",
    },
    {
      org: "EPFL",
      role: "B.Sc. Life Sciences Engineering",
      period: "2020 — 2023",
      detail: "Undergraduate foundation in quantitative life sciences and engineering.",
    },
    {
      org: "Kantonsschule Romanshorn (Thurgau)",
      role: "High school academic exchange",
      period: "2018 — 2019",
      detail: "One-year exchange in Switzerland.",
    },
    {
      org: "Conservatoire de Lausanne",
      role: "Classical piano & music theory certificate",
      period: "2008 — 2020",
      detail: "Long-term training in performance and theory.",
    },
  ],

  experience: [
    {
      org: "Logitech Europe SA",
      role: "AI & Data Science Intern — Software (SW) Analytics",
      period: "2026",
      detail:
        "SW Analytics team: agent-based systems to automate data analysis workflows and support decision-making.",
    },
    {
      org: "EPFL",
      role: "Teaching Assistant — Electrical Systems and Electronics I (EE295)",
      period: "2025",
      detail: "Supporting labs and coursework for undergraduate EE students.",
    },
    {
      org: "EPFL",
      role: "Teaching Assistant — Electromagnetism & General Mathematics II",
      period: "2023 — 2024",
      detail: "Guiding students through core math and physics coursework.",
    },
    {
      org: "EPFL",
      role: "Mentor for first-year B.Sc. students",
      period: "2021 — 2023",
      detail: "Helped groups of first-years adapt to university life and academics.",
    },
    {
      org: "FirstMed SA",
      role: "First Aid Instructor — BLS & Pediatric BLS",
      period: "2021 — present",
      detail: "Teaching life-support skills with certification-level proficiency.",
    },
  ],

  skills: [
    { label: "Programming", items: "Python, C, C++, Julia, MATLAB, JavaScript" },
    { label: "Hardware / RTL", items: "Vivado Design Suite, AVR assembly, VHDL" },
    { label: "Languages", items: "French (native), English (native), German (B2)" },
  ],

  hobbies: ["Travel", "Piano", "Running", "Drawing", "Hiking", "Jewelry making"],

  /** Place your PDF at `public/cv.pdf` (or change `pdfUrl`). */
  cv: {
    pdfUrl: "/cv.pdf",
    downloadFilename: "Renuka_Singh_Virk_CV.pdf",
  },

  contact: {
    email: "renuka.singhvirk@epfl.ch",
    links: [{ label: "GitHub", href: "https://github.com/renukasinghvirk" }],
  },
} as const;
