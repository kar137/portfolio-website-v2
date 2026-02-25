import { NeuralNetworkInline } from "@/components/three/NeuralNetwork";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title">About Me</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            I’m Karan Bista, an Applied AI Engineer, passionate about building intelligent systems that power products with predictive insights, generative AI experiences, and scalable data-driven pipelines. My work bridges innovation with practicality, turning advanced models into solutions that truly deliver value.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="holo-card">
              <p className="font-semibold">Mission</p>
              <p className="text-sm text-muted-foreground mt-1">
                Transform complex data into actionable intelligence that drives innovation and impact.
              </p>
            </li>
            <li className="holo-card">
              <p className="font-semibold">Expertise</p>
              <p className="text-sm text-muted-foreground mt-1">
                Designing and deploying ML systems, building LLM-powered applications, implementing MLOps workflows, and creating insightful data visualizations.
              </p>
            </li>
            <li className="holo-card">
              <p className="font-semibold">Values</p>
              <p className="text-sm text-muted-foreground mt-1">
                Clarity in communication, reliability in solutions, and user experiences that feel intuitive and meaningful.
              </p>
            </li>
            <li className="holo-card">
              <p className="font-semibold">Focus</p>
              <p className="text-sm text-muted-foreground mt-1">
                Delivering real-world impact with measurable outcomes that scale.
              </p>
            </li>
          </ul>
        </div>
        <Reveal className="order-1 md:order-2 relative flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              {/* circular portrait with subtle gradient ring */}
              <div className="rounded-full p-1 bg-gradient-to-tr from-neon-cyan/30 via-neon-purple/20 to-neon-pink/20">
                <div className="rounded-full overflow-hidden bg-muted">
                    <img
                      src="/profile.png"
                      alt="Karan"
                      className="w-[19rem] h-[19rem] sm:w-[20rem] sm:h-[20rem] lg:w-[23rem] lg:h-[23rem] object-cover"
                    />
                </div>
              </div>

              {/* subtle outer glow */}
              <span className="pointer-events-none absolute -inset-1 rounded-full block shadow-[0_20px_60px_rgba(162,89,255,0.06)]" />
            </div>

            {/* name badge */}
            <div className="text-center">
              <p className="font-semibold">Karan Bista</p>
              <p className="text-xs text-muted-foreground">Applied AI Engineer | Abundant (YC F24)</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
