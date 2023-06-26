import React, { useState } from "react";
import Navbar from "./components/ui/navigation/Navbar";
import SpinnerOverlay from "./components/ui/display/SpinnerOverlay";
import Drawer from "./components/ui/navigation/Drawer";

function Layout({ children }: React.PropsWithChildren) {
	const [loaded, setLoaded] = useState(false);

	setTimeout(() => {
		setLoaded(true);
	}, 1000);

	return (
		<section className="flex flex-col w-full h-full overflow-auto">
			<Navbar />
			<div className="flex justify-center h-full w-full relative">
				<Drawer>
					<div className="w-full bg-base-100 h-full">{children}</div>
				</Drawer>
				{!loaded && <SpinnerOverlay />}
			</div>
		</section>
	);
}

export default Layout;
