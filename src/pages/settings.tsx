import React from "react";

const Settings = () => {
	return (
		<main>
			<h1>Settings</h1>
			<section className="flex flex-col gap-2">
				<div className="divider">General</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100"
				>
					<div className="collapse-title text-xl font-medium">
						Profile
					</div>
					<div className="collapse-content">
						<div
							className="menu"
							onMouseDown={(e) => e.preventDefault()}
						>
							<ul>
								<li className="flex">
									<span className="flex justify-between">
										<label htmlFor="setting1">
											Receive notifications about the
											lastest events and promotional
											offers
										</label>
										<input
											id="setting1"
											className="checkbox"
											type="checkbox"
										/>
									</span>
								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100"
				>
					<div className="collapse-title text-xl font-medium">
						Friends
					</div>
					<div className="collapse-content">
						<div
							className="menu"
							onMouseDown={(e) => e.preventDefault()}
						>
							<ul>
								<li className="flex">
									<span className="flex justify-between">
										<label htmlFor="setting1">
											Receive notifications about the
											lastest events and promotional
											offers
										</label>
										<input
											id="setting1"
											className="checkbox"
											type="checkbox"
										/>
									</span>
								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="divider">System</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100"
				>
					<div className="collapse-title text-xl font-medium">
						Application
					</div>
					<div className="collapse-content">
						<div
							className="menu"
							onMouseDown={(e) => e.preventDefault()}
						>
							<ul>
								<li className="flex">
									<span className="flex justify-between">
										<label htmlFor="setting1">
											Receive notifications about the
											lastest events and promotional
											offers
										</label>
										<input
											id="setting1"
											className="checkbox"
											type="checkbox"
										/>
									</span>
								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100"
				>
					<div className="collapse-title text-xl font-medium">
						Cache
					</div>
					<div className="collapse-content">
						<div
							className="menu"
							onMouseDown={(e) => e.preventDefault()}
						>
							<ul>
								<li className="flex">
									<span className="flex justify-between">
										<label htmlFor="setting1">
											Receive notifications about the
											lastest events and promotional
											offers
										</label>
										<input
											id="setting1"
											className="checkbox"
											type="checkbox"
										/>
									</span>
								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100"
				>
					<div className="collapse-title text-xl font-medium">
						Startup
					</div>
					<div className="collapse-content">
						<div
							className="menu"
							onMouseDown={(e) => e.preventDefault()}
						>
							<ul>
								<li className="flex">
									<span className="flex justify-between">
										<label htmlFor="setting1">
											Receive notifications about the
											lastest events and promotional
											offers
										</label>
										<input
											id="setting1"
											className="checkbox"
											type="checkbox"
										/>
									</span>
								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="divider">Advanced</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100"
				>
					<div className="collapse-title text-xl font-medium">
						Graphics
					</div>
					<div className="collapse-content">
						<div
							className="menu"
							onMouseDown={(e) => e.preventDefault()}
						>
							<ul>
								<li className="flex">
									<span className="flex justify-between">
										<label htmlFor="setting1">
											Receive notifications about the
											lastest events and promotional
											offers
										</label>
										<input
											id="setting1"
											className="checkbox"
											type="checkbox"
										/>
									</span>
								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
				<div
					tabIndex={0}
					className="collapse collapse-arrow border border-base-300 bg-base-100"
				>
					<div className="collapse-title text-xl font-medium">
						Misc
					</div>
					<div className="collapse-content">
						<div
							className="menu"
							onMouseDown={(e) => e.preventDefault()}
						>
							<ul>
								<li className="flex">
									<span className="flex justify-between">
										<label htmlFor="setting1">
											Receive notifications about the
											lastest events and promotional
											offers
										</label>
										<input
											id="setting1"
											className="checkbox"
											type="checkbox"
										/>
									</span>
								</li>
								<li></li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Settings;
