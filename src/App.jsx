import { createBrowserRouter, RouterProvider } from 'react-router';

// Components
import Footer from './components/Footer';
import Header from './components/Header/Header'

// Pages
import Home from './pages/Home';
import Listing from './pages/Listing';
import Item from './pages/Item';



function App() {

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />
		},
		{
			path: '/listing',
			element: <Listing />
		},
		{
			path: '/item',
			element: <Item />
		}
	])

	return (
		<div>
			<Header />
			<RouterProvider router={router} />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
