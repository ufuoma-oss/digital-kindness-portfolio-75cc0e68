import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fashion E-Commerce Store",
    category: "Shopify",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Creative Agency Portfolio",
    category: "WordPress",
    color: "from-primary/15 to-primary/5",
  },
  {
    title: "Beauty Brand Website",
    category: "Custom Build",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Restaurant Bio & Menu Page",
    category: "Bio Website",
    color: "from-primary/15 to-primary/5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WorkSection = () => {
  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Selected Work</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className={`group relative rounded-3xl bg-gradient-to-br ${p.color} border border-border/50 p-8 md:p-10 min-h-[240px] flex flex-col justify-end hover:border-primary/40 transition-colors duration-300 cursor-pointer`}
            >
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-body font-medium text-primary mb-2 tracking-wider uppercase">
                {p.category}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-semibold">{p.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
