import { createBrowserRouter, RouterProvider } from 'react-router';

import './styles/app.css';

// Pages
import Home from './pages/Home';
import Listing from './pages/Listing';
import ItemPage from './pages/ItemPage';
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
				Component: ItemPage
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
