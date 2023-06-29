import { useMsal } from "@azure/msal-react";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";

const Index = () => {
	const { axios } = useAxios();
	const { accounts } = useMsal();

	return (
		<div className="hero h-full f[background-image:url(https://picsum.photos/1920/1080)]">
			{/* <div className="hero-overlay bg-opacity-50"></div> */}
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">
						Welcome{accounts[0] && " " + accounts[0]?.name}.
					</h1>
					<p className="mb-5 text-lg lg:whitespace-nowrap">
						Click below to get started on a journey of a lifetime.
					</p>
					<button className="btn btn-primary m-1">Get Started</button>
					<button
						className="btn btn-secondary m-1"
						onClick={() => {
							axios
								.get("/users/read/user")
								.then((response) => {
									toast.success(
										response.data[
											Math.floor(
												Math.random() *
													response.data.length
											)
										].name
									);
								})
								.catch((err) => {
									console.log(err);
								});
						}}
					>
						Send Request
					</button>
				</div>
			</div>
		</div>
	);
};

export default Index;
