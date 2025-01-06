import About from "@/components/About/About";
import Description from "@/components/Description/Description";
import LandingPage from "@/components/Hero/LandingPage";
import OurPrograms from "@/components/Programs/OurPrograms";
import OurTeam from "@/components/Team/OurTeam";
import Values from "@/components/Values/Values";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section>
        <LandingPage />
      </section>
      <section>
        <Description />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Values />
      </section>
      <section>
        <OurPrograms />
      </section>
      <section>
        <OurTeam />
      </section>
    </div>
  );
}
