import React from "react";
import Navbar from "./components/ui/navigation/Navbar";
// import SpinnerOverlay from "./components/ui/display/SpinnerOverlay";
import Drawer from "./components/ui/navigation/Drawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function Layout({ children }: React.PropsWithChildren) {
	// const [loaded, setLoaded] = useState(false);

	return (
		<section className="flex flex-col w-full h-full overflow-auto">
			<ToastContainer pauseOnFocusLoss={false} position="bottom-right" />
			<Navbar />
			<div className="flex justify-center h-full w-full relative overflow-y-auto">
				<Drawer>
					<div className="w-full bg-base-100 h-full p-5 overflow-y-auto">
						{children}
					</div>
				</Drawer>
				{/* {!loaded && <SpinnerOverlay />} */}
			</div>
		</section>
	);
}

export default Layout;
