import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/video-call.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `$.I worked as a web developer, mainly focusing on backend development using Laravel for over 2 years. Recently, I started learning the MERN stack to transition into a full-stack developer. This change reflects my enthusiasm for tackling new challenges and keeping up with industry advancements.

$.During my time in backend development, I specialized in technologies like Laravel, PHP, and MySQL, where I built efficient and secure web applications. Now, as I delve into frontend technologies such as React, Node.js, MongoDB, and Express.js, I aim to create dynamic and scalable full-stack projects.

$.I am currently seeking opportunities in full-stack development roles to utilize my extensive backend experience and emerging frontend skills in crafting innovative and impactful web solutions.`;

export const ABOUT_TEXT = `$.I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. With 2+ years of professional experience, I have worked with a variety of technologies, including laravel, javascript, Node.js, MySQL. 

$.My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
$.I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. 
$.Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2021 - October 2023",
    role: "Web Developer",
    company: "Livelyworks",
    description: `$. Optimized web applications using Laravel, Js, PHP to enhance user experience, ensuring seamless functionality.
        $. Programmed high-end projects from scratch, employing innovative solutions and cutting-edge technologies.
        $. Influenced collaborative efforts by mentoring interns, fostering a cohesive team environment for efficient project development.
        $. Solved complex technical challenges, collaborating closely with frontend teams to deliver successful and user-friendly applications.
        $. Accomplished in building and maintaining robust web solutions, showcasing strong problem-solving skills and technical expertise.
    `,
    technologies: ["Javascript", "Laravel(php)", "Php", "MySql"],
  },
  {
    year: "April 2021 - May 2021",
    role: "Web development Intern",
    company: "Internshala",
    description: `Successfully completed a six weeks online certified training on Web Development. The training consisted of Html & Css, Bootstrap, SQL and PHP modules`,
    technologies: ["Html", "Css", "Bootstrap", "Php", "Sql"],
  },
];

export const PROJECTS = [
  {
    title: "AI Content Generator Tool",
    image: project5,
    link: "https://ai-content-generator.ashwinmenghar.buzz/",
    description: `$. Developed an AI-powered content generator SaaS application using Gemini, increasing content creation efficiency by 40%. 
      $.Integrated Clerk for secure user authentication, enhancing data security measures and reducing unauthorized access incidents by 50%.
      $. Optimized real-time data processing in Redis, improving application responsiveness by 30%. $. Managed subscription services with Razorpay, streamlining payment processes and increasing subscription retention by 20%.`,
    technologies: [
      "Html",
      "Css",
      "TailwindCss",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "TypeScript",
      "Gemini",
      "Razorpay",
      "Clerk",
    ],
  },
  {
    title: "X-Clone",
    image: project1,
    link: "https://x-clone-psi.vercel.app/",
    description: `$. Developed a full-stack Twitter clone using Next.js, improving page load times by 40%. 
      $. Reduced database query times by 30% by implementing Prisma ORM with PostgreSQL. 
      $.Integrated Redis for query caching, reducing API response times by 50%. 
      $. Utilized Google OAuth 2.0 and JWT for authentication, enhancing data security.`,
    technologies: [
      "Html",
      "Css",
      "TailwindCss",
      "Next.js",
      "Node.js",
      "GraphQL",
      "Prisma ORM ",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Codegen",
      "Graphql-Request",
      "React-Query",
      "Typescript",
      "AWS",
    ],
  },
  {
    title: "Video Call App",
    image: project2,
    link: "https://github.com/ashwinmenghar/video-call-app",
    description:
      "A Video calling app that allows users to create and join video calls.",
    technologies: [
      "Html",
      "Css",
      "Ejs",
      "Bootstrap",
      "JavaScript",
      "Node.js",
      "Express",
      "Agora API",
    ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link: "https://portfolio.ashwinmenghar.buzz/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Html", "Css", "React", "TailwindCss"],
  },
  {
    title: "Echo Express Blogging Platform",
    image: project4,
    link: "https://echo-express-blogging.netlify.app/",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing and user profiles.",
    technologies: [
      "Html",
      "Css",
      "React",
      "TailwindCss",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
];

export const CONTACT = {
  address: "Nagpur, Maharashtra, India ",
  phoneNo: "+91 1234567890",
  email: "ashwinmenghar123@gmail.com",
};

export const INFO = {
  name: "Ashwin Menghar",
  role: "Full Stack Developer",
};
