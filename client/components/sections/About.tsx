import { NeuralNetworkInline } from "@/components/three/NeuralNetwork";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <Reveal className="order-2 md:order-1">
          <h2 className="section-title">About Me</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            I am Karan Bista, an AI/ML developer focused on crafting intelligent
            systems that elevate products with predictive insights, generative
            experiences, and scalable data pipelines.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="holo-card">
              <p className="font-semibold">Mission</p>
              <p className="text-sm text-muted-foreground mt-1">
                Turn complex data into actionable intelligence.
              </p>
            </li>
            <li className="holo-card">
              <p className="font-semibold">Expertise</p>
              <p className="text-sm text-muted-foreground mt-1">
                ML systems, LLM apps, MLOps, and data visualization.
              </p>
            </li>
            <li className="holo-card">
              <p className="font-semibold">Values</p>
              <p className="text-sm text-muted-foreground mt-1">
                Clarity, reliability, and delightful UX.
              </p>
            </li>
            <li className="holo-card">
              <p className="font-semibold">Focus</p>
              <p className="text-sm text-muted-foreground mt-1">
                Real-world impact, measurable outcomes.
              </p>
            </li>
          </ul>
        </Reveal>
        <Reveal className="order-1 md:order-2 relative">
          <div className="relative mx-auto aspect-square w-72 sm:w-96">
            <div className="absolute inset-0 rounded-2xl glass holo-ring overflow-hidden" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <NeuralNetworkInline />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 bg-radial-glow rounded-3xl" />
        </Reveal>
      </div>
    </section>
  );
}
