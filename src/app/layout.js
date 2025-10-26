import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmad Hanki | Front-End Developer",
  description:
    "Portfolio of Ahmad Hanki - a passionate Front-End developer specializing in modern web applications, UI/UX, and scalable backend systems.",
  openGraph: {
    title: "Ahmad Hanki | Front-End Developer",
    description:
      "Check out Ahmad's portfolio featuring dynamic projects, skills, and achievements in Front-End development.",
    url: "https://portfolio-v2-three-red.vercel.app/",
    siteName: "Ahmad Hanki Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Hanki Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Hanki | Front-End Developer",
    description:
      "Explore Ahmad Hanki's projects, skills, and achievements in web development.",
    images: ["/images/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
