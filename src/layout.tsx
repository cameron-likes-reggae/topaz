import React from "react";
import Navbar from "./components/ui/navigation/Navbar";

function Layout({ children }: React.PropsWithChildren) {
	return (
		<section className="flex flex-col w-full h-full overflow-auto">
			<Navbar />
			<div className="flex justify-center h-full">
				<div className="w-full bg-base-100 h-full">{children}</div>
			</div>
		</section>
	);
}

export default Layout;
