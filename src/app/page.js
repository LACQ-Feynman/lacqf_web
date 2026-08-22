import Layout from "@/ui/components/Layout";
import Navigation from "@/ui/components/Navigation";

import Hero from "@/ui/components/Hero";
import WhoWeAre from "@/ui/components/WhoWeAre";
import AboutUs from "@/ui/components/AboutUs";
import Partners from "@/ui/components/Partners";
import UpcomingEvents from "@/ui/components/UpcomingEvents";
import HomeCTA from "@/ui/components/HomeCTA";

export default function Home() {
  return (
    <Layout>
      <>
        <Navigation />
        <div id="main-content" tabIndex="-1">
          <Hero id="hero" />
          <WhoWeAre id="whoWeAre" />
          <AboutUs id="about" />
          <Partners id="sponsors" />
          <UpcomingEvents id="upcomingEvents" />
          <HomeCTA id="membership" />
        </div>
      </>
    </Layout>
  );
}
