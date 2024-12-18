import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ConsultationForm from '@/components/ConsultationForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  )
}

