import { cn } from "@/utils";

function Card({ className, ...props }: React.ComponentPropsWithRef<"div">) {
	return (
		<div
			{...props}
			className={cn(
				"rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",
				className,
			)}
		/>
	);
}

function CardHeader({
	className,
	...props
}: React.ComponentPropsWithRef<"div">) {
	return (
		<div
			{...props}
			className={cn("flex flex-col space-y-1.5 p-6", className)}
		/>
	);
}

function CardTitle({
	className,
	...props
}: React.ComponentPropsWithRef<"div">) {
	return (
		<div
			{...props}
			className={cn(
				"text-2xl font-semibold leading-none tracking-tight",
				className,
			)}
		/>
	);
}

function CardDescription({
	className,
	...props
}: React.ComponentPropsWithRef<"div">) {
	return (
		<div
			{...props}
			className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
		/>
	);
}

function CardContent({
	className,
	...props
}: React.ComponentPropsWithRef<"div">) {
	return <div {...props} className={cn("p-6 pt-0", className)} />;
}

function CardFooter({
	className,
	...props
}: React.ComponentPropsWithRef<"div">) {
	return (
		<div {...props} className={cn("flex items-center p-6 pt-0", className)} />
	);
}

export {
	Card,
	CardTitle,
	CardHeader,
	CardFooter,
	CardContent,
	CardDescription,
};
