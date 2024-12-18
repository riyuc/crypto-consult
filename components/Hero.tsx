import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto text-center relative">
        <div className="absolute inset-0 grid grid-cols-3 -space-x-52 opacity-20 pointer-events-none">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
          Blockchain Consultation Reimagined
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Unlock the potential of your cryptocurrency projects with expert guidance and cutting-edge solutions.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

