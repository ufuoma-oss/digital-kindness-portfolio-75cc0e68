import { motion } from "framer-motion";
import { ShoppingCart, Globe, Layout, Share2, Megaphone, Code } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Custom Shopify & WooCommerce stores built to maximize conversions and revenue.",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Responsive, fast-loading websites that look incredible on every device.",
  },
  {
    icon: Layout,
    title: "Portfolio & Bio Sites",
    desc: "Personal branding pages that tell your story with elegance and clarity.",
  },
  {
    icon: Code,
    title: "Shopify & WordPress",
    desc: "Expert integration, customization, and theme development for both platforms.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Certified strategies to grow your brand's presence and engagement online.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Data-driven campaigns that drive traffic, leads, and measurable growth.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
            What I Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Services & Expertise
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="glass-card rounded-2xl p-7 group hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
