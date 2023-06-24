const Index = () => {
	return (
		<div className="hero h-full f[background-image:url(https://picsum.photos/1920/1080)]">
			{/* <div className="hero-overlay bg-opacity-40"></div> */}
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold text-base-content">
						Welcome.
					</h1>
					<p className="mb-5 text-lg tracking-wide whitespace-nowrap text-base-content">
						Click below to get started on a journey of a lifetime.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Index;
