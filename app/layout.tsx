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

export const metadata = {
  title: "Gonzalo Pozzo",
  authors: {
    name: "goncy",
  },
  description:
    "I'm Gonzalo Pozzo, a frontend developer and content creator from Argentina, focused in helping people to land their first job in IT",
  keywords: "trabajo,frontend,backend,trainee,junior,semisenior,senior",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const nextCookies = cookies();
  const colorMode = (nextCookies.get("theme")?.value as undefined | "light" | "dark") || "dark";

  return (
    <html className={colorMode}>
      <body
        className={`${inter.className} bg-white dark:bg-primary-950 text-black/90 dark:text-white/90 overflow-x-hidden`}
      >
        <main className="max-w-3xl m-auto">
          <header className="print:hidden px-4 items-center justify-between py-4 flex sticky top-0 z-50 bg-white/90 dark:bg-primary-950/90 mb-24">
            <h1 className="font-medium mr-auto text-lg">Gonzalo Pozzo</h1>
            <div className="flex gap-8">
              <a href="https://whatsapp.goncy.dev">
                <svg height="16px" viewBox="0 0 14 14" width="16px">
                  <path
                    d="M0.913134,0.920639 C1.49851,0.331726 2.29348,0 3.12342,0 L10.8766,0 C11.7065,0 12.5015,0.331725 13.0869,0.920639 C13.6721,1.50939 14,2.30689 14,3.13746 L14,8.12943 C13.9962,8.51443 13.9059,8.97125 13.7629,9.32852 C13.6128,9.683 13.3552,10.0709 13.0869,10.3462 C12.813,10.6163 12.4265,10.8761 12.0734,11.0274 C11.7172,11.1716 11.2607,11.263 10.8766,11.2669 L10.1234,11.2669 L10.1234,12.5676 L10.1209,12.5676 C10.1204,12.793 10.0633,13.0791 9.97807,13.262 C9.8627,13.466 9.61158,13.7198 9.40818,13.8382 L9.40824,13.8383 C9.4077,13.8386 9.40716,13.8388 9.40661,13.8391 C9.40621,13.8393 9.4058,13.8396 9.40539,13.8398 L9.40535,13.8397 C9.22958,13.9254 8.94505,13.9951 8.75059,14 L8.74789,14 C8.35724,13.9963 7.98473,13.8383 7.71035,13.5617 L5.39553,11.2669 L3.12342,11.2669 C2.29348,11.2669 1.49851,10.9352 0.913134,10.3462 C0.644826,10.0709 0.387187,9.683 0.23711,9.32852 C0.0941235,8.97125 0.00379528,8.51443 0,8.12943 L0,3.13746 C0,2.30689 0.327915,1.50939 0.913134,0.920639 Z M3.12342,1.59494 C2.71959,1.59494 2.33133,1.75628 2.04431,2.04503 C1.75713,2.33395 1.59494,2.72681 1.59494,3.13746 L1.59494,8.12943 C1.59114,8.35901 1.62114,8.51076 1.71193,8.72129 C1.79563,8.9346 1.88065,9.06264 2.04431,9.22185 C2.33133,9.5106 2.71959,9.67195 3.12342,9.67195 L5.72383,9.67195 C5.93413,9.67195 6.13592,9.75502 6.28527,9.90308 L8.52848,12.1269 L8.52848,10.4694 C8.52848,10.029 8.88552,9.67195 9.32595,9.67195 L10.8766,9.67195 C11.1034,9.67583 11.2517,9.64614 11.4599,9.55518 C11.6712,9.47132 11.7976,9.38635 11.9557,9.22185 C12.1193,9.06264 12.2044,8.9346 12.2881,8.72129 C12.3789,8.51076 12.4089,8.35901 12.4051,8.12943 L12.4051,3.13746 C12.4051,2.72681 12.2429,2.33394 11.9557,2.04503 C11.6687,1.75628 11.2804,1.59494 10.8766,1.59494 L3.12342,1.59494 Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
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
          <footer className="print:hidden border-t border-neutral-500/20 px-4 mt-24 py-4 flex items-center justify-between">
            <p>Read less, do more.</p>
            <p>Quilmes: {new Date().getFullYear()}</p>
          </footer>
        </main>
      </body>
    </html>
  );
}
