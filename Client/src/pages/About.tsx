import { motion } from "framer-motion";
import { Target, Eye, Award, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutImage from "@/assets/about-team.jpg";

const values = [
  { icon: Target, title: "Precision", desc: "Every detail is meticulously planned and executed to ensure the highest standards." },
  { icon: Eye, title: "Transparency", desc: "Open communication and honest reporting at every phase of the project lifecycle." },
  { icon: Award, title: "Excellence", desc: "We pursue excellence in design, materials, and workmanship without compromise." },
  { icon: Briefcase, title: "Integrity", desc: "Ethical practices and client trust form the cornerstone of every engagement." },
];

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-main text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              About Crestview
            </span>
            <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Our Story & Values
            </h1>
            <div className="gold-divider mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutImage}
                alt="Crestview team discussing project plans"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading label="Our Mission" title="Driven by Purpose, Built on Trust" align="left" />
              <p className="font-body leading-relaxed text-muted-foreground">
                Crestview Developers was established with a singular vision: to transform the way people
                experience urban and suburban living. Over the past 15 years, we've grown from a small
                construction firm into a full-service real estate developer known for landmark projects
                that blend innovation with timeless design.
              </p>
              <p className="mt-4 font-body leading-relaxed text-muted-foreground">
                Our multidisciplinary team of architects, engineers, and project managers collaborates
                closely with clients to understand their goals and deliver results that exceed expectations.
                We believe that great spaces don't just house people — they inspire them.
              </p>
              <p className="mt-4 font-body leading-relaxed text-muted-foreground">
                From luxury high-rises in bustling city centers to serene residential communities on the
                outskirts, every Crestview project is a testament to our dedication to quality, sustainability,
                and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-warm">
        <div className="container-main">
          <SectionHeading
            label="What Guides Us"
            title="Our Core Values"
            description="These principles define who we are and how we approach every project."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-lg border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading label="Milestones" title="Our Journey" />
          <div className="mx-auto max-w-3xl space-y-8">
            {[
              { year: "2009", event: "Crestview Developers founded with a focus on residential construction." },
              { year: "2013", event: "Expanded into commercial development with the Vertex Business Hub project." },
              { year: "2017", event: "Reached 100+ completed projects and launched our interior design division." },
              { year: "2021", event: "Recognized as a top-tier developer with multiple industry awards." },
              { year: "2025", event: "Over 200 projects completed, serving clients across multiple regions." },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6"
              >
                <span className="shrink-0 font-display text-2xl font-bold text-accent">{item.year}</span>
                <div className="border-l-2 border-accent/20 pl-6">
                  <p className="font-body text-muted-foreground">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
