import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Shield, Zap } from 'lucide-react'

const features = [
  {
    icon: <Cpu className="h-8 w-8 mb-4 text-primary" />,
    title: "Advanced Technology",
    description: "Leverage cutting-edge blockchain solutions tailored to your project's needs."
  },
  {
    icon: <Shield className="h-8 w-8 mb-4 text-primary" />,
    title: "Enhanced Security",
    description: "Implement robust security measures to protect your cryptocurrency assets."
  },
  {
    icon: <Zap className="h-8 w-8 mb-4 text-primary" />,
    title: "Rapid Development",
    description: "Accelerate your project timeline with our efficient consultation process."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

