import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="container m-auto max-w-200 p-10 md:p-16">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
