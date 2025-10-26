"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 2,
    title: "Watfa",
    description:
      "A candy store website offering a variety of sweets and treats, developed using Next.js and Tailwind CSS for a delightful shopping experience.",
    image: "/images/projects/watfa.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://watfasekerleme.com/",
    private: true,
  },
  {
    id: 3,
    title: "Emerson Collective",
    description:
      "Emerson Collective merges charitable endeavors with strategic investments to cultivate and uphold innovative projects.",
    image: "/images/projects/emersoncollective.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.emersoncollective.com/",
    private: true,
  },
  {
    id: 4,
    title: "Fatma Gold",
    description:
      "A luxurious jewelry brand offering exquisite designs and personalized pieces.",
    image: "/images/projects/gold.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ahmad-Hanki/Fatma-gold",
    previewUrl: "https://fatma-gold.vercel.app/",
    private: false,
  },
  {
    id: 5,
    title: "Meta Duzey Client",
    description:
      "A user-friendly client interface for Meta Duzey, An appointment booking of a therapy website designed to facilitate seamless access to therapy sessions and resources.",
    image: "/images/projects/metaduzay-client.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ahmad-Hanki/metaduzey-user",
    previewUrl: "https://metaduzey-user.vercel.app/",
    private: false,
  },
  {
    id: 6,
    title: "Chikiwiki Restaurant",
    description:
      "A user-friendly client interface for Chikiwiki, a restaurant website designed to facilitate seamless access to menu items, reservations, and customer feedback.",
    image: "/images/projects/chikiwiki.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.chikiwiki.net/",
    private: true,
  },
  {
    id: 7,
    title: "Nutrition clinic",
    description:
      "Experience the convenience of natural clicks as your doctor organizes your dietary plan seamlessly.",
    image: "/images/projects/Nutrition-clinic.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ahmad-Hanki/yasarcolak",
    previewUrl: "https://yasarcolak.vercel.app/en",
    private: false,
  },
  {
    id: 8,
    title: "Uzability",
    description:
      "A very advanced motions and animations website for Uzability Studio, a web design and client services agency.",
    image: "/images/projects/uzability.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.uza.studio/",
    private: true,
  },
  {
    id: 9,
    title: "Rofouf",
    description:
      "A modern and animated website for Logistics & storage solutions company.",
    image: "/images/projects/rofouf.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.rofouf.co/",
    private: true,
  },
  {
    id: 10,
    title: "xPact",
    description:
      "A modern and animated website for Events Management and advisory company.",
    image: "/images/projects/xPact.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.xpact.net/",
    private: true,
  },
  {
    id: 11,
    title: "Troika",
    description:
      "A modern and animated website for events management and advisory company.",
    image: "/images/projects/troika.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ahmad-Hanki/troika",
    previewUrl: "https://troika-rouge.vercel.app/",
    private: false,
  },
  {
    id: 12,
    title: "Troika v2",
    description:
      "The second version of troiak, a modern and animated website for events management and advisory company.",
    image: "/images/projects/torika-v2.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "http://Troikaprod.com",
    private: true,
  },
  {
    id: 13,
    title: "Salary Platform - (Database no longer available)",
    description:
      "A platform where can help the user to know about his current salary range based on his skills and experience and so on.",
    image: "/images/projects/salary.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ahmad-Hanki/salary-platform",
    previewUrl: "https://salary-platform.vercel.app/",
    private: false,
  },

  {
    id: 14,
    title: "E-commerce - (Database no longer available)",
    description:
      "An e-commerce platform that offers a wide range of products, secure payment options, and a seamless shopping experience.",
    image: "/images/projects/ecommerce.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ahmad-Hanki/e-commerce",
    previewUrl: "https://koc-toptan.vercel.app/",
    private: false,
  },
  {
    id: 15,
    title: "Health Turkiye ",
    description:
      "A comprehensive health tourism platform connecting patients with top medical providers in Turkey for quality care and services.",
    image: "/images/projects/healthturkiye.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.healthturkiye.com",
    private: true,
  },
  {
    id: 16,
    title: "jumlaty ",
    description: "Saudi Arabia's leading restaurant procurement platform",
    image: "/images/projects/jumlaty.jpeg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.jumlaty.app/en",
    private: true,
  },
  {
    id: 17,
    title: "İşbul ",
    description:
      "A job listing platform connecting job seekers with employers, offering a wide range of opportunities across various industries.",
    image: "/images/projects/isbul.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.isbul.net",
    private: true,
  },
  {
    id: 17,
    title: "Bakicibul (Currently Working on V2) ",
    description:
      "It is Türkiye's largest caregiver finding platform, providing caregiver and assistant consultancy services with over 250,000 caregiver profiles seeking employment.",
    image: "/images/projects/bakicibul.webp",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.bakicibul.net/",
    private: true,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center mt-[100px] text-4xl font-bold text-white  mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full"
      >
        {/* map from last first */}
        {filteredProjects.reverse().map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              privateRepo={project.private}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
