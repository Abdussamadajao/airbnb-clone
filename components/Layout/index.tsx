import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default LayoutPage;
