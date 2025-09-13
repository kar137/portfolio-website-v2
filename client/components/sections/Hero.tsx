import { NeuralNetworkBackground } from "@/components/three/NeuralNetwork";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="section relative min-h-[92vh] flex items-center"
    >
      <NeuralNetworkBackground count={280} radius={1.8} />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,hsla(var(--neon-blue),0.08),transparent)]" />
      <div className="relative z-10 container">
        <Reveal className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="block section-title">Karan Bista</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">
              AI/ML Developer
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Transforming data into intelligence with futuristic solutions.
            Interactive neural networks and holographic UI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="neon-btn">
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#contact" className="neon-outline">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
