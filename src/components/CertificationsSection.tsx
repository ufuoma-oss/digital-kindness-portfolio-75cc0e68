import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

const certs = [
  {
    title: "Social Media Management",
    issuer: "Certified Professional",
    icon: BadgeCheck,
  },
  {
    title: "Digital Marketing",
    issuer: "Certified Specialist",
    icon: Award,
  },
  {
    title: "Shopify Partner",
    issuer: "Platform Certified",
    icon: BadgeCheck,
  },
  {
    title: "WordPress Development",
    issuer: "Professional Experience",
    icon: Award,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
            Credentials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Certifications & Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold mb-1">{c.title}</h3>
              <p className="text-xs text-muted-foreground font-body">{c.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
