import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Hammer, PaintBucket, TrendingUp, Shield, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-building.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const services = [
  {
    icon: Building2,
    title: "Residential Development",
    desc: "Premium apartments and villas designed for modern families with an emphasis on comfort and elegance.",
  },
  {
    icon: Hammer,
    title: "Commercial Construction",
    desc: "State-of-the-art office spaces and retail centers built to the highest structural and aesthetic standards.",
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    desc: "Bespoke interior solutions that transform spaces into refined environments tailored to your lifestyle.",
  },
  {
    icon: TrendingUp,
    title: "Property Consulting",
    desc: "Expert market analysis and investment guidance to help you make confident real estate decisions.",
  },
];

const projects = [
  { image: project1, title: "The Meridian Towers", location: "Downtown District", type: "Residential" },
  { image: project2, title: "Vertex Business Hub", location: "Central Avenue", type: "Commercial" },
  { image: project3, title: "Oakridge Estates", location: "Suburban Heights", type: "Residential" },
];

const whyUs = [
  { icon: Shield, title: "Trusted Quality", desc: "Every project undergoes rigorous quality checks at every stage of construction." },
  { icon: Clock, title: "On-Time Delivery", desc: "We honor our commitments with a proven track record of timely project completion." },
  { icon: Users, title: "Client-Centric", desc: "Your vision drives our process — transparent communication from start to finish." },
  { icon: TrendingUp, title: "Proven Growth", desc: "Over 200 successful projects delivered across residential and commercial sectors." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Modern luxury building at sunset" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-transparent" />
        </div>
        <div className="container-main relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Premium Real Estate Developer
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Building Landmarks,{" "}
              <span className="text-gradient-gold">Shaping Futures</span>
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-primary-foreground/80">
              Crestview Developers brings over 15 years of expertise in crafting residential and
              commercial spaces that stand as benchmarks of quality and design.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent font-body text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-gold-dark">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding bg-warm">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="Who We Are"
                title="A Legacy of Excellence in Development"
                align="left"
              />
              <p className="font-body leading-relaxed text-muted-foreground">
                Founded with a commitment to redefine urban landscapes, Crestview Developers has
                grown into a trusted name across residential and commercial construction. We combine
                innovative design, sustainable practices, and meticulous craftsmanship to create
                spaces that inspire and endure.
              </p>
              <p className="mt-4 font-body leading-relaxed text-muted-foreground">
                Our portfolio spans luxury apartments, premium villas, corporate offices, and retail
                destinations — each project reflecting our relentless pursuit of perfection.
              </p>
              <Link to="/about">
                <Button variant="link" className="mt-6 p-0 font-body text-sm font-semibold uppercase tracking-wider text-accent hover:text-gold-dark">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { num: "15+", label: "Years Experience" },
                { num: "200+", label: "Projects Delivered" },
                { num: "50+", label: "Awards Won" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border bg-card p-6 text-center shadow-sm"
                >
                  <span className="font-display text-3xl font-bold text-accent md:text-4xl">
                    {stat.num}
                  </span>
                  <p className="mt-2 font-body text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            label="What We Do"
            title="Our Core Services"
            description="From concept to completion, we offer a comprehensive suite of services tailored to meet the demands of modern development."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-warm">
        <div className="container-main">
          <SectionHeading
            label="Our Portfolio"
            title="Featured Projects"
            description="Explore a selection of our landmark developments that showcase our commitment to quality and innovation."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute right-3 top-3 rounded bg-accent px-3 py-1 font-body text-xs font-semibold text-accent-foreground">
                    {project.type}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button className="bg-primary font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-navy-light">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            label="Our Advantage"
            title="Why Choose Crestview"
            description="We set ourselves apart through unwavering commitment to quality, transparency, and client satisfaction."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="container-main py-16 text-center md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Build Your Vision?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg text-primary-foreground/70">
              Whether you're planning a new home or a commercial venture, our team is ready to bring
              your ideas to life.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="mt-8 bg-accent font-body text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-gold-dark"
              >
                Start Your Project Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
