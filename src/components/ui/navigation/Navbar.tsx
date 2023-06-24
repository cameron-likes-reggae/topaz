import React, { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const [auth, setAuth] = useState(false);
	const navigate = useNavigate();

	return (
		<div className="navbar bg-base-100 border-b lg:px-20">
			<div className="flex-1">
				<img src="favicon.png" className="w-10 h-10" alt="" />
				<h1 onClick={() => navigate("/")}>CompanyName</h1>
			</div>
			<div className="flex-none gap-10">
				<div className="form-control">
					<ul className="flex gap-5 box-border">
						<li className="text-lg tracking-wide border-b-2 border-transparent hover:border-secondary transition-colors">
							<Link to="/documentation">Documentation</Link>
						</li>
						<li className="text-lg tracking-wide  border-b-2 border-transparent hover:border-secondary transition-colors">
							<Link to="/pricing">Pricing</Link>
						</li>
						<li className="text-lg tracking-wide  border-b-2 border-transparent hover:border-secondary transition-colors">
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-24 md:w-auto"
					/>
				</div>
				<div className="dropdown dropdown-end">
					{auth ? (
						<>
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar"
							>
								<IoIosPerson className="text-4xl bg-base-100 rounded-full" />
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
									<a>Settings</a>
								</li>
								<li>
									<a>Logout</a>
								</li>
							</ul>
						</>
					) : (
						<div className="flex gap-1">
							<button className="btn btn-primary">Sign Up</button>
							<button className="btn btn-ghost">Login</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
