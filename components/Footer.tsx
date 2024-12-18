import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md text-foreground py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-gradient mb-2">CryptoConsult</h2>
          <p className="text-sm text-muted-foreground">Empowering your blockchain journey</p>
        </div>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">Contact Us</Link>
        </nav>
      </div>
      <div className="container mx-auto mt-4 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 CryptoConsult. All rights reserved.</p>
      </div>
    </footer>
  )
}

