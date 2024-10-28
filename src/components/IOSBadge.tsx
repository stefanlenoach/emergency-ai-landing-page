import { Apple } from "lucide-react";

export function IOSBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
      <Apple className="h-4 w-4" />
      iOS Only
    </div>
  );
}