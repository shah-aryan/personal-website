import React, { useState, useEffect } from "react";
import { GlobeAltIcon } from "@heroicons/react/outline";
import RichText from "../RichText";
import { motion } from "framer-motion";

const projects = [
  {
    heading: "Analyrics | 25,000+ Users",
    description: `<p>Developed "Analyrics," a full-stack web application with a lyrics analysis database of over 1 million songs, artists, and albums, using MongoDB, Express.js, React, Tailwind, RESTful APIs, and Node.js, resulting in low latency and a well-received iconic UI.<br><br>

    Implemented NLP algorithms for lyrics analysis to identify emotions, vocabularies, trends, and collaborations in music. Visualized interactive artist collaboration maps, emotion analyses, reading levels, and word clouds creatively using D3.js.<br><br>

    Developed efficient web scrapers for 1M+ web pages, implementing concurrency in Python, leveraging rate-limiting to avoid IP bans, and employing robust error handling, data validation, and retry mechanisms to ensure data integrity and reliability.<br><br>

    Received overwhelmingly positive feedback from users and tech companies (Apple, Spotify, Genius), with feedback praising the platform's creativity, usability, design, and innovative features, contributing to a user base of 25,000+ users.</p>`,
    websiteLink: "https://analyrics.info/",
    githubLink: "https://github.com/shah-aryan/Analyrics",
    stack : [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Python (NRCLex, SpaCy)",
      "D3.js",
      "DaisyUI",
      "Three.js",
      "Selenium",
      "TailwindCSS",
      "BeautifulSoup",
      "REST API",
      "Axios"
    ]
  },  
  {
    heading: "Batch",
    description: `<p>Every day, hundreds of Ubers travel from the same starting points (cities) to the same destinations (airports, stations, concerts, events) at overlapping times. Each of these rides pays full price, wastes resources, increases emissions, and contributes to unnecessary traffic congestion. On Campus, we all see this during every holiday, where hundreds of Ubers overlapped from Ann Arbor to DTW airport.  <br><br>
    
    We bult Batch to transform inefficient travel into cost-effective, convenient, and eco-friendly solutions with ride batching, focusing on the Umich campus. We Developed a platform to connect college students going to the same destination with Uber and Lyft rides to help them save over 80% on transportation costs, along with contributing towards more eco-friendly travel future. Had 50+ ride bookings and connected 200+ students through this platform, resulting in a total savings of over $10,000.
    
    </p>`,
    websiteLink: "https://batchme.app/",
    stack : [
      "Next.js",
      "Supabase",
      "Postgres",
      "AWS Lambda",
      "AWS SES",
      "AWS EventBridge",
      "Posthog",
      "Vercel"
    ]
  },  
  {
    heading: "Thread Library, Virtual Memory Pager, and Multithreaded Networked File Server",
    stack: [
      "C++",
      "C",
      "Unix",
      "Boost Library",
      "Multithreading",
      "Sockets",
      "POSIX"
    ],
    description: `<p>
    Implemented a kernel-level C++ thread library on Unix, managing CPU booting, thread management, handling 50+ CPU management tasks, interrupts, atomicity, and FIFO scheduling. Designed sophisticated synchronization primitives including spin-locks, mutexes, and conditional variables utilizing advanced Unix context management.<br><br>

    Developed a robust virtual memory management system supporting multiple processes with swap-backed and file-backed memory pages (similar to mmap()). Managed complex process lifecycle including creation, forking, and destruction, while handling page faults, MMU bit manipulation, and swap disk operations with copy-on-write support.<br><br>

    Constructed a highly concurrent, crash-consistent network file server supporting multiple users and nested file/folder structures. Optimized concurrency using Boost threads, implemented upgradeable locks, and utilized POSIX sockets for reliable client communication and system resilience.</p>`
  },
  {
    heading: "MHacks Google Hackathon Winner | PokerFace: Real-Time CV+AI Poker Strategy App",
    websiteLink: "https://devpost.com/software/poker-face",
    githubLink: "https://github.com/shah-aryan/pokerface",
    stack: [
      "YOLOV8",
      "Google Gemini + Breadboard",
      "Firebase",
      "Firestore",
      "React Native",
      "Expo",
      "FastAPI", 
      "Roboflow",
      "OpenCV",
      "WebSockets",
      "Eval7",
      "NumPy",
      "Pandas"
    ],
    description: `<p>Built PokerFace, a mobile application leveraging computer vision, mathematical models, emotion recognition, and multi-agent AI convergence to provide real-time poker strategy recommendations, gameplay tracking, user-specific tutoring, and game data storage.<br><br>

    Integrated a CV pipeline (99.9% mAP, 100% recall) to accurately identify poker chips and cards, feeding data into the PokerFace engine to generate pot odds, bet sizing, equities, and expected values, along with agentic RAG AI strategy reviews.</p>`
  },
  {
    heading: 'Linguist AI Video Player | "Breaking The Sound Barrier"',
    websiteLink: "https://github.com/devk03/Linguist",
    githubLink: "https://github.com/devk03/Linguist",
    stack: [
      "Convex (Backend, DB, Bucket)",
      "ChromaDB",
      "Cohere Aya LLM",
      "SymphonicLabs",
      "React",
      "Next.js",
      "ffMpeg",
      "shadcn/ui",
      "Tailwind",
      "Docker",
      "AWS",
      "TailwindCSS"
    ],
    description: `<p>Developed a video player for low/corrupted/no-audio videos, utilizing SymphonicLabs lip-reading technology and a multithreaded parallel-processing algorithm to generate 96% accurate transcripts and live subtitles in 100+ languages.<br><br>

    Enabled real-time LLM-powered conversations with video content using Retrieval-Augmented Generation (RAG), breaking language barriers and making video information accessible despite poor audio quality or corrupted audio.</p>`
  },  
  {
    heading: "PreciPal Companion App ML Model",
    description: "<p>Developed ML Object Detection Model for PreciPal, a companion app for PreciHealth's self-vaccination auto-injection device, to ensure accurate device positioning guidance for an improvement in vaccination safety and accessibility for underserved regions. Enhanced model robustness and accuracy by incorporating diverse data sources, including low-resolution images and 3D CAD simulations, and optimizing for resource efficiency, leading to successful deployment across phone types and lighting conditions.</p>",
    websiteLink: "https://www.precihealth.com/products/",
  },
  {
    heading: "Phi Beta Lambda Website | 1000+ Monthly Visitors",
    description: `<p>Developed a website for Phi Beta Lambda, my professional business fraternity, in an effort to learn graphic/web design and improve my design engineering skills. The website is used to showcase their events, activities, and achievements, and receives over 1000 monthly visitors. With SEO optimization, this website now sees a 50% increase in traffic. </p>`,
    websiteLink: "https://www.pblumich.com"
  },
  {
    heading: "Limit Order Book Simulator",
    description: "<p>Developed a synchronous limit order book simulator in Python, featuring trade matching, order execution, TCP/UDP connection protocol, and MVC (Model, View, Controller) structure. Simulated financial market limit order and provided simulation on which market making could occur. </p>",
    githubLink: "https://github.com/shah-aryan/limit_order_book_2",
  },
  {
    heading: "Pipelined Processor Simulator, Assembler, and Cache Simulator",
    websiteLink: "https://devpost.com/software/poker-face",
    githubLink: "https://github.com/shah-aryan/pokerface",
    stack: [
      "C++",
      "C"
    ],
    description: "Designed a pipelined LC2K CPU simulator in C, modeling fetch, decode, execute, memory, write-back, and optimizing hazards. Built an assembler and cache simulator with configurable policies for memory access, cache alignment, and instruction throughput."
  },
  {
    heading: "Robotics Scouting Apps | 4th place worldwide",
    description: `<p>Developed and launched 4 game Scouting and Pit Scouting apps, on iOS and Android to streamline, democratize, and improve data collection and analysis, with a successful reception of 150+ downloads. Apps used to collect & analyze datasets, leveraging 10,000+ data points, 30 unique variables, and a custom algorithm to make automated alliance decisions for best competition standing, resulting in a 4th place worldwide Robot Alliance position in 2019.</p>`,
    //websiteLink: "https://www.robostangs.com/about-the-app"
  }, 
  {
    heading: "Portfolio Rebalancing Algorithm",
    description: "Developed ML portfolio rebalancing algorithm, managing $20,000 portfolio for Ross School of Business's premier finance club, hedging risk and maximizing returns; contributed to an outperformance over the S&P 500 while minimizing Sharpe ratio risk.",
    githubLink: "https://github.com/AryamanGoenka0910/AlgorithmsW24",
  },
  // {
  //   id: 9,
  //   heading: "SQL++: Educational Tool for SQL/DSA",
  //   description: "<p>Built educational relational database in C++17, with CREATE, INSERT, DELETE, PRINT, and JOIN commands, using Hash Tables, AVL trees, Red-Black Trees, and Comparators to show how data structures can affect performance. Used by 25+ students. Developed a CLI for the database, including conditional data filtering (WHERE) and indexing (GENERATE), providing hands-on and accessible database education, focusing on query optimization, data structures in indexing, and the machine model</p>",
  // },
  // {
  //   id: 10,
  //   heading: "Forum Post Subject Identifier",
  //   description: "<p>Developed a Natural Language Processing program in C++ that leverages a Multivariate Bernoulli Naive Bayes Classifier algorithm to identify the subjects of forum posts, achieving a 92% success rate in subject classification. Implemented a custom binary search tree to store and search for elements efficiently, decreasing runtime and memory usage. </p>",
  // }
];

const CardGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [perLine, setPerLine] = useState(12);

  const updatePerLine = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setPerLine(5);
    } else if (width < 768) {
      setPerLine(6);
    } else if (width < 1024) {
      setPerLine(8);
    } else {
      setPerLine(12);
    }
  };

  useEffect(() => {
    updatePerLine();
    window.addEventListener("resize", updatePerLine);
    return () => window.removeEventListener("resize", updatePerLine);
  }, []);

  return (
    <div className="flex flex-col gap-20 mt-32 md:gap-24 md:mx-24 lg:mx-48">
      {projects.map((proj, index) => (
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
          key={index}
          className={`featured-alt flex flex-col-reverse gap-10 items-start relative md:gap-20 md:flex-row ${
            index % 2 === 0 ? "justify-start" : "justify-end text-right"
          }`}
        >
          <span className="featured-no absolute text-[10rem] text-primary-300 -top-32 opacity-20 hidden xl:block">
            0{index + 1}
          </span>
          {index === 0 && proj.image && (
            <div className="w-full z-10 relative md:w-1/2">
              {!isLoaded && (
                <div className="absolute bg-primary-400 animate-pulse w-full rounded-lg filter shadow-lg object-cover h-[340px]" />
              )}
              <img
                className="w-full rounded-lg filter shadow-lg object-contain h-auto"
                loading="lazy"
                width={684}
                height={355}
                src={proj.image}
                alt={proj.heading}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          )}
          <div className={`w-full z-10 md:w-2/3`}>
            <h3 className="text-primary text-4xl font-display mb-4 dark:text-white">
              {proj.heading}
            </h3>
            <RichText
              className="text-primary-400 text-base dark:text-neutral-300 mb-4 font-light "
              content={proj.description}
            />
            {proj.stack && (
              <RichText
                className="text-primary-400 text-base dark:text-neutral-300 italic font-light"
                content={"Technologies Used: " + proj.stack.join(", ")}
              />
            )}
            <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} relative`}>
              <div className="flex flex-row justify-center gap-4 py-10">
                {proj.websiteLink && (
                  <a
                    className="relative inline-block text-sm font-medium text-black dark:text-white group focus:outline-none focus:ring"
                    href={proj.websiteLink}
                    target="_blank"
                  >
                    <span className="absolute inset-0 border border-black dark:border-white dark:group-active:border-white group-active:border-black"></span>
                    <span className="flex items-center gap-3 px-4 py-3 transition-transform bg-222831 border border-black dark:border-white black:active:border-white active:border-black active:bg-white group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <GlobeAltIcon className="w-6 h-6" />
                      Website
                    </span>
                  </a>
                )}
                {proj.githubLink && (
                  <a
                    className="relative inline-block text-sm font-medium text-black dark:text-white active:text-white group focus:outline-none focus:ring"
                    href={proj.githubLink}
                    target="_blank"
                  >
                    <span className="absolute inset-0 border border-current"></span>
                    <span className="flex flex-row gap-3 items-center px-4 py-3 transition-transform bg-transparent border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-black dark:text-secondary-50 fill-current"
                      >
                        <path
                          d="M10.2397 0.517241C4.86796 0.517241 0.51709 4.86811 0.51709 10.2399C0.51709 14.5421 3.30019 18.1759 7.16493 19.4642C7.65106 19.5493 7.83336 19.2576 7.83336 19.0024C7.83336 18.7714 7.8212 18.0058 7.8212 17.1915C5.3784 17.6412 4.74643 16.596 4.55197 16.0491C4.4426 15.7696 3.96862 14.9067 3.55541 14.6758C3.21512 14.4935 2.72898 14.0438 3.54325 14.0317C4.30891 14.0195 4.85581 14.7366 5.03811 15.0282C5.91314 16.4988 7.31077 16.0856 7.86982 15.8304C7.95489 15.1984 8.21011 14.773 8.48963 14.53C6.32635 14.2869 4.06584 13.4483 4.06584 9.72942C4.06584 8.67208 4.4426 7.79705 5.06241 7.11647C4.96519 6.8734 4.62489 5.87683 5.15964 4.53997C5.15964 4.53997 5.97391 4.28475 7.83336 5.53654C8.61117 5.31778 9.43759 5.2084 10.264 5.2084C11.0904 5.2084 11.9169 5.31778 12.6947 5.53654C14.5541 4.2726 15.3684 4.53997 15.3684 4.53997C15.9031 5.87683 15.5628 6.8734 15.4656 7.11647C16.0854 7.79705 16.4622 8.65993 16.4622 9.72942C16.4622 13.4605 14.1895 14.2869 12.0262 14.53C12.3787 14.8338 12.6825 15.4171 12.6825 16.3286C12.6825 17.629 12.6704 18.6742 12.6704 19.0024C12.6704 19.2576 12.8527 19.5614 13.3388 19.4642C15.2689 18.8125 16.946 17.5721 18.1342 15.9173C19.3224 14.2626 19.9617 12.277 19.9623 10.2399C19.9623 4.86811 15.6114 0.517241 10.2397 0.517241Z"
                          fill="current"
                        />
                      </svg>
                      Github
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardGrid;
