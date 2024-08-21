import CallList from "../../_components/CallList";


const UpcomingPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 px-4">
      <h1 className="text-3xl font-bold">Upcoming Meeting</h1>

      <CallList type="upcoming" />
    </section>
  );
};

export default UpcomingPage;
