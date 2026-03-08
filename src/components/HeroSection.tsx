import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";
import patternBg from "@/assets/pattern-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden max-w-[100vw]"
      style={{
        backgroundImage: `url(${patternBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4"
          >
            E-Commerce · Web · Payments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
          >
            Building digital
            <br />
            <span className="text-gradient">experiences</span>
            <br />
            that convert.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-muted-foreground font-body text-lg max-w-md mb-8 leading-relaxed"
          >
            I design & build stunning portfolios, e-commerce stores, and payment-integrated websites that help brands stand out, sell more, and get paid seamlessly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden glow-accent">
              <img
                src={profileImg}
                alt="Digital Kindness - E-commerce & Web Specialist"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Social icons below image */}
            <div className="relative z-10 flex justify-center gap-4 mt-5">
              <a
                href="https://www.instagram.com/digitalkindness_?igsh=Y2prZ3hsaXI2M2l3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-secondary/60 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/2347037619131"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-secondary/60 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-3"
            >
              <p className="text-xs text-muted-foreground font-body">Projects Delivered</p>
              <p className="text-2xl font-display font-bold text-primary">50+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
