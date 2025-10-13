export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};
const projects = [
  {
    title: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    title: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    title: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    title: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    title: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
  {
    title: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
  },
];

import "./ProjectsPage.css";
import styles from "../pageStyles";

export default function Projects() {
  return (
    <section className="projects-page bg-white text-[rgb(51_65_85/var(--tw-text-opacity))] dark:bg-[#0f172a] dark:text-white px-4 sm:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Things I’ve made trying to put my dent in the universe.</h1>
      <p className="projects-page__intro mb-8 text-base sm:text-lg leading-relaxed dark:text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi...
      </p>
      <div className="projects-page__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card border border-slate-200 rounded-lg p-6 bg-white dark:bg-slate-800 dark:border-slate-700"
          >
            <div className="project-card__icon w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center font-bold mb-4 text-slate-800 dark:text-white">
              H
            </div>
            <h3 className="project-card__title text-lg font-semibold mb-2 dark:text-white">{project.title}</h3>
            <p className="project-card__description text-sm sm:text-base text-[rgb(51_65_85/var(--tw-text-opacity))] dark:text-slate-300 mb-2">
              {project.description}
            </p>
            <a
              className="project-card__link text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.url}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
