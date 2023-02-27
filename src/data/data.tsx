import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
  title: 'Juan S. Morant P. | Tech Lead and Full Stack Developer',
  description: "Portfolio of Juan S. Morant P. Tech Lead and Full Stack Developer",
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

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Juan Morant.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Medellin (Colombia) based <strong className="text-stone-100">Tech Lead and Full Stack Developer</strong>, currently working
        at <strong className="text-stone-100">Netux</strong>, leading the <strong className="text-stone-100">digital transformation of the health care</strong> in LATAM.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training <strong className="text-stone-100">Triathlon</strong>,
        having a fun time with my <strong className="text-stone-100">wife and kids</strong>, or reading{' '}
        <strong className="text-stone-100">interesting books</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/uc?export=download&id=18rig1xECLGlVIiwC090yBr993Vo1lIIE',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
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
  description: `I have broad experience managing tech teams for Software and Hardware development and design of embedded systems. 
  The daily activities of my current leading position include defining structures and strategies for the tech team to deliver faster and higher quality
  products, I am often involved in technical discussions, roadmap definition, project managing, culture and coaching activities, among others.
  My recent experience include customer engagement for ADAS/AD and the design of complex embedded systems.
  KEY SKILLS: Effective learner, responding flexibly and positively to changing situations. Disciplined, analytical, responsible and empathic.
  Teamwork spirit and proactive leader. Solid written and verbal communicator.`,
  aboutItems: [
    {label: 'Location', text: 'Medellin, CO', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Colombian', Icon: FlagIcon},
    {label: 'Interests', text: 'Health, Sports, Languages, Reading, Triathlon, Parenting', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Applied Sciences in Kempten (Germany) and Pontifical Bolivarian University (Colombia)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'CTO at Netux', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript / Javascript',
        level: 7,
      },
      /*{
        name: 'GraphQL',
        level: 6,
      },
      */
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Java',
        level: 7,
      },
    ],
  },
  {
    name: 'IoT and Embedded development',
    skills: [
      {
        name: 'C / C++ / ASM',
        level: 10,
      },
      {
        name: 'Altium Designer / Hardware design',
        level: 9,
      },
      {
        name: 'IPC / RTOS / Linux',
        level: 8,
      },
    ],
  },
  /*{
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
  */
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://github.com/juansmp',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2017',
    location: 'Hochschule Kempten',
    title: 'Master of Electrical Engineering',
    content: <p>.</p>, // <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'February 2018',
    location: 'Universidad Pontificia Bolivariana',
    title: 'Master of Engineering',
    content: <p>.</p>, //<p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'October 2018',
    location: 'Universidad Pontificia Bolivariana',
    title: 'Specialization in Management of Technological Innovation',
    content: <p>.</p>, //<p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'April 2012',
    location: 'Universidad Pontificia Bolivariana',
    title: 'Electronics Engineering',
    content: <p>.</p>, //<p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2020 - Present',
    location: 'Netux, Medellin - Colombia.',
    title: 'CTO',
    content: (
      <p>
        Leading tech and engineering teams for the development of software and hardware solutions for Health Tech and IoT sectors.
      </p>
    ),
  },
  {
    date: 'July 2018 - November 2020',
    location: 'Renesas Electronics Europe, Düsseldorf - Germany.',
    title: 'Engineer, Automotive Solution Business Division',
    content: (
      <p>
        Customer engagement for ADAS/AD.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Eugen Palnau, Software Architect at Renesas Electronics',
      text: 'Juan and I worked on profiling tools for heterogeneous multicore embedded systems. Applying his deep technical understanding and focusing on customer requirements, Juan substancially contributed to the definition of the product. His creativity and curiosity were important factors for innovation. Juan is a great team player and a very nice person to work with!',
      image: 'https://media.licdn.com/dms/image/C4D03AQGpfCMZDa-6xA/profile-displayphoto-shrink_100_100/0/1534573887931?e=1682553600&v=beta&t=IeC3n-byIXehAljK3lj4IYgrGNCkdgTg8Yx-PFAlG_s',
    },
    {
      name: 'Daniel Stephens, Senior Staff Engineer - Automotive Technical Customer Engagement Division',
      text: 'I worked closely with Juan for more than 2 years at Renesas. Juan is an extremely talented engineer, dedicated to his responsibilities and a very nice person to work with. When tasked with a new subject, he demonstrated his technical abilities by developing his knowledge to quickly become the subject matter expert. In his role, he advised both customers and internal developers on resolving issues they experienced. His calm and patient approach to difficult people and situations is a remarkable gift very few individuals have. I am very fortunate to have had this opportunity to have worked with Juan and cannot thank him enough for all his contributions.',
      image: 'https://media.licdn.com/dms/image/C4E03AQFrT102Y5QOpA/profile-displayphoto-shrink_100_100/0/1660019682917?e=1682553600&v=beta&t=bVPMclgSY0Xp8NX4cKo4IfhhAwt5m4vXUNx7B87cG1I',
    },
    {
      name: 'Benjamin Joa, Electronics design | Embedded systems | Internet of Things',
      text: 'Morant es el líder del departamento de Hardware, en donde actualmente estoy trabajando. En todos éstos años trabajando con él, ha demostrado ser un gran profesional, con habilidades en gestión de equipos y proyectos, además de un amplio conocimiento en la electrónica y la programación. Morant es una gran persona, tanto en lo profesional como en lo personal, demostrando responsabilidad y organización, y qué siempre ha sabido cómo transmitir sus conocimientos y mantener la motivación en el equipo de trabajo. Recomendaría a Morant a cualquier trabajo que requiera a una persona capaz de gestionar proyectos, manejar equipos de trabajo con amplio conocimiento en el diseño y desarrollo de sistemas electrónicos.',
      image: 'https://media.licdn.com/dms/image/C4E03AQFQFcB02AB01g/profile-displayphoto-shrink_100_100/0/1560565645488?e=1682553600&v=beta&t=Cj7ky-tQY8RDS924TYy3nNDs8S1VU718BQrJGhWQVBQ',
    },
    {
      name: 'Jaime Aranguren, Staff Engineer - Global ADAS Solution Group at Renesas Electronics Corporation',
      text: 'Juan did his internship at Renesas Electronics Europe GmbH under my direct supervision. He demonstrated to be a very smart and friendly guy, able to grasp very quickly the details of deep and wide technical matters, and not only to be able to understand them, but also to leverage on them to propose newer approaches and ways of using technology for improving on existing solutions, Being a calmed person, he does not tackle challenges in "any" manner, instead takes the time to analyze, study, and propose, all of this in a very structured way of thinking, nevertheless delivering results ahead of time and with very high level of quality, always exceeding expectations.',
      image: 'https://media.licdn.com/dms/image/C5603AQHmzragzOqQbA/profile-displayphoto-shrink_100_100/0/1516283731732?e=1682553600&v=beta&t=G2IxZoF6-_VMk-NpZo39blj5P69yRqHEBjIjoFp4kAs',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'If you want to know me better, or just want to say hi, feel free to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'juan@morant.co',
      href: 'mailto:juan@morant.co',
    },
    {
      type: ContactType.Location,
      text: 'Medellin, Colombia',
      href: 'https://goo.gl/maps/E2h2PSLY8HbYwoGi7',
    },
    {
      type: ContactType.Instagram,
      text: '@juansmp',
      href: 'https://www.instagram.com/juansmp/',
    },
    {
      type: ContactType.Github,
      text: 'juansmp',
      href: 'https://github.com/juansmp',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/juansmp'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/13074837/juan-sebastian-morant'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/juan-morant/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/juansmp/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/juansmorant'},
];
