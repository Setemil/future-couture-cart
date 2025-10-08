import aboutImage from "@/assets/about-image.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded shadow-luxury">
              <img
                src={aboutImage}
                alt="Luxury fashion atelier workspace"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="mb-6 font-serif text-5xl font-bold">A Future of Elegance</h2>
            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                AURUM was born from a vision to redefine luxury fashion for the modern era. 
                We believe that true elegance transcends time, merging traditional craftsmanship 
                with futuristic design philosophy.
              </p>
              <p>
                Each piece in our collection is meticulously crafted by master artisans, 
                using only the finest materials sourced from around the world. Our commitment 
                to sustainability and ethical production ensures that luxury and responsibility 
                go hand in hand.
              </p>
              <p>
                From concept to creation, every detail is considered, every stitch deliberate. 
                This is more than fashion—it's a statement of who you are and who you aspire to be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
