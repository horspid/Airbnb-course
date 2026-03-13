import { Outlet } from "react-router";
import { Header, Footer } from "@widgets";

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
