import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  
  title: "Hi all, I'm Anup Bhaumik",
  description:
    "I'm passionate Full Stack web developer having personal project based experience of web applications with  React.js, Next.js, Node.js,MongoDB with orm and odm liberaries like prisma and mongoose.",
  resumeLink:'https://drive.google.com/file/d/1PDu99EbZHr1t1N5Nn9V4NFYjnIWoihhU/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'anupBH77',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  
  linkedin: 'https://www.linkedin.com/in/anup-bhaumik-a871b9226/',
  github: 'https://github.com/anupBH77',

};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive web applications in React.js'
        ),
        emoji('⚡ Building responsive static and dynamic websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Node.js & express.js'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'mongodb',
          iconifyTag: 'logos:mongodb',
        },
        

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'nodejs',
          iconifyTag: 'logos:nodejs',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    
   
     
    
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '60', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'graphic era University',
    subHeader: 'bachlors of computers application',
    duration: 'august 2021 - july 2024',
   
  },
];



export const projects: ProjectType[] = [
  {
    name: 'destify',
    desc: 'An hotel booking web app Built using NEXTJS, Authentication using next-AUTH, Typescript , MongoDB, Prisma ORM,TAILWIND CSS.',
    github: 'https://github.com/anupBH77/Destify',
    link: 'http://destify-web.vercel.app/',
  },
  {
    name: 'bingo-25 multiplayer game',
    desc: 'A Web based online multiplayer game Built using REACTJS, Tailwind CSS, NodeJS, WEBSOCKETS and JavaScript.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
    link: 'https://bingo25-multiplyer.onrender.com/',
  },
  {
    name: 'Ecommerce site',
    desc: 'A Web-based E-commerce Website Built using REACTJS, TAILWIND CSS, JavaScript and STRIPE for payment getaway.',
    github: 'https://github.com/anupBH77/react-ecommerce-site',
  },
  {
    name: 'fullstack blogging app',
    desc: 'a full-stack blog website that integrates Node.js, Express.js, React.js, MongoDB, and JWT authentication. This website allows users to register and log in. A logged-in user can post, like and comment on the post.',
    github: 'https://github.com/anupBH77/community-website',
  },
];


// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'anup bhaumik',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'anup bhaumik',
  image: 'https://avatars.githubusercontent.com/u/141262471?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    
  ],
};
