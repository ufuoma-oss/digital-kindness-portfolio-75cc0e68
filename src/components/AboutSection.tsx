import { motion } from "framer-motion";
import workspaceImg from "@/assets/hero-workspace.jpg";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Happy Clients", value: "40+" },
  { label: "Projects Completed", value: "50+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl overflow-hidden">
            <img
              src={workspaceImg}
              alt="Digital Kindness workspace"
              className="w-full h-80 md:h-[420px] object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
            About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Crafting digital with <span className="text-gradient">kindness</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            I'm the founder of Digital Kindness — a creative studio focused on building beautiful, 
            high-converting e-commerce stores and modern websites. I work with Shopify, WordPress, 
            React, TypeScript, and modern web technologies to help businesses grow and collect payments online.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            With certifications in Social Media Management and Digital Marketing, plus deep expertise in 
            payment integrations like Paystack and Flutterwave, I bring a holistic approach — combining 
            stunning design with seamless functionality to deliver results that matter.
          </p>

          <div className="flex gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-display font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
