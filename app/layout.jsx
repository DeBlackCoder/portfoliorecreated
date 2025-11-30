import "./globals.css";
import "../components/toggle.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Harry Prosper Portfolio",
  description: "Portfolio of Harry Prosper - Web Designer & Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
