import { COLOR } from "./appearance";

export const BADGE_DEFAULTS = {
  IS_LARGE: false,
  COLOR: COLOR.Default,
  LOGO_COLOR: COLOR.LogoDefault,
};

type TBadgeDetails = {
  label: string;
  message: string;
  target: string;
  logo: string;
  isLarge?: boolean;
};

export const BADGE_DETAILS: TBadgeDetails[] = [
  {
    label: "view",
    message: "Documentation",
    target: "/docs/",
    logo: "",
    isLarge: true,
  },

  {
    label: "OS",
    message: "Linux",
    target: "https://www.linux.org/",
    logo: "linux",
  },
  {
    label: "OS",
    message: "macOS",
    target: "https://www.apple.com/macos/",
    logo: "apple",
  },
  {
    label: "OS",
    message: "Windows",
    target: "https://www.microsoft.com/",
    logo: "windows",
  },

  // Netlify CI badge is best created on Netlify itself and not here. But a plain Made with Netlify might be nice.
  {
    label: "Hosted with",
    message: "GitHub Pages",
    target: "https://pages.github.com/",
    logo: "github",
  },
  // Use an actual GitHub Actions workflow badge if you prefer. But this could be useful it is Made for GitHub Actions.
  {
    label: "CI",
    message: "GitHub Actions",
    target: "https://github.com/features/actions",
    logo: "github-actions",
  },

  {
    label: "Made with",
    message: "Docker",
    target: "https://www.docker.com/",
    logo: "docker",
  },

  {
    label: "Bash",
    message: ">=3",
    target: "https://www.gnu.org/software/bash/",
    logo: "gnu-bash",
  },

  {
    label: "Python",
    message: ">=3.6",
    target: "https://python.org",
    logo: "python",
  },

  {
    label: "Node.js",
    message: ">=12",
    target: "https://nodejs.org",
    logo: "node.js",
  },
  {
    label: "Yarn",
    message: "1",
    target: "https://classic.yarnpkg.com",
    logo: "yarn",
  },
  {
    label: "Deno",
    message: "1",
    target: "https://deno.land",
    logo: "deno",
  },
  {
    label: "TypeScript",
    message: "4",
    target: "https://typescriptlang.org",
    logo: "typescript",
  },
  {
    label: "React",
    message: "17",
    target: "https://www.npmjs.com/package/react",
    logo: "react",
  },
  {
    label: "Vue",
    message: "3",
    target: "https://www.npmjs.com/package/vue",
    logo: "vue.js",
  },

  {
    label: "Go",
    message: "1",
    target: "https://golang.org",
    logo: "go",
  },

  {
    label: "Jekyll",
    message: "3.9",
    target: "https://jekyllrb.com",
    logo: "jekyll",
  },
  {
    label: "Ruby",
    message: ">=2.6",
    target: "https://ruby-lang.org",
    logo: "ruby",
  },

  {
    label: "SQLite",
    message: "3",
    target: "https://www.sqlite.org/index.html",
    logo: "sqlite",
  },
  {
    label: "PostgreSQL",
    message: "13",
    target: "https://www.postgresql.org/",
    logo: "postgresql",
  },
];
