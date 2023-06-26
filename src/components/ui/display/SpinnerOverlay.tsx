import Spinner from "./Spinner";

export default function SpinnerOverlay() {
	return (
		<div className="absolute w-full h-full top-0 left-0 bg-neutral/70 flex justify-center items-center">
			<Spinner className="text-base-300 w-28" />
		</div>
	);
}
