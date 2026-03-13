import { createBrowserRouter, RouterProvider } from "react-router";

import "./styles/app.css";

// Pages
import Layout from "@app/ui/layouts/Layout";
import { HomePage, ListingPage, HotelPage } from "@pages";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "listing",
				Component: ListingPage,
			},
			{
				path: "item",
				Component: HotelPage,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
