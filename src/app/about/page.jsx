export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

import styles from "../pageStyles";

export default function About() {
  return (
    <div>
      <main className={`${styles.container} md:grid md:grid-cols-[1fr_320px] md:items-start`}>
        <section className="order-1 md:order-1">
          <h1 className={styles.heading}>
            Hi, I&apos;m Pablo Jr. I&apos;m studeying at Ensign College where I&apos;m learning how to code
          </h1>
          <p className={`${styles.lead} ${styles.paragraph}`}>
            I&apos;m a developer who enjoys creating clean, accessible user experiences. This portfolio showcases
            projects, the tools I use, and ways to get in touch.
          </p>
          <p className={`${styles.lead} ${styles.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className={`${styles.lead} ${styles.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className={`${styles.lead} ${styles.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className={`${styles.lead} ${styles.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </section>

        <aside className={`${styles.aside} order-2 md:order-2`}>
          <img src="/profilePic.jpg" alt="Profile photo of the site owner" className={styles.profileImage} />
          <div className={styles.socialLinks}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on Instagram"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100 py-1"
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
                className="inline"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
              <span>Follow me on Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow me on Facebook"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100 py-1"
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
              <span>Follow me on Facebook</span>
            </a>

            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100 py-1"
            >
              {/* WhatsApp SVG (phone in speech bubble) */}
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
              <span>Chat on WhatsApp</span>
            </a>

            <div className={styles.separator} />
            <a
              href="mailto:pablojrperezsantos@gmail.com"
              aria-label="Email pablojrperezsantos@gmail.com"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-white dark:hover:text-slate-100 py-1"
            >
              {/* Gmail-style SVG (envelope with colored flap) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M3 6l9 6 9-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M3 18l7-6" stroke="#ea4335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 18l-7-6" stroke="#4285f4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>pablojrperezsantos@gmail.com</span>
            </a>
          </div>
        </aside>
      </main>
    </div>
  );
}
