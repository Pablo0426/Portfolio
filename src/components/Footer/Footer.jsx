import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between text-slate-700 dark:text-slate-200">
        <div className="text-sm">{year} © All rights reserved</div>

        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="text-sm hover:text-slate-900 dark:hover:text-slate-100">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm hover:text-slate-900 dark:hover:text-slate-100">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-sm hover:text-slate-900 dark:hover:text-slate-100">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/uses" className="text-sm hover:text-slate-900 dark:hover:text-slate-100">
                Uses
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
