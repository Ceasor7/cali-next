import About from "@/components/About/About";
import Description from "@/components/Description/Description";
import LandingPage from "@/components/Hero/LandingPage";
import OurPrograms from "@/components/Programs/OurPrograms";
import OurTeam from "@/components/Team/OurTeam";
import Values from "@/components/Values/Values";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-montserrat)]">
      <section id="home">
        <LandingPage />
      </section>
      <section id="description">
        <Description />
      </section>
      <section id="about" className="py-6">
        <About />
      </section>
      <section id="values">
        <Values />
      </section>
      <section id="programs">
        <OurPrograms />
      </section>
      <section id="team">
        <OurTeam />
      </section>
    </div>
  );
}
