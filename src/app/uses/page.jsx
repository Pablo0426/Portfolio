export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};
export const usesSections = [
  {
    category: "Workstation",
    items: [
      {
        title: "Monitor",
        description: "Ultra-wide display for multitasking and immersive design work.",
      },
      {
        title: "Mechanical Keyboard",
        description: "Tactile keys that improve typing speed and comfort.",
      },
      {
        title: "Ergonomic Chair",
        description: "Supports posture during long coding sessions.",
      },
    ],
  },
  {
    category: "Development-tools",
    items: [
      {
        title: "VS Code",
        description: "Lightweight editor with powerful extensions for React and JavaScript.",
      },
      {
        title: "GitHub Copilot",
        description: "AI pair programmer that speeds up development.",
      },
      {
        title: "Postman",
        description: "Essential for testing and documenting APIs.",
      },
    ],
  },
  {
    category: "Design",
    items: [
      {
        title: "Figma",
        description: "Collaborative interface design tool with real-time feedback.",
      },
      {
        title: "Adobe Illustrator",
        description: "Vector graphics editor for icons and branding.",
      },
      {
        title: "Coolors",
        description: "Palette generator for consistent color schemes.",
      },
    ],
  },
  {
    category: "Productivity",
    items: [
      {
        title: "Notion",
        description: "All-in-one workspace for notes, tasks, and databases.",
      },
      {
        title: "Raycast",
        description: "Mac launcher that speeds up workflows with custom scripts.",
      },
      {
        title: "Google Calendar",
        description: "Keeps my schedule organized and synced across devices.",
      },
    ],
  },
];
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./UsesPage.css";
export default function Uses() {
  return (
    <div className="uses-page bg-white text-[rgb(51_65_85/var(--tw-text-opacity))] dark:bg-[#0f172a] dark:text-white px-4 sm:px-8 py-8 sm:py-12">
      <div className="uses-page__intro mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Software I use, gadgets I love, and other things I recommend.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed dark:text-slate-300">
          Here’s a list of tools, hardware, and software I rely on daily...
        </p>
      </div>

      <div className="uses-page__sections flex flex-col gap-8">
        {usesSections.map((section, index) => (
          <section key={index} className="uses-section flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
            <div className="uses-section__left min-w-[160px]">
              <h3 className="text-lg sm:text-xl font-semibold dark:text-white">{section.category}</h3>
            </div>
            <div className="uses-section__right flex flex-col gap-6">
              {section.items.map((item, i) => (
                <div key={i} className="uses-section__item">
                  <h3 className="text-base sm:text-lg font-bold dark:text-white">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[rgb(51_65_85/var(--tw-text-opacity))] dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
