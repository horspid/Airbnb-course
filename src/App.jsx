import { createBrowserRouter, RouterProvider } from 'react-router';

import './styles/app.css';

// Pages
import Home from './pages/Home';
import Listing from './pages/Listing';
import Item from './pages/Item';
import Layout from './layouts/Layout';


const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: 'listing',
				Component: Listing,
			},
			{
				path: 'item',
				Component: Item
			}
		]
	}
])


function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;
