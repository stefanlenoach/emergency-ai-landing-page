import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Wifi,
  Zap,
  Server,
  Clock,
  Github,
  Apple,
  Check,
} from "lucide-react";
import { PricingCard } from "@/components/PricingCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { IOSBadge } from "@/components/IOSBadge";
import * as EmailValidator from 'email-validator';
import {supabase} from '@/lib/supabase';


function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();

    try {
      // Reset any previous error states
      setError("");
      setIsLoading(true);

      // Validate email format using email-validator
      if (!email) {
        throw new Error("Please enter an email address");
      }

      if (!EmailValidator.validate(email)) {
        throw new Error("Please enter a valid email address");
      }

   // Insert email into Supabase
   console.log('hmm?????/')

   const { data, error } = await supabase
      .from('emergencyAI_signups')
      .insert([
        {
          email_address: email,
        }
      ])
      .select();

    if (error) {
      console.log('ERROR', error)
      throw new Error('Failed to register email. Please try again.');
    }

      // If successful, update UI state
      setSubmitted(true);
      setEmail("");
      setIsLoading(false);

    } catch (err) {
      // Handle errors gracefully
      setError(err.message);
      setIsLoading(false);
      setSubmitted(false);
    }
  };

  const trustedBrands = [
    { name: "Global Emergency Response", logo: "🏥" },
    { name: "International Aid Society", logo: "🆘" },
    { name: "MediCare Plus", logo: "⚕️" },
    { name: "First Response Network", logo: "🚑" },
    { name: "Emergency Care Alliance", logo: "🏦" },
    { name: "Health Guardian Group", logo: "💉" },
  ];

  const testimonials = [
    {
      quote: "EmergencyAI has revolutionized how we handle critical situations. The offline capabilities are a game-changer.",
      author: "Dr. Sarah Chen",
      role: "Emergency Response Director",
      organization: "Metro General Hospital"
    },
    {
      quote: "Response times are incredible. This tool has become indispensable for our emergency response team.",
      author: "James Rodriguez",
      role: "Chief Paramedic",
      organization: "City Emergency Services"
    },
    {
      quote: "The accuracy and speed of protocol retrieval have helped us save countless lives.",
      author: "Dr. Michael Thompson",
      role: "ER Department Head",
      organization: "Central Medical Center"
    }
  ];

  return (
    <div className="min-h-screen bg-background/80 relative">
      <AnimatedBackground />

      {/* Header */}
      <header className="border-b bg-background/95 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* <BrainCircuit className="h-6 w-6 text-primary" /> */}
            <span className="font-bold text-xl">EmergencyAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#use-cases" className="text-muted-foreground hover:text-primary transition-colors">Use Cases</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
          </nav>
          <div className="flex items-center gap-4">
            {/* <Button variant="hidden">Login</Button> */}
            <Button variant="hidden">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <IOSBadge />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent p-2">
            AI Support When<br />Every Second Counts
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A powerful, local-first AI model designed for emergency responders and healthcare professionals. Works offline, responds instantly, and keeps data private.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <Button type="submit">
                {submitted ? <Check className="h-4 w-4" /> : "Join Waitlist"}
              </Button>
            </div>
            {submitted && (
              <p className="text-sm text-primary mt-2">Thanks for joining! We'll be in touch soon.</p>
            )}
          </form>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Apple className="h-4 w-4" /> Download on App Store
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Github className="h-4 w-4" /> View on GitHub
            </Button>
          </div> */}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl font-semibold mb-8 text-muted-foreground">
            Trusted by Leading Healthcare Providers
          </h2>
          <div className="flex overflow-hidden">
            <div className="flex animate-[scroll_20s_linear_infinite] gap-8 items-center">
              {[...trustedBrands, ...trustedBrands].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 min-w-[200px] px-6 py-4 bg-background/70 rounded-lg border border-accent/20 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                >
                  <span className="text-2xl">{brand.logo}</span>
                  <span className="font-medium">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why EmergencyAI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-accent/20 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <Wifi className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Offline-First</h3>
              <p className="text-muted-foreground">
                Works without internet connection. Always available when you need it most.
              </p>
            </Card>
            <Card className="p-6 border-accent/20 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Private</h3>
              <p className="text-muted-foreground">
                All data stays on your iOS device. No cloud processing or external dependencies.
              </p>
            </Card>
            <Card className="p-6 border-accent/20 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <div className="bg-accent/5 rounded-lg p-8 backdrop-blur supports-[backdrop-filter]:bg-accent/60">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Real-time Protocol Access</h3>
                <div className="space-y-2 text-sm">
                  <p className="bg-background/70 p-3 rounded-lg border border-accent/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">User: "Protocol for severe allergic reaction?"</p>
                  <p className="bg-primary/5 p-3 rounded-lg border border-primary/20 backdrop-blur supports-[backdrop-filter]:bg-primary/60">Assistant: "1. Assess airway and breathing
2. Administer epinephrine (0.3-0.5mg IM)
3. Call emergency services
4. Monitor vital signs..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="p-6 border-accent/20 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-accent/5">
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
            Join thousands of emergency responders already using EmergencyAI on iOS
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            <Apple className="h-4 w-4" /> Download on App Store
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              {/* <BrainCircuit className="h-6 w-6 text-primary" /> */}
              <span className="font-bold">EmergencyAI</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;