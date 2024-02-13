export const Heading = () => {
	return (
		<div className="relative h-full w-full bg-no-repeat bg-cover">
			<div className="max-w-3xl md:grid grid-cols-2 md:max-w-7xl pt-40  ">
				<div
					className=" absolute inset-0 bg-cover"
					style={{
						backgroundImage:
							"url(https://cdn.elearningindustry.com/wp-content/uploads/2017/03/6-elearning-strategies-to-develop-deeper-learning-skills-e1489405475782.jpeg)",

						opacity: 0.1,
					}}
				/>
				<div className="flex flex-col space-y-9">
					<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase">
						Efficent school, learning & school management
						<span className="font-bold text-rose-700"> Solution</span>
					</h1>
					<h3 className="text-2xl font-semibold md:text-3xl">
						Ensuring Excellence and Compliance in Your Educational Environment
					</h3>
					<p className="text-2xl font-light">
						Our mission is to help educational institutions digitize and
						simplify all processes from enrollment to alumni. Embrace a new
						world of efficiency where back office, educators, students, and
						parents converge seamlessly, streamlining communications,
						administration, operations, and academics in a single, dynamic hub.
						Join us and discover new levels of efficiency.
					</p>
				</div>
				<p className="text-lg">The best way to manage your projects</p>d
			</div>
		</div>
	);
};
