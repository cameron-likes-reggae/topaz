import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export default function Drawer(props: PropsWithChildren) {
	const { user } = useAuth();

	return (
		<div className="drawer lg:drawer-open">
			<input
				id="content_drawer"
				type="checkbox"
				className="drawer-toggle"
			/>
			<div className="drawer-content flex flex-col items-center justify-center overflow-y-auto">
				{props.children}
			</div>
			<div className="drawer-side h-full">
				<label
					htmlFor="content_drawer"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 h-full bg-base-100 shadow-md text-base-content border-r border-r-base-200">
					<li>
						<Link to="/documentation">Documentation</Link>
					</li>
					<li>
						<Link to="/pricing">Pricing</Link>
					</li>
					<li>
						<Link to="/contact-us">Contact Us</Link>
					</li>
					<li>
						<Link to="/settings">Settings</Link>
					</li>
					{user && (
						<li className="mt-auto">logged in as: {user.name}</li>
					)}
				</ul>
			</div>
		</div>
	);
}
