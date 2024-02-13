import { Navbar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
        <div className="h-full">
            <Navbar/>
			<main>{children}</main>
		</div>
	);
};

export default LandingLayout;
