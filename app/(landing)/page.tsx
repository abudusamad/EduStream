import { Heading } from "./_components/heading";

const LandingPage = () => {
	return (
		<div className="min-h-full flex flex-col ">
			<div className="flex flex-col items-center justify-center md:justify-start gap-y-8 flex-1 pb-10 ">
				<Heading />
			</div>
		</div>
	);
};

export default LandingPage;
