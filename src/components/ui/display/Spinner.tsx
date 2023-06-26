export default function Spinner({
	className,
	...props
}: React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>) {
	return <div className={"loading loading-dots " + className} {...props} />;
}
