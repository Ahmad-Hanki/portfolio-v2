export default function Skillsbar() {
  const skills = [
    { name: "HTML5", percentage: 97, color: "#FF6464" },
    { name: "CSS3", percentage: 98, color: "#9272D4" },
    { name: "JavaScript", percentage: 96, color: "#F7DF1E" },
    { name: "TypeScript", percentage: 92, color: "#0000CC" },
    { name: "React.js", percentage: 95, color: "#5185D4" },
    { name: "Next.js", percentage: 99, color: "#000000" },
    { name: "React Native", percentage: 91, color: "#61DBFB" },
    { name: "Tailwind CSS", percentage: 94, color: "#CA56F2" },
    { name: "Shadcn/UI", percentage: 90, color: "#FF7A00" },
    { name: "Framer Motion", percentage: 89, color: "#F23C50" },
    { name: "Node.js", percentage: 88, color: "#8CC84B" },
    { name: "Express.js", percentage: 87, color: "#000000" },
    { name: "Prisma ORM", percentage: 91, color: "#0C344B" },
    { name: "MySQL", percentage: 90, color: "#00758F" },
    { name: "PostgreSQL", percentage: 90, color: "#336791" },
    { name: "MongoDB", percentage: 89, color: "#47A248" },
    { name: "Firebase", percentage: 82, color: "#FFCA28" },
    { name: "AWS", percentage: 80, color: "#FF9900" },
    { name: "Vercel", percentage: 84, color: "#000000" },
    { name: "DigitalOcean", percentage: 83, color: "#0080FF" },
    { name: "Socket.IO", percentage: 81, color: "#010101" },
    { name: "REST APIs", percentage: 83, color: "#FF5733" },
    { name: "Postman", percentage: 82, color: "#FF6C37" },
  ];

  return (
    <div
      id="skill"
      className=" mt-[150px]  flex justify-center items-center bg-[#121212] dark:bg-gray-800 px-10"
    >
      <div className="w-[800px] max-w-full text-center mx-auto">
        <h4 className="text-3xl md:text-5xl font-bold mb-10 text-white">
          Skills
        </h4>
        {skills.map((skill, index) => (
          <div key={index} className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base font-semibold text-gray-400">
                {skill.name}
              </span>
              <span className="text-base font-semibold text-gray-400">
                {skill.percentage}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: skill.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
