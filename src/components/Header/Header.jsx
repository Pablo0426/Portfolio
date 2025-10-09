"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("prefers-dark");
      const prefers = saved
        ? saved === "true"
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefers);
      document.documentElement.classList.toggle("dark", prefers);
    } catch (e) {
      // ignore
    }
  }, []);

  const toggleDark = () => {
    setDark((d) => {
      const next = !d;
      try {
        localStorage.setItem("prefers-dark", next.toString());
      } catch (e) {}
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <header className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">My Portfolio</div>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-1 rounded text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.64 13.26A9 9 0 1 1 10.74 2.36 7 7 0 0 0 21.64 13.26z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-slate-700 dark:text-slate-200">
            <li>
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-slate-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-slate-900">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/uses" className="hover:text-slate-900">
                Uses
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded bg-transparent text-slate-700 dark:text-slate-200"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`md:hidden ${
          open ? "block" : "hidden"
        } border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800`}
      >
        <nav>
          <ul className="flex flex-col gap-2 px-4 py-3 text-slate-700 dark:text-slate-200">
            <li>
              <Link href="/" className="block py-2" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2" onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/uses" className="block py-2" onClick={() => setOpen(false)}>
                Uses
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
