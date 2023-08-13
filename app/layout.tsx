import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./utils/providers";

import SigninSignoutButton from "./components/SigninSignoutButton";
import CurrentUser from "./components/CurrentUser";
import RegisterButton from "./components/RegisterButton";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuth + Email Verification",
  description:
    "NextAuth + Email Verification/NodeMail ( Prisma + Postgres ), learned from Sakura Dev, Ethan Mick, Onelight Web Dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex h-screen flex-col items-center p-24 text-gray-300">
            <div className="z-10 max-w-5xl w-full flex items-center justify-between">
              <CurrentUser />
              <RegisterButton />
              <SigninSignoutButton />
            </div>
            {children}
            <Backdrop />
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
