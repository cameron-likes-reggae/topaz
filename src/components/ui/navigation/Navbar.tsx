// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const Navbar = () => {
	// const { user, login, logout } = useAuth();
	const { instance, accounts } = useMsal();
	const user = accounts[0];
	const navigate = useNavigate();

	return (
		<div className="navbar bg-base-100 border-b border-base-200 lg:px-20">
			<div className="flex-1">
				<label
					htmlFor="content_drawer"
					className="btn btn-square btn-ghost lg:hidden"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="inline-block w-5 h-5 stroke-current"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
				<span
					className="flex items-center cursor-pointer"
					onClick={() => navigate("/")}
				>
					<img
						src="favicon.png"
						className="w-5 h-5 lg:w-7 lg:h-7"
						alt=""
					/>
					<h1 className="!text-2xl lg:!text-3xl cursor-pointer">
						Topaz
					</h1>
				</span>
			</div>
			<div className="flex-none gap-10">
				<div className="form-control hidden xl:block">
					<ul className="flex gap-5 box-border menu menu-horizontal">
						<li>
							<Link to="/documentation">Documentation</Link>
						</li>
						<li>
							<Link to="/pricing">Pricing</Link>
						</li>
						<li>
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className="form-control hidden md:block">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-24 md:w-auto"
					/>
				</div>
				<div className="dropdown dropdown-end">
					{user?.name ? (
						<>
							<div className="bg-primary brightness-50 w-[2.9rem] h-[2.9rem] top-[0.05rem] left-[0.05rem] rounded-full absolute" />
							<label
								tabIndex={0}
								className="btn btn-circle glass"
							>
								{user?.name.split(" ")[0][0] +
									user?.name.split(" ")[1][0]}
								{/* <IoIosPerson className="text-4xl bg-base-100 rounded-full" /> */}
							</label>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a onClick={() => navigate("/settings")}>
										Settings
									</a>
								</li>
								<li>
									<a
										onClick={() =>
											instance.logoutRedirect()
										}
									>
										Logout
									</a>
								</li>
							</ul>
						</>
					) : (
						<div className="flex gap-2">
							<button className="btn btn-accent">Sign Up</button>
							<button
								className="btn btn-ghost"
								onClick={() => instance.loginRedirect()}
							>
								Login
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
