import { UserButton } from "@clerk/nextjs";
export default function Home() {
	return (
		<div className="p-6">
			<UserButton afterSignOutUrl="/" />
		</div>
	);
}
