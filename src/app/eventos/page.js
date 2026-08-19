import Layout from "@/ui/components/Layout";
import Navigation from "@/ui/components/Navigation";
import UpcomingEvents from "@/ui/components/UpcomingEvents";
import Events from "@/ui/components/Events";

export default function EventosPage() {
  return (
    <Layout>
      <Navigation />
      <div id="main-content" tabIndex="-1">
        <UpcomingEvents id="upcomingEvents" />
        <Events id="events" />
      </div>
    </Layout>
  );
}
