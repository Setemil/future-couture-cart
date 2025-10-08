import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold tracking-wider">AURUM</h3>
            <p className="font-sans text-sm text-primary-foreground/80">
              Where fashion meets the future. Timeless elegance for the modern era.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 transition-colors hover:text-accent">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 hover:text-accent"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 hover:text-accent"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-sans text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} AURUM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
