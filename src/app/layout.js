import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plant AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}