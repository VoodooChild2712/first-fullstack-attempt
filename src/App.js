import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import Home from "./pages/home-page";

const routerConfig = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
]);

function App() {
	return (<RouterProvider router={routerConfig}/>);
}

export default App;
