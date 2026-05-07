import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});


export const metadata = {
  title: "Base Apparel | Coming Soon",
  description: "Sign Up to be notified",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
