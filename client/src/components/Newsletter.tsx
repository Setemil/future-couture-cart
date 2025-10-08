import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed!", {
        description: "Welcome to the AURUM community.",
      });
      setEmail("");
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="fixed bottom-8 right-8 z-40 shadow-luxury animate-float"
      >
        Subscribe to Newsletter
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>

          <div className="space-y-6 pt-4">
            <div className="space-y-2 text-center">
              <h2 className="font-serif text-3xl font-bold">Stay Connected</h2>
              <p className="font-sans text-sm text-muted-foreground">
                Be the first to discover new collections and exclusive offers
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-sans"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Subscribe
              </Button>
            </form>

            <p className="text-center text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
