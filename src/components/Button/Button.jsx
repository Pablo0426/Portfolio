import React from "react";

// import styles
// using Tailwind classes directly instead of CSS module

// import dependencies
import { clsx } from "clsx";
import Link from "next/link";

export const Button = ({ href, color, disabled, handleClick, children, customClasses, ...props }) => {
  const base = "font-semibold uppercase outline-none px-4 py-2 rounded";
  const colorClasses =
    color === "white"
      ? "text-zinc-950 bg-zinc-50 ring-zinc-50 hover:bg-zinc-200 active:text-zinc-700 focus-visible:ring-2 ring-offset-2 ring-offset-zinc-950"
      : "text-zinc-50 bg-zinc-950 ring-zinc-950 hover:bg-zinc-800 active:text-zinc-300 focus-visible:ring-2 ring-offset-2 ring-offset-zinc-50";
  const disabledClasses = disabled ? "bg-zinc-500 text-zinc-600 cursor-default" : "";

  const classes = clsx(base, colorClasses, disabledClasses, customClasses);

  if (href) {
    return (
      <Link href={disabled ? "" : href} onClick={handleClick} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  size: "lg",
  href: undefined,
  disabled: undefined,
  customClasses: undefined,
  handleClick: undefined,
  children: undefined,
};
