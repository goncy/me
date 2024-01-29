import {Inter} from "next/font/google";
import {cookies} from "next/headers";

import ColorModeSwitcher from "../ui/controls/ColorModeSwitcher";

import "../globals.css";

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "block",
  preload: true,
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({children}: Props) {
  const nextCookies = cookies();
  const colorMode = (nextCookies.get("theme")?.value as undefined | "light" | "dark") || "dark";

  return (
    <html className={colorMode}>
      <head />
      <body
        className={`${inter.className} bg-white/90 dark:bg-primary-950 text-black/90 dark:text-white/90 overflow-x-hidden`}
      >
        <main className="max-w-3xl m-auto">
          <header className="print:hidden px-4 items-center justify-between py-4 flex sticky top-0 z-50 bg-white/90 dark:bg-primary-950 mb-24">
            <h1 className="font-medium mr-auto text-lg">Gonzalo Pozzo</h1>
            <div className="flex gap-8">
              <a href="https://calendar.goncy.dev">
                <svg height="16px" viewBox="0 0 14 14" width="16px">
                  <path
                    d="M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <ColorModeSwitcher colorMode={colorMode} />
            </div>
          </header>
          <article className="relative px-4">{children}</article>
          <footer className="print:hidden px-4 mt-24 border-t py-4 flex items-center justify-between border-black/10 dark:border-white/10">
            <p>Read less, do more.</p>
            <p>Quilmes: {new Date().getFullYear()}</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
