import { Check, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PricingCard() {
  return (
    <Card className="w-full max-w-lg mx-auto border-accent/20 bg-background/70 backdrop-blur-sm">
      <div className="p-8">
        <div className="flex justify-center items-baseline gap-2 mb-4">
          <span className="text-4xl font-bold">$99</span>
          <span className="text-muted-foreground">one-time</span>
        </div>
        
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium text-center mb-6">
          No subscriptions, no recurring fees
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "Lifetime access to EmergencyLLM",
            "Free updates for life",
            "Offline-first capabilities",
            "All future model improvements",
            "Premium support",
            "Commercial use license",
            "iOS 15.0 or later"
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-accent flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button className="w-full gap-2" size="lg">
          <Apple className="h-4 w-4" /> Purchase on App Store
        </Button>

        <p className="text-sm text-muted-foreground text-center mt-4">
          30-day money-back guarantee
        </p>
      </div>
    </Card>
  );
}