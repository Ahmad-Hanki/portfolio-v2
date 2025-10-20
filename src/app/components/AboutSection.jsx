"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML5, CSS3, JavaScript, TypeScript</li>
        <li>React.js, Next.js, React Native</li>
        <li>Tailwind CSS, Shadcn/UI, Framer Motion</li>
        <li>Node.js, Express.js, Prisma ORM</li>
        <li>MySQL, PostgreSQL, MongoDB</li>
        <li>Firebase, AWS, Vercel, DigitalOcean</li>
        <li>Socket.IO, REST APIs, Postman</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Computer Engineering</li>
        <li>Iskenderun Technical University, Hatay, Türkiye</li>
        <li>2025</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-3xl"
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="data"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m Ahmad Hanki, a Full Stack JavaScript Developer passionate about
            building fast, reliable, and user-friendly web applications. I
            specialize in Next.js, React, and Node.js, creating scalable digital
            solutions that deliver great performance and design. <br />
            <br />
            I’ve worked with teams at Gezer Group, Uzability Studio, and on
            various freelance projects, developing everything from modern
            frontends to real-time backend systems. I love turning ideas into
            clean, functional code and always look for ways to make products
            more intuitive and enjoyable to use.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            ></TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
