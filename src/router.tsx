import {
	createBrowserRouter,
	RouterProvider,
	LoaderFunction,
	ActionFunction,
} from "react-router-dom";
import Layout from "./layout";
import FourOhFour from "./404";

interface RouteCommon {
	loader?: LoaderFunction;
	action?: ActionFunction;
	ErrorBoundary?: JSX.Element; //React.ComponentType<any>;
}

interface IRoute extends RouteCommon {
	path: string;
	Element: React.ComponentType<any>;
}

interface Pages {
	[key: string]: {
		default: React.ComponentType<any>;
	} & RouteCommon;
}

const pages: Pages = import.meta.glob("./pages/**/*.tsx", { eager: true });

const routes: IRoute[] = [];
for (const path of Object.keys(pages)) {
	const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
	if (!fileName) {
		continue;
	}

	const normalizedPathName = fileName.includes("$")
		? fileName.replace("$", ":")
		: fileName.replace(/\/index/, "");

	routes.push({
		path:
			fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
		Element: pages[path].default,
		loader: pages[path]?.loader as LoaderFunction | undefined,
		action: pages[path]?.action as ActionFunction | undefined,
	});
}

const router = createBrowserRouter(
	routes.map(({ Element, ErrorBoundary, ...rest }) => ({
		...rest,
		...(Element && {
			element: (
				<Layout>
					<Element />
				</Layout>
			),
		}),
		errorElement: <FourOhFour />,
	}))
);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
