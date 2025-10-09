export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

import styles from "./pageStyles";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col gap-8">
        {/* Intro section */}
        <section className={styles.intro}>
          <img src="/profilePic.jpg" alt="Small profile" className={styles.introImage} />
          <div className="flex flex-col">
            <h1 className={styles.introHeading}>Hi, I'm Pablo Jr.</h1>
            <p className={styles.introParagraph}>Explore my projects, tools, and contact details.</p>
            <div className={styles.introSocialRow}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-slate-700 hover:text-slate-900 dark:text-white"
              >
                {/* small Instagram icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-slate-700 hover:text-slate-900 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-slate-700 hover:text-slate-900 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-1.3 4.5 8.5 8.5 0 0 1-7.7 4.3 8.38 8.38 0 0 1-4.5-1.3L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 19 3a8.38 8.38 0 0 1 2 .2z" />
                  <path d="M16.5 14.5c-.6.5-1.8.9-2.6.4-1.2-.7-2.5-1.7-3.2-2.9-.6-1.1-.1-2.1.4-2.6.5-.6 1.1-.4 1.6-.1.4.2.8.5 1.3.8.5.3.9.4 1.4.2.4-.1.8-.3 1.2-.5" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Second separate section: two-column row */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            {/* Left: 3 articles stacked */}
            <div className="flex flex-col gap-6">
              <article className="flex flex-col">
                <time className="text-sm text-slate-500 dark:text-slate-400 mb-2">Oct 1, 2025</time>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Article One Title</h3>
                <p className="text-slate-700 dark:text-white mb-3">
                  A short summary for the first article. This gives a quick preview of the content.
                </p>
                <a className="text-blue-600 hover:underline w-fit" href="#">
                  Read article &gt;
                </a>
              </article>

              <article className="flex flex-col">
                <time className="text-sm text-slate-500 dark:text-slate-400 mb-2">Sep 18, 2025</time>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Article Two Title</h3>
                <p className="text-slate-700 dark:text-white mb-3">
                  A short summary for the second article. Provide an enticing snippet to read more.
                </p>
                <a className="text-blue-600 hover:underline w-fit" href="#">
                  Read article &gt;
                </a>
              </article>

              <article className="flex flex-col">
                <time className="text-sm text-slate-500 dark:text-slate-400 mb-2">Aug 30, 2025</time>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Article Three Title</h3>
                <p className="text-slate-700 dark:text-white mb-3">
                  A short summary for the third article. Keep it concise and linked to the full post.
                </p>
                <a className="text-blue-600 hover:underline w-fit" href="#">
                  Read article &gt;
                </a>
              </article>
            </div>

            {/* Right: 3 widgets stacked, each with a solid border */}
            <aside className="flex flex-col gap-4">
              <div className="border border-slate-200 dark:border-slate-700 rounded p-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Stay up to date</h3>
                <p className="text-slate-700 dark:text-white mb-3">
                  Subscribe to receive updates about new projects and articles.
                </p>
                <div className="flex gap-2">
                  <input
                    aria-label="Email address"
                    placeholder="Email address"
                    className="flex-1 px-3 py-2 border border-slate-300 rounded bg-white dark:bg-slate-800 dark:border-slate-600"
                  />
                  <button className="px-4 py-2 bg-sky-600 text-white rounded">Join</button>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-700 rounded p-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Work</h3>
                <p className="text-slate-700 dark:text-white mb-3">A quick overview of recent roles and projects.</p>
                <div className="space-y-2 text-slate-700 dark:text-white">
                  <div>
                    <div className="font-semibold">Ensign College - SSC Front Desk</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">2024 - Present</div>
                  </div>
                  <div>
                    <div className="font-semibold">Teleperformance</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">2019 - 2020</div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 dark:border-slate-700 rounded p-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Skills</h3>
                <p className="text-slate-700 dark:text-white mb-3">Technologies and tools I use regularly.</p>
                <div className="flex flex-col gap-3">
                  {/* Skill item */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src="/html5.png" alt="HTML5" className="w-6 h-6 object-contain" />
                      <span className="text-sm dark:text-white">HTML</span>
                    </div>
                    <div className="flex flex-col items-end w-1/2">
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded h-2 overflow-hidden">
                        <div className="h-2 bg-emerald-500" style={{ width: "90%" }} />
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">90%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src="/css3.png" alt="CSS3" className="w-6 h-6 object-contain" />
                      <span className="text-sm dark:text-white">CSS</span>
                    </div>
                    <div className="flex flex-col items-end w-1/2">
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded h-2 overflow-hidden">
                        <div className="h-2 bg-emerald-500" style={{ width: "85%" }} />
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">85%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src="/javascript.png" alt="JavaScript" className="w-6 h-6 object-contain" />
                      <span className="text-sm dark:text-white">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-end w-1/2">
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded h-2 overflow-hidden">
                        <div className="h-2 bg-emerald-500" style={{ width: "80%" }} />
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">80%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src="/react.svg" alt="React" className="w-6 h-6 object-contain" />
                      <span className="text-sm dark:text-white">React</span>
                    </div>
                    <div className="flex flex-col items-end w-1/2">
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded h-2 overflow-hidden">
                        <div className="h-2 bg-emerald-500" style={{ width: "75%" }} />
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">75%</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
