import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function BasicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
