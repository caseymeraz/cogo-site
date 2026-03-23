"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 radial-fade" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Ready to make the right
            <br />
            <span className="gradient-text">technology decision?</span>
          </h2>
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
            Book a 30-minute call with one of our partners. No pitch, no
            pressure. Tell us what you are facing and we will tell you honestly
            if we can help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:info@cogo.ie"
              className="group relative px-8 py-4 rounded-full text-background font-medium text-sm overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-2 group-hover:opacity-90 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                Book a call
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
            <a
              href="mailto:info@cogo.ie"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              or email info@cogo.ie
            </a>
          </div>

          {/* Contact details */}
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-muted">
            <div>
              <div className="font-medium text-foreground mb-1">Ireland</div>
              <div>+353 87 984 2886</div>
            </div>
            <div>
              <div className="font-medium text-foreground mb-1">Americas</div>
              <div>+1 608 302 8164</div>
            </div>
            <div>
              <div className="font-medium text-foreground mb-1">South Africa</div>
              <div>+27 651 015 858</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
