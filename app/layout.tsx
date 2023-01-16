"use client";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  interface LinksType {
    label: string;
    route: string;
  }

  const internalLinks: LinksType[] = [
    {
      label: "HOME",
      route: "/",
    },
    {
      label: "ABOUT ME",
      route: "/about",
    },
  ];

  const externalLInks: LinksType[] = [
    {
      label: "LINKEDIN",
      route: "https://linkedin.com/in/denis-ferreyra",
    },
    {
      label: "GITHUB",
      route: "https://github.com/DenisFer-13",
    },
  ];

  const scrollTo = (top: number) => {
    window.scrollTo({ top: top, behavior: "smooth" });
  };

  return (
    <html>
      <head />
      <body>
        <nav>
          <ul>
            {internalLinks.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
        <footer>
          <ul>
            {externalLInks.map(({ label, route }) => (
              <li key={route}>
                <Link href={route} target={"_blank"}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </body>
    </html>
  );
}
