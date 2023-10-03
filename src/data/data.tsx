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
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
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
        of this page you can read a more in depth descrition of what I've accomplished over my career. This tells a more in depth, though still incomplete
        story of my career. Please feel free to reach out to me and I'm happy to answer any questions or go more in depth on anything you find here.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Outside of work, I enjoy physical exersize and challenge, with my latest interest being triathlons.
        I am also a <strong className="text-stone-100">very casual</strong> golfer, and I also play in a weekly adult
        floor hockey game.
        Finally, I am the co-host of the <strong><u><a href="https://www.youtube.com/channel/UCOouOjxX0Kq6aHno9_bZZeg"> Brainwave Exchange Podcast </a></u> </strong>
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
  description: (
    <>
      <p>I've been in the software profession full time since 2012 and in that time I have held a wide range of positions
        giving me a diverse set of experiences to pull from when solving problems. The roles I have held include Performance Engineer,
        DevOps Engineer, Lead Software Engineer, Principal Software Engineer, Senior Engineering Manager, and Director of Software Engineering.
        I have had as many as 12 direct reports spread across 4 different teams, and had team members in thet US, Brazil, Europe, and India so I am
        comfortable with distributed/remote teams. I build my teams on a foundation of trust and strongly believe that people bring their best to work
        when they feel safe, respected, and heard. To this end, I provide my teams with the latitude to do their jobs as they see fit within a defined set
        of guardrails allowing them to grow into and beyond their roles. I believe in removing friction on well defined paths and patterns and introducing
        friction onto non-standard diversions from those patterns. This lets engineers move fast and express themselves without risking the quality, integrity,
        and maintanablilty of the systems being worked on, unless they have a strong and compelling reason to do so and can articulate that position in a defined
        review process.</p>
      <p>I have spent the latter half of my career in positions where dealing with uncertainty and being able to pivot quickly were a requirement. I have learned
        to handle competing priorities from multiple stakeholders and to set realistic expectations based on available engineering capacity. I have worked
        with product managers, senior leadership, and other business stakeholders to craft engineering roadmaps that provide reasonable estimates
        for the completion of features desired by the business. </p>
        <p>
          I have a pragmatic and thoughtful approach to engineering, while still maintaining a bias for action. I believe in "move fast and break things" to the degree that 
          breaking things is within appropriate risk tolerance. I am guided by the mantra "all code is tech debt", meaning that I don't like writing code for the sake of writing code.
          It is of course necessary, but framing things from this angle helps find the simplest solutions and steer away from overengineering. 
        </p>
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
        level: 9,
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
    description: 'Python api built as interface for open policy agent providing attribute based access controls for Indigo Marketplace with strict p95 5ms latency requirements.',
    technologies: ['python', 'fastapi', 'open policy agent', 'aws', 'ecs', 'terraform'],
    image: porfolioImage8,
  },
  {
    title: 'identity-api',
    description: 'python api built to manage user identity information for the Indigo Marketplace',
    technologies: ['python', 'fastapi', 'postgres', 'aws', 'ecs', 'terraform'],
    image: porfolioImage8,
  },
  {
    title: 'accounts-api',
    description: 'python api built to manage business entities such as farms and grain elevators',
    technologies: ['python', 'fastapi', 'postgres', 'aws', 'ecs', 'terraform'],
    image: porfolioImage8,
  },
  {
    title: 'marketplace-ingestion-api',
    description: 'python api built to ingest third party grain bid information for usage in the Indigo Marketplace.',
    technologies: ['python', 'flask', 'postgres', 'aws', 'ecs', 'terraform'],
    image: porfolioImage8,
  },
  {
    title: 'clio-api',
    description: 'python api built to accept upload of key documents such as signed contracts and financial documents. also tracked the status of workflows involving those documents.',
    technologies: ['python', 'flask', 'celery', 'aws', 'ecs', 'terraform'],
    image: porfolioImage8,
  },
  {
    title: 'transport-pricing-api',
    description: 'python api built to allow transport carriers to define arbitrary zones and pricing to transport grain within those zones. upon requesting pricing information for the transportation of grain between two points, the api used a custom ball tree algorithm (patent pending) to find the best price for transportation. ',
    technologies: ['python', 'flask', 'postgres', 'aws', 'fargate'],
    image: porfolioImage8,
  },
  {
    title: 'Sym Pipeline Insights and Nominations',
    description: 'React SPA with a python API backend used to track the progress of candidate microbes through the research and commercialization pipelines. ',
    technologies: ['python', 'flask', 'react', 'aws', 'fargate'],
    image: porfolioImage8,
  },
  {
    title: 'Genomic Pipeline',
    description: 'modular, scalable pipeline built using AWS Step Functions and AWS Batch to run dockerized genomic analyses of collected microbial samples',
    technologies: ['python', 'docker', 'aws', 'aws step functions', 'aws batch'],
    image: porfolioImage8,
  },
  {
    title: 'Community Sequencing API',
    description: 'typescript/graphql api built to manage data collected from running experiments on soil samples on community farms. Deployed to AWS Fargate',
    technologies: ['typescript', 'graphql', 'postgres', 'react', 'aws', 'fargate'],
    image: porfolioImage8,
  },
  {
    title: 'Cimpress Open Access Management',
    description: 'nodejs API built for providing a role based access control system to the Cimpress Open platform. Provided functionality for role, group, and permission administration as well as authorization decisions in <50ms. nodejs / AWS Elastic Beanstalk',
    technologies: ['nodejs', 'express', 'postgres', 'aws', 'elastic beanstalk', 'terraform'],
    image: porfolioImage8,
  },
  {
    title: 'Cimpress Open Catalog API',
    description: 'Ruby on Rails api built to allow developers on the Cimpress Open platform to register the definitions of their APIs and discover other APIs available to use.  Ruby on Rails / AWS Elastic Beanstalk',
    technologies: ['ruby on rails', 'postgres', 'aws', 'elastic beanstalk', 'terraform'],
    image: porfolioImage8,
  },
  {
    title: 'Uhaul',
    description: 'Ruby gem and Ruby on Rails service built to allow developers to migrate job definitions between Jenkins instances',
    technologies: ['ruby on rails', 'ruby', 'websockets', 'gems'],
    image: porfolioImage8,
  },
  {
    title: 'Zanzibar',
    description: 'Ruby gem created to allow for the programatic retrieval of secrets from a Thycotic Secret Server installation',
    technologies: ['ruby', 'rake', 'gems'],
    image: porfolioImage8,
  },
  {
    title: 'MCP Elk',
    description: 'Puppet modules created for the creation and scaling of ELK clusters in geo-distributed manufacturing plants with the ability to auto join a central cluster through Hashicorp Consul',
    technologies: ['puppet', 'consul', 'ELK'],
    image: porfolioImage8,
  },
  {
    title: 'Zamboni',
    description: 'AWS Serverless function written in node to manage turning AWS resources in non-production environments on/off during non business hours to save on costs',
    technologies: ['aws', 'serverless', 'node'],
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */


export const experience: TimelineItem[] = [
  {
    date: '2012 - 2014',
    location: 'Vistaprint',
    title: 'Performance Engineer / Senior Software Qualilty Engineer',
    content: (
      <p>
        The start of my full time career came at Vistaprint in 2012. I joined a team with the primary responsibility of running the performance environment for the
        vistaprint.com release cycle. Every three weeks, as was the release timeline, I would perform load tests using HPs LoadRunner putting the most important workflows
        though the paces. In addition, I would manually capture code profiles of critical checkout workflows to ensure there were no bottlenecks introduced.
        In the weeks between performance testing, I was writing software to help me perform these performance duties more efficiently. The first of these tools was
        called VistaPerf. It was a C# application using WPF that was querying syslog data captured on the webservers for page loading times, and comparing the 7 day
        rolling average. If that average rose above a certain threshold, it would pop an alert for someone to look closer at that page. I caught a number of non-obvious
        peformance issues this way and allowed us to quickly remediate. Another application I wrote was also in WPF and was designed to ingest the code profiles I took
        and perform analysis on them as well as compare them to the historical data. It would show a heat map of the method calls in the code, and make any large spike in
        calls pop so I could flag them for further investigation.
      </p>
    ),
  },
  {
    date: '2014 - 2018',
    location: 'Cimpress',
    title: 'Lead Software Engineer / Devops Engineer',
    content: (
      <>
        <h2 className="text-left font-bold text-black opacity-100">The ICE Years - DevOps</h2>
        <p>
          Around 2014, Vistaprint reorganized into a parent company, Cimpress, and a portfolio of mass customization companies of which Vistaprint was one of them.
          I moved onto a team called Infrastructure Core Engineering, or ICE, whose primary responsibility was developing core infrastructure. At the time we were working on a migration away from the monolithic
          vistaprint.com application and into a more microservices architecture. To better facilitate the microservices world, this team was tasked with developing the
          services like CI/CD, monitoring and alerting, and logging.
        </p>
        <strong className="text-black-100">Key Contributions (see <u><a href="#portfolio">Portfolio</a></u> for more details)</strong>
        <p>
          <ul>
            <li>• <strong>Zanzibar</strong></li>
            <li>• <strong>Uhaul</strong></li>
            <li>• <strong>MCP ELK</strong></li>
            <li>• <strong>Zamboni</strong></li>
          </ul>
        </p>
        <p>
          <h2 className="text-left font-bold text-black opacity-100">API Management - Lead Software Engineer</h2>
          In 2016, I joined a new team called API Management. At this time, Cimpress was moving on its strategy of the Mass Customization Platform with the idea
          that we could write and provide APIs to customers both internal and external for producing things at scale. Due to the widely distributed nature of the teams
          developing these APIs (there was a mix of teams at various Cimpress business units in the US and Europe) we needed a centralized location for teams to publish
          and consume API definitions. Additionally, we were tasked with creating the Authentication and Authorization stragegy for the platform to ensure a smooth user
          experience across the whole suite of applications and APIs on the platform. As a part of this role,
          I was the account manager, SME, and onboarding consultant for Auth0 which we used for Authentication across the platform. From giving talks at company events
          demonstrating the capabilities of Auth0, to helping teams onboard both UIs using the Auth0 Lock widget and APIs using Auth0 clients and client credentials grants,
          I ensured the smooth integration of all new and existing services to our authentication paradigm leading to a consistent and secure user experience across the platform.
          Additionally, I maintained order in the Auth0 Rules pipeline which allowed custom javascript to be executed on certain Auth0 flows. This had the potential to become
          very disorganized as many teams had different needs for augmentations to the JWT or other custom authentication logic. I worked to create guardrails and gates to the
          introduction of new rules or updates to existing rules to prevent duplication, unnecessary rules which could cause perofmance problems, or downtime as broken rules would
          prevent any login from working. These included restricting rules to being deployed from CI/CD so nothing would get through without code review, and writing documentation on
          best practices for rule creation.
          In addition, I managed a team of Platform Success
          Engineers in the US and India who were tasked with assisting with resolving issues teams were having with APIs or authentication/authorization.
          <h4 className="text-left font-bold text-black opacity-100">Key Contributions</h4>
        </p>
        <p>
          <ul>
            <li>• <strong>Cimpress Open Access Management</strong></li>
            <li>• <strong>Cimpress Open Catalog API</strong></li>
            <li>• <strong>Auth0 SME</strong></li>
          </ul>
        </p>
      </>
    ),
  },
  {
    date: '2018 - 2022',
    location: 'Indigo Agriculture',
    title: 'Senior Engineering Manager / Principal Software Engineer',
    content: (
      <>
        <p>
          I started at Indigo as a Principal Software Engineer on a team dedicated to building scalable tooling for the Data Science team running analyses on microbial
          samples collected on farms. On a team of 3 engineers, we built the Community Sequencing API, a typescript/graphql API with a React frontend that allowed for
          the upload of spreadsheets containing information about various studies done on fields to be stored in a postgres database for later analysis. We then developed a framework that allowed data scientists to configure and
          run analysis scripts in a scalable AWS environment. This started out as a docker skeleton project with instructions on where to put the analysis script
          so that it would run on container start, as well as conventions for installing job specific dependencies on container build. This allowed the data scientists
          to focus on writing the analysis code rather than needing to worry about how to build and deploy it, and also got them away from SSHing into EC2 containers to run
          these scripts manually.
        </p>
        <p>
          A few months after starting, the VP of Engineering, who managed all 20+ engineers at the time, left the company. The CTO then decided that we needed to install an
          additional layer of management bewteen himself and the engineers. I stepped up to fill one of the gaps and began my management experience in September of 2018 with
          2 direct reports at the time. Going into the last quarter of 2018, I was tasked with putting together a plan for hiring on my team going into 2019. Based on the roadmap
          I had created with our product manager and stakeholders and the available budget, I was able to open 3 positions to hire. I filled two of the three positions by the end of
          2018. Early in 2019, one of the newly hired engineers came to me with an idea; AWS had released Step Functions which allowed for composable, scalable workflows. He believed
          this would be exactly what we needed to improve our existing pipelines for genomic analyses. I asked him to spend some time in the upcoming sprint to put together
          a proposal and if time allowed, a PoC for what this would look like. After coming back with a compelling argument, I greenlit the project and the Genomic Pipeline was
          born. This project ended up reducing the time it took for the data scientists to run the suite of analyses on their entire sequence catalog from 30 days to 7 days allowing for
          more rapid decision making for the microbial division of the company.
        </p>
        <p>
          Also in 2019, Engineering was preparing for a rapid growth phase. The CTO wanted to take us from 30ish engineers to 100. I was a part of the management team that worked on
          creating the structures and processes that would allow for that type of growth including the creation of a well defined carreer ladder, a streamlined interviewing process,
          and onboarding plans. I was invlolved in many discussions on many different topics including office expansions, compensation plans, performance calibrations across the engineering team,
          and organization goals and metric tracking.
        </p>
        <p>
          By the end of 2019, Engineering had grown rapidly and the Grain Marketplace vertical within engineering was attempting to reorganize in order to become more agile. This meant
          they were separating the front end development from the backend development, and a new Marketplace Platform team was created for the backend services needed to power the front end.
          These teams were mainly python developers and there were not enough of them to build all of the services that were needed at the time. I was asked if I could offer any assistance from my
          team who were still focused on the microbials work, and I ended up splitting that team into two teams, one of which would work on Marketplace Platform services, with my own time also
          being used to that end. Across the next year, my total number of reports grew to 12 across 4 different teams, and my teams gained a reputation for delivering. If there was a new service that
          needed creating, or a project that was stuck and needed help, I was assigned to it with one of my teams. We delivered a number of APIs across that time including an API for ingesting important
          documents needed for transacting on the Marketplace, an API for ingesting third party grain bid data for presentation in the Marketplace, and an API that allowed transportation carriers to define
          rates to transport grain within self defined geographical zones and then calculate the best rates for transporting from one zone to another. During this time I was responsible for the scrum processes
          for all of the teams as well as participating in a "scrum of scrums" to coordinate work across the engineering organization. I also performed weekly 1:1s with all 12 reports and handled their performance
          and career management.
        </p>
        <p>
          Halfway through 2021, there was a project started to rebuild the Grain Marketplace from the ground up, and I was chosen to contribute to that team as a hands on engineer. I was tasked with
          developing the APIs needed to track user identity and define key business objects such as farms, grain elevators, and other entities needed to transact on the marketplace. We had a 60 day deadline
          to produce a working MVP to show to a potential partner and close a deal with them. As the only engineer working on these APIs, I had to make quick decisions about what the most
          important functionaliy was and were to cut scope in order to hit that deadline while still providing what was needed for the MVP. In the end, we successfully hit the deadline, presented the MVP, and
          closed the deal with the partner.
        </p>
        <p>
          Coming out of the marketplace rebuild, I was then asked to lead and build the authorization system for the new marketplace. There was a strong desire to move away from the role based system that the
          original version of the marketplace used as it had caused many issues over the years. We decided to pivot to an attribute based authorization scheme and Open Policy Agent was selected as the technology to
          power that system. I had roughly one quarter to, on my own, build this authorization system from the ground up. The system had to allow other teams to define the policies governing access to their systems,
          provide fast authorization decisions when asked (the target I was given was 5ms), and have access to relevant domain data needed to make those authorization decisions. I delivered this system a couple of weeks
          into January 2022, just in time for user testing with our key partner. I spent the rest of my time at Indigo as the trusted voice and SME for the team responsible for this identity and access platform.
        </p>
        <strong className="text-black-100">Key Contributions (see <u><a href="#portfolio">Portfolio</a></u> for more details)</strong>
        <ul>
          <li>• <strong>Community Sequencing API</strong></li>
          <li>• <strong>Genomic Pipeline</strong></li>
          <li>• <strong>Clio API</strong></li>
          <li>• <strong>Transport Pricing Service</strong></li>
          <li>• <strong>Marketplace Ingestion API</strong></li>
          <li>• <strong>Identity API</strong></li>
          <li>• <strong>Accounts API</strong></li>
          <li>• <strong>Access Management API</strong></li>
        </ul>
      </>
    ),
  },
  {
    date: '2022 - 2023',
    location: 'EQRx',
    title: 'Director, Software Engineering',
    content: (
      <>
        <p>
          I joined EQRx in 2022 with the goal of building out the Software Engineering organization from the ground up. At the same time, there was work that needed
          to be done immediately in support of the data science organization. I got hands on helping redefine a data model for an internal financial forecasting application
          that was in need of performance improvements. At the same time, there was a need for the development of an API for providing a critical application governing the
          distribution of drugs to clinical trial sites with the data needed to power the components of the app. I had some budget for hiring, but not a sufficient timeline
          to source and hire full time engineers. To solve this problem I turned to contracting firms, and was able to hire two nearshore contractors within a month. They came
          onboard quickly and immediately started ramping up on the project and were productively contributing shortly after.
        </p>
        <p>
          Around the end of 2022, I began working with senior leadership on budgets and plans for growing the engineering organization according to the needs of our internal
          customers. This plan included a mix of more nearshore contractors and full time engineers. In addition, I worked with the Director of Data Engineering to design a
          unified data access layer which would provide the data scientists with a single entry point into all of the sources of data available to them including postgres databases
          and Google Big Query. This layer would provide all the necessary authentication and abstract away the differences in query languages between the different sources.
        </p>
        <p>
          In an effort to consolidate varying documentation sources and make it easier for new engineers to onboard as well as simplify the data discovery process, I started a
          project to introdude <a href="https://backstage.spotify.com/">Spotify's Backstage</a> as a portal into EQRx's data platform. By early 2023, I had successfully deployed
          Backstage and demonstrated its value as a documentation hub. Shortly afterwards I began a campaign to migrate documentation from other places such as Sharepoint and Guru
          into Backstage with tagging to make it all easily discoverable from the documentation homepage.
        </p>
        <p>
          Unfortunately, in May of 2023 EQRx announced a 60% companywide reduction in force which included the eliimination of my role as software became deprioritized and I never
          got to fully execute on my plans for organization expansion and development of the Data Access Layer.
        </p>
      </>
    ),
  }
 
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
