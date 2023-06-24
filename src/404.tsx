import { Link } from "react-router-dom";

export const ErrorBoundary = () => {
	return (
		<main className="flex justify-center items-center w-full h-full">
			<div className="flex w-1/2 h-1/2 justify-between">
				<div className="flex flex-col justify-center text-center gap-2">
					<h1>Whoops...</h1>
					<p>This page does not exist.</p>
					<Link to="/" className="btn btn-primary">
						Take me back.
					</Link>
				</div>
				<div className="h-full flex">
					<img className="object-contain" src="lost.png" alt="" />
				</div>
			</div>
		</main>
	);
};

export default ErrorBoundary;
