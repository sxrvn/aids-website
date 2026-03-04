import Navbar from "@/components/conference/Navbar";
import Hero from "@/components/conference/Hero";
import ImportantDates from "@/components/conference/ImportantDates";
import Highlights from "@/components/conference/Highlights";
import Tracks from "@/components/conference/Tracks";
import Publication from "@/components/conference/Publication";
import Submission from "@/components/conference/Submission";
import Committee from "@/components/conference/Committee";
import About from "@/components/conference/About";
import Registration from "@/components/conference/Registration";
import Contact from "@/components/conference/Contact";
import Footer from "@/components/conference/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImportantDates />
      <Highlights />
      <Tracks />
      <Publication />
      <Submission />
      <Committee />
      <About />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
