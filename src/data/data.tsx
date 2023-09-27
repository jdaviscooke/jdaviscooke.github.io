import {
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jason Davis-Cooke',
  description: "JDC's personal site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Jason Davis-Cooke.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Massachusetts based <strong className="text-stone-100">Software Engineer</strong> currently looking
        for my next opportunity. I have a wide variety of experiences in both IC roles and management roles that 
        help me bring a unique perspective to any job. I am driven by my hunger for learning and am best when 
        thrown into something outside of my comfort zone and am forced to learn quickly to rise
        to new challenges. Below you can download my resume for a brief summary of my experience, and in the later sections
        of this page you can read a more in depth descrition of what I've accomplished over my career.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside of work, I enjoy physical exersize and challenge, with my latest interest being triathlons. 
        I am also a <strong className="text-stone-100">very casual</strong> golfer, and I also play in a weekly adult 
        floor hockey game. 
        Finally, I am the co-host of the <strong><a href="https://www.youtube.com/channel/UCOouOjxX0Kq6aHno9_bZZeg"> Brainwave Exchange Podcast </a> </strong>
            where we aim to learn from the stories and experiences of everyday people. 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description:(
    <>
    <p>I've been in the software profession full time since 2012 and in that time I have held a wide range of positions
  giving me a diverse set of experiences to pull from when solving problems. The roles I have held include Performance Engineer,
  DevOps Engineer, Lead Software Engineer, Principal Software Engineer, Senior Engineering Manager, and Director of Software Engineering.
  I have had as many as 12 direct reports spread across 4 different teams, and had team members in thet US, Brazil, Europe, and India so I am
  comfortable with distributed/remote teams. I build my teams on a foundation of trust and strongly believe that people bring their best to work
  when they feel safe, respected, and heard. To this end, I provide my teams with the latitude to do their jobs as they see fit within a defined set
  of guardrails. I believe in removing friction on well defined paths and patterns and introducing friction onto non-standard diversions from those 
  patterns. This lets engineers move fast and express themselves without risking the quality and integrity of the systems being worked on, unless
  they have a strong and compelling reason to do so.</p>
  <p>I have spent the latter half of my career in positions where dealing with uncertainty and being able to pivot quickly were a requirement. I have learned
  to handle competing priorities from multiple stakeholders and to set realistic expectations based on available engineering capacity. I have worked 
  with product managers, senior leadership, and other business stakeholders to craft engineering roadmaps that provide reasonable estimates 
  for the completion of features desired by the business. </p>
    </> 
  ),
  aboutItems: [
    {label: 'Location', text: 'Whitinsville, MA', Icon: MapIcon},
    {label: 'Age', text: '34', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American / English', Icon: FlagIcon},
    {label: 'Interests', text: 'Triathlons, Golf, Peloton, Music', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Management',
    skills: [
      {
        name: 'Communication',
        level: 10,
      },
      {
        name: 'Team Building',
        level: 8,
      },
      {
        name: 'Hiring',
        level: 8,
      },
      {
        name: 'Agile / Scrum',
        level: 8,
      },
    ],
  },
  {
    name: 'Infrastructure',
    skills: [
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'Terraform',
        level: 8
      },
      {
        name: 'GCP',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'python',
        level: 8,
      },      
      {
        name: 'postgres',
        level: 9,
      },
      {
        name: 'javascript/typescript',
        level: 6,
      },

      {
        name: 'C#',
        level: 3,
      },
    ],
  },
  {
    name: 'API Frameworks',
    skills: [
      {
        name: 'Flask/FastAPI',
        level: 9,
      },
      {
        name: 'ExpressJS',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'access-management-api',
    description: 'Gpython api built as interface for open policy agent providing attribute based access controls for Indigo Marketplace with strict p95 5ms latency requirements.',
    url: '',
    image: porfolioImage1,
  },
  {
    title: 'identity-api',
    description: 'python api built to manage user identity information for the Indigo Marketplace',
    url: '',
    image: porfolioImage2,
  },
  {
    title: 'accounts-api',
    description: 'python api built to manage business entities such as farms and grain elevators',
    url: '',
    image: porfolioImage3,
  },
  {
    title: 'marketplace-ingestion-api',
    description: 'python api built to ingest third party grain bid information for usage in the Indigo Marketplace.',
    url: '',
    image: porfolioImage4,
  },
  {
    title: 'clio-api',
    description: 'python api built to accept upload of key documents such as signed contracts and financial documents. also tracked the status of workflows involving those documents.',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'transport-pricing-api',
    description: 'python api built to allow transport carriers to define arbitrary zones and pricing to transport grain within those zones. upon requesting pricing information for the transportation of grain between two points, the api used a custom ball tree algorithm (patent pending) to find the best price for transportation. ',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Sym Pipeline Insights and Nominations',
    description: 'React SPA with a python API backend used to track the progress of candidate microbes through the research and commercialization pipelines. ',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Genomic Pipeline',
    description: 'modular, scalable pipeline built using AWS Step Functions and AWS Batch to run dockerized genomic analyses of collected microbial samples',
    url: '',
    image: porfolioImage8,
  },
  {
    title: 'Community Sequencing API',
    description: 'typescript/graphql api built to manage data collected from running experiments on soil samples on community farms. Deployed to AWS Fargate',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Cimpress Open Access Management',
    description: 'nodejs API built for providing a role based access control system to the Cimpress Open platform. Provided functionality for role, group, and permission administration as well as authorization decisions in <50ms. nodejs / AWS Elastic Beanstalk',
    url: '',
    image: porfolioImage10,
  },
  {
    title: 'Cimpress Open Catalog API',
    description: 'Ruby on Rails api built to allow developers on the Cimpress Open platform to register the definitions of their APIs and discover other APIs available to use.  Ruby on Rails / AWS Elastic Beanstalk',
    url: '',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */


export const experience: TimelineItem[] = [
  {
    date: '2022 - 2023',
    location: 'EQRx',
    title: 'Director, Software Engineering',
    content: (
      <p>
        
      </p>
    ),
  },
  {
    date: '2018 - 2022',
    location: 'Indigo Agriculture',
    title: 'Senior Engineering Manager / Principal Software Engineer',
    content: (
      <p>

      </p>
    ),
  },
  {
    date: '2014 - 2018',
    location: 'Cimpress',
    title: 'Lead Software Engineer / Devops Engineer',
    content: (
      <p>

      </p>
    ),
  },
  {
      date: '2012 - 2014',
      location: 'Vistaprint',
      title: 'Performance Engineer / Senior Software Qualilty Engineer',
      content: (
        <p>
  
        </p>
      ),
  },
];

export const education: TimelineItem[] = [
  {
    date: 'June 2012',
    location: 'University of Massachusetts at Dartmouth',
    title: 'Bachelor of Science, Computer Science/Software Engineering',
    content: <p></p>,
  }
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Anthony Torres - Founder of BitHippie ✌️ Wellness Enthusiast ❤️ Engineering Leader 🤓 Environmentalist 🌱',
      text: `Jason and I have worked together for about 7 years at 3 different companies. 
      Jason is a well-versed engineer, pragmatic in execution, and a great leader.
      
      We've navigated the ebbs and flows of company successes at our various employers. I'm so glad to have him on my side when the going gets tough.
       
      I give JDC my highest regards. 
      
      Jason will be an asset to you and your company no matter where he goes.
      
      Wishing you all the best!
      
      Onward 🚀`,
      image: 'https://media.licdn.com/dms/image/C5603AQFaxez610mZOA/profile-displayphoto-shrink_800_800/0/1611344324097?e=1701302400&v=beta&t=U1_La2bo_2ae_IIKl7jiyEoXYKyCRhdqkIdxSGVcYWw',
    },
    {
      name: 'Brian Petow - Principal Site Reliability Engineer at ASICS Digital',
      text: `Jason is a well versed and adept Technologist. I have had the pleasure of working with him across a handful of different teams and projects. He has a very practical approach to problem solving that serves him and his team well. His technical skill set combined with his quick learning ability to pick up new tools and code, make him a highly coveted member of any fast paced software team. His value also shows through in his resourcefulness and ingenuity. If a mechanism or tool doesn't exist on Github, Jason is quick to publish it himself, or create a Lambda function that does the trick. He is a great overall teammate that I trust and can count on, and hope to work with again in the future!`,
      image: 'https://media.licdn.com/dms/image/D4E03AQEl95K7lKMzEw/profile-displayphoto-shrink_800_800/0/1693925632594?e=1701302400&v=beta&t=5bJeLO3v9ns4ZjOmVJtbHrBUHZMvR51k8b4xg-UOBNo',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you want to chat or learn more about me.',
  items: [
    {
      type: ContactType.Email,
      text: 'jason.daviscooke@gmail.com',
      href: 'mailto:jason.daviscooke@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Whitinsville, MA',
      href: 'https://maps.app.goo.gl/pGovetxu5WGBgfMS6',
    },
    {
      type: ContactType.LinkedIn,
      text: 'My LinkedIn',
      href: 'https://linkedin.com/in/jason-davis-cooke',
    },
    {
      type: ContactType.Github,
      text: 'My GitHub',
      href: 'https://github.com/jdaviscooke',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jdaviscooke'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/jason-davis-cooke'}
];
