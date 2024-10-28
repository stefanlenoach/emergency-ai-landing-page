import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BrainCircuit,
  Shield,
  Wifi,
  Zap,
  Server,
  Clock,
  ChevronRight,
  Github,
  Apple,
} from "lucide-react";
import { PricingCard } from "@/components/PricingCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { IOSBadge } from "@/components/IOSBadge";

function App() {
  return (
    <div className="min-h-screen bg-background/80 relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="border-b bg-background/95 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">EmergencyLLM</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary">Features</a>
            <a href="#use-cases" className="text-muted-foreground hover:text-primary">Use Cases</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <IOSBadge />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight md:leading-tight bg-gradient-to-r from-primary via-accent to-accent bg-clip-text text-transparent">
            AI Support When<br />Every Second Counts
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A powerful, local-first LLM designed for iOS emergency responders and healthcare professionals. Works offline, responds instantly, and keeps data private.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Apple className="h-4 w-4" /> Download on App Store
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-4 w-4" /> View on GitHub
            </Button>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            iOS 15.0 or later • No internet required • 100% private • Open source
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-accent/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why EmergencyLLM?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-accent/20 bg-background/70 backdrop-blur-sm">
              <Wifi className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Offline-First</h3>
              <p className="text-muted-foreground">
                Works without internet connection. Always available when you need it most.
              </p>
            </Card>
            <Card className="p-6 border-accent/20 bg-background/70 backdrop-blur-sm">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Private</h3>
              <p className="text-muted-foreground">
                All data stays on your iOS device. No cloud processing or external dependencies.
              </p>
            </Card>
            <Card className="p-6 border-accent/20 bg-background/70 backdrop-blur-sm">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Response</h3>
              <p className="text-muted-foreground">
                Optimized for iOS with response times under 100ms.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Emergency Services</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Server className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
                  <p className="text-muted-foreground">
                    Instant access to protocols and procedures during critical situations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-8 w-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time-Critical Decisions</h3>
                  <p className="text-muted-foreground">
                    AI-powered decision support when every second counts.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-accent/5 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Real-time Protocol Access</h3>
                <div className="space-y-2 text-sm">
                  <p className="bg-background/70 p-3 rounded-lg border border-accent/20 backdrop-blur-sm">User: "Protocol for severe allergic reaction?"</p>
                  <p className="bg-primary/5 p-3 rounded-lg border border-primary/20 backdrop-blur-sm">Assistant: "1. Assess airway and breathing
2. Administer epinephrine (0.3-0.5mg IM)
3. Call emergency services
4. Monitor vital signs..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-accent/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              One-time payment, lifetime access. No subscriptions ever.
            </p>
          </div>
          <PricingCard />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Emergency Response?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of emergency responders already using EmergencyLLM on iOS
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            <Apple className="h-4 w-4" /> Download on App Store
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-6 w-6 text-primary" />
              <span className="font-bold">EmergencyLLM</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
              <a href="#" className="hover:text-primary">Documentation</a>
              <a href="#" className="hover:text-primary">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;