import { Link } from 'react-router-dom';
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: './videos/Gym-Management-System.mp4',
    title: 'Gym Management System',
    tags: ['Window Forms', 'SQL', 'Development'],
    projectLink: 'https://github.com/muqarrab1217/Gym-Management-Database-System'
  },
  {
    imgSrc: './videos/travel-website.mp4',
    title: 'Travel Website',
    tags: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://personal-portfolio-dusky-iota-86.vercel.app'
  },
  {
    imgSrc: './images/posSystem.png',
    title: 'Restaurant POS system',
    tags: ['React', 'SpringBoot', 'API', 'MySQL'],
    projectLink: 'https://pos-system-deployable.vercel.app',  // Navigate to POS login page
  },
  {
    imgSrc: './images/pureheal-pharma.png',
    title: 'Pharmacy Point of Sale',
    tags: ['Development', 'React', 'Node JS', 'Mongo Atlas', 'API'],
    projectLink: 'https://pure-heal-pharma-f3gj.vercel.app'
  },
  {
    imgSrc: './images/eventsApp.png',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://cs-4067-assignment-02-i221351-muqar.vercel.app'
  },
  {
    imgSrc: './images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: './images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];
const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-2 below-1030:grid-cols-1">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up aspect-w-2 aspect-h-1 overflow-hidden"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
