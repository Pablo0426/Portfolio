// Simple module that exports Tailwind class strings for the home page.
export const container = "max-w-5xl mx-auto px-4 py-8 grid gap-8";
// Keep the md grid column definition in the JSX since it uses an arbitrary value
// removed border from aside (no solid border as requested)
export const aside = "rounded-md p-4 text-center self-start";
export const profileImage = "w-full rounded";
// stack social links vertically
export const socialLinks = "flex flex-col items-start gap-3 mt-3";
export const separator = "w-full border-t border-slate-200 dark:border-slate-700 my-2";
export const heading = "text-3xl font-semibold mb-4";
// Ensure text becomes white-ish in dark mode for readability
export const lead = "mb-4 text-slate-700 dark:text-white";
export const bodyText = "text-slate-700 dark:text-white";
export const paragraph = "mb-6";

// Home intro styles
export const intro = "flex flex-col items-start gap-4 px-4 py-6";
// make image fully rounded and add 1rem bottom margin (mb-4)
export const introImage = "w-24 h-24 rounded-full object-cover mb-4";
// h1: font-weight 600, font-size 1.875rem (text-3xl), line-height 2.25rem (leading-9)
export const introHeading = "text-3xl leading-9 font-semibold mb-4";
// paragraph with bottom margin
export const introParagraph = "text-slate-700 dark:text-white mb-4";
// social icons row with bottom margin
export const introSocialRow = "flex items-center gap-3 mt-2 mb-4";

export default {
  container,
  aside,
  profileImage,
  socialLinks,
  heading,
  lead,
  bodyText,
  paragraph,
  separator,
  intro,
  introImage,
  introHeading,
  introParagraph,
  introSocialRow,
};
