const { root } = require("postcss");

const sponsorImages = [
  {
    name: "Terratalent",
    src: "/images/terratallent.png",
  },
  {
    name: "Jobberman",
    src: "/images/jobberman.png",
  },
  {
    name: "I&P Investments",
    src: "/images/techpoint.png",
  },
  {
    name: "Bloomberg",
    src: "/images/bloomberg.png",
  },
  {
    name: "Kaatch",
    src: "/images/kaatch.png",
  },
  {
    name: "BlackInTech",
    src: "/images/blackintech.png",
  },
  {
    name: "Girraffe",
    src: "/images/girraffe.png",
  },
  {
    name: "AfricaBerlin",
    src: "/images/africanberlin.png",
  },
  {
    name: " Berlin Partner",
    src: "/images/berlinpartner.png",
  },
  {
    name: "SkilledUp Life",
    src: "/images/skilledup-life-logo.png",
  },
  {
    name: "Chancen",
    src: "/images/chancen.png",
  },
  {
    name: "GIZ",
    src: "/images/giz-logo.gif",
  },
];

const inMedia = [
  {
    name: "empact",
    src: "/images/empact.png",
  },
  {
    name: "Disrupt Ghana",
    src: "/images/disruptafricas.png",
  },
  {
    name: "Ghana Web",
    src: "/images/ghanaweb.png",
  },
  {
    name: "Gh Headlines",
    src: "/images/ghheadlines.png",
  },
  {
    name: "Joy Fm",
    src: "/images/joyfm.png",
  },
  {
    name: "Tech Point Africa",
    src: "/images/techpointafrica.webp",
  },
  {
    name: "Tv3",
    src: "/images/tv3-logo.png",
  },
];

const successStories = [
  {
    name: "Lee",
    src: "/people/korkor.png",
    story:
      "Korkor Mensah’s journey into tech began with an unexpected challenge. When she couldn’t assist her kids with their coding bootcamp assignments despite her IT experience, the embarrassment motivated her to enroll in Codetrain herself. Balancing family obligations and a full-time job in a fast-paced environment was challenging, but Korkor’s dedication never wavered—she never missed a class or assignment. Her hard work paid off with a promotion and significant growth in her professional network and online visibility. Inspired by her progress, Korkor is now a passionate advocate for coding, encouraging her children to pursue it with the same enthusiasm.",
    role: "Software Engineer",
  },
  {
    name: "see",
    src: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1200",
    story:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod .",
    role: "Software Engineer",
  },
  {
    name: "Lee",
    src: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1200",
    story:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod .",
    role: "Software Engineer",
  },
  {
    name: "Lee",
    src: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1200",
    story:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod .",
    role: "Software Engineer",
  },
];

const faq = [
  {
    question: "What is the duration of the course?",
    answer:
      "The duration of the course is 24 months. The first year is when most of the training happens. Candidates learn how to code from scratch and begin to build their portfolios right from month one.The second year focuses on career services. Trainees have internships, mock interviews, and a mega Demo Day to prepare them to officially graduate and land their first full-time roles.",
  },
  {
    question: "What is the schedule for the class?",
    answer:
      "You get access to course content and are expected to study it. You will receive instructions on what exercises to do. Once every week, there is a live class to go over the course content that was made available. You get to choose when your live class happens. Here are the options:",
    options: [
      { option: "Weekdays Live class" },
      { option: "Weekend Live class" },
      { option: "Virtual Live class" },
    ],
  },
  {
    question: "How many hours do I need to study per week?",
    answer:
      "You should be able to commit about 24 hours a week. (about a full day).",
  },
  {
    question: "Does Codetrain provide laptops?",
    answer: "No, we currently don’t provide laptops.",
  },
  {
    question: "What are the requirements to begin the course?",
    answer: "What you don't need",
    options: [
      { option: "Computer science degree" },
      { option: "Experience in tech" },
      { option: "A degree" },
    ],
  },
  {
    question: "But you do need to:",
    // answer: "What you don't need",
    options: [
      { option: "Be computer literate" },
      { option: "Be teachable" },
      { option: "Be willing to put in the work" },
      { option: "Pass our intake assessment" },
    ],
  },
  {
    question: "Do you offer any scholarships?",
    answer:
      "Yes, we offer part scholarships to candidates who need them and apply for them.",
  },
  {
    question:
      "Do you require an IT or computer science background for Codetrain?",
    answer:
      "No, people from diverse backgrounds of study can enroll and be successful.",
  },
  {
    question: "When do classes start?",
    answer: "January, May, and October.",
  },
  {
    question: "What certificate do I get after completing the program?",
    answer:
      "You get a coding bootcamp certificate as well as a portfolio full of projects you could use to apply for jobs.",
  },
];

const accept = [
  {
    title: "What you’ll need:",
    items: [
      {
        text: "Be computer literacy",
      },
      {
        text: "Pass our intake assessment",
      },
      {
        text: "Openness to learning and growth",
      },
      {
        text: "Willingness to put in the work",
      },
    ],
  },
  {
    title: "What you don’t need:",
    items: [
      {
        text: "Computer science certificate",
      },
      {
        text: "Previous tech experience",
      },
      {
        text: "Any degree",
      },
    ],
  },
];

const applicationProcess = [
  {
    id: 1,
    title: "Create account",
    desc: "Set up your account to start the admission process.",
  },
  {
    id: 2,
    title: "Complete application form",
    desc: "Fill out your application and ace the assessment test.",
  },
  {
    id: 3,
    title: "Start your Codetrain journey",
    desc: "You’re set to start your journey toward an exciting career in tech.",
  },
];

const whyCodetrain = [
  {
    title: " Industry-Aligned Curriculum",
    desc: "Our course content is constantly updated to reflect the latest trends and demands in the tech industry. We collaborate with leading tech companies to ensure that our training is relevant and practical",
  },
  {
    title: "Hands-On Learning",
    desc: "Start working on real-world projects from day one, building a portfolio that highlights your skills and distinguishes you in the job market.",
  },
  {
    title: "Mentorship and Support",
    desc: "You won’t be on this journey alone. Our experienced instructors and mentors are here to guide you every step of the way. Whether you’re struggling with a concept or need career advice, we’re here to help.",
  },
  {
    title: "Career Services",
    desc: "We offer career support to help you land internships and full-time positions. Our network of industry partners is always looking for talented Codetrain graduates.",
  },
  {
    title: "Flexibility",
    desc: "With both in-person and online options, you can access our top-tier education from anywhere, no matter your location.",
  },
];

const team = [
  {
    name: "Foster Frimpong",
    src: "/people/foster.jpg",
    story:
      "Hello! I’m Foster, your Admissions Manager at Codetrain. With 3 years in administration, I'm here to ensure your start with us is as smooth as possible. Outside of work, I'm all about video games and cheering for my favorite football team.",
    role: "Admissions Manager",
  },
  {
    name: "Ajekwe Sarah Kadoon",
    src: "/people/kadoon.jpg",
    story:
      "Hi! I’m Kadoon, Codetrain’s Digital Marketing Manager with 4+ years of experience launching startups and creating impactful digital solutions. I’m passionate about supporting students in tech and enjoy hiking, speaking at events, watching movies, and exploring the world.",
    role: "Digital Marketing Manager",
  },
  {
    name: " Ngozi Umekwe",
    src: "/people/ngozi.jpg",
    story:
      "I’m Ngozi, with 3+ years of experience in administration and leadership. I'm passionate about empowering students with essential non-technical skills and organizing career-boosting events. Outside of work, I enjoy watching movies or exploring new trails on adventures.",
    role: "Assistant Career Services Fellow",
  },
  {
    name: "Abdul Basit Ali",
    src: "/people/ali.jpg",
    story:
      "Hey! I’m Ali, a Full Stack Developer and Teaching Fellow with 2 years of experience in React, ExpressJs, and MongoDB. I’m passionate about making learning fun and interactive. When not coding, I’m gaming to sharpen my tech skills!",
    role: "Teaching Fellow",
  },
];

const team1 = [
  {
    name: "Joshua Doe",
    src: "/people/joshua.jpg",
    story:
      "With 2 years of experience and a certificate in software development, I create interactive, student-centered learning. I'm the creator of the Ezy Money app and bring real-world scenarios to the classroom. Outside teaching, I love photography and coding.",
    role: "Teaching Fellow",
  },
  {
    name: "William Brandt",
    src: "/people/william.jpg",
    story:
      "I've spent the last two years in software development and instruction, certified by Codetrain Africa. Transitioning from a non-tech background has been exhilarating! I focus on hands-on learning and creative problem-solving. Outside of coding, I enjoy reading and playing sports.",
    role: "Teaching Fellow",
  },
  {
    name: "Harrison Boateng",
    src: "/people/harrison.jpg",
    story:
      "Hi, I'm Harrison, a Teaching Fellow at Codetrain specializing in Software Development with 2 years of experience. I’ve built cool websites and am working on an exciting project. I’m dedicated to helping every student have their lightbulb moment. Outside work, I enjoy gaming.",
    role: "Teaching Fellow",
  },
];

const advisoryTeam = [
  {
    name: "Adwoa Boakye",
    src: "/people/adwoa boakye.jpeg",
  },
  {
    name: "Dona Marie",
    src: "/people/donna-marie.jpeg",
  },
  {
    name: "Gary White Hill",
    src: "/people/garywhitehill.png",
  },
  {
    name: "Harald Katzenschlager",
    src: "/people/harald katzenschlager.jpeg",
  },
  {
    name: "Tom McDonnell",
    src: "/people/tomMcDonnell.jpeg",
  },
  {
    name: "Hermann Gams",
    src: "/people/hermanngams 1.jpeg",
  },
  {
    name: "Jim Kaubisch",
    src: "/people/jimkaubisch.jpeg",
  },
];

module.exports = {
  sponsorImages,
  inMedia,
  successStories,
  faq,
  accept,
  applicationProcess,
  whyCodetrain,
  team,
  team1,
  advisoryTeam,
};
