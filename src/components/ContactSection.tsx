import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Ready to bring your digital vision to life? I'd love to hear about your project 
            and help you create something extraordinary.
          </p>
          <a
            href="mailto:hello@digitalkindness.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
