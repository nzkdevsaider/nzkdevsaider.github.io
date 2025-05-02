import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="container m-auto max-w-[50rem] p-10 md:p-16">
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
