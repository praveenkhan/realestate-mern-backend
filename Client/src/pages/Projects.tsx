import { motion } from "framer-motion";
import { Building2, Hammer, PaintBucket, TrendingUp, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const allProjects = [
  { image: project1, title: "The Meridian Towers", location: "Downtown District", type: "Residential", status: "Completed" },
  { image: project2, title: "Vertex Business Hub", location: "Central Avenue", type: "Commercial", status: "Completed" },
  { image: project3, title: "Oakridge Estates", location: "Suburban Heights", type: "Residential", status: "Completed" },
  { image: project1, title: "Skyline Residences", location: "Harbour Point", type: "Residential", status: "In Progress" },
  { image: project2, title: "Pinnacle Office Park", location: "Tech Corridor", type: "Commercial", status: "In Progress" },
  { image: project3, title: "Greenview Villas", location: "Hillside Avenue", type: "Residential", status: "Upcoming" },
];

const serviceDetails = [
  {
    icon: Building2,
    title: "Residential Development",
    desc: "We design and build premium apartments, townhouses, and villas that prioritize comfort, functionality, and aesthetic appeal. Our residential projects incorporate modern amenities and sustainable building practices.",
  },
  {
    icon: Hammer,
    title: "Commercial Construction",
    desc: "From corporate office towers to retail complexes, our commercial projects are engineered for durability and designed for productivity. We deliver spaces that help businesses thrive.",
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    desc: "Our in-house design team creates bespoke interiors that reflect your personality and lifestyle. From material selection to final styling, we ensure every detail aligns with your vision.",
  },
  {
    icon: TrendingUp,
    title: "Property Consulting",
    desc: "Leverage our deep market knowledge for investment analysis, site selection, and development feasibility studies. We guide clients through every decision with data-driven insights.",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-main text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              What We Deliver
            </span>
            <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Projects & Services
            </h1>
            <div className="gold-divider mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            label="Our Expertise"
            title="Comprehensive Development Services"
            description="End-to-end solutions for every stage of your real estate journey."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {serviceDetails.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6 rounded-lg border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-warm">
        <div className="container-main">
          <SectionHeading
            label="Our Portfolio"
            title="Explore Our Projects"
            description="A showcase of completed, ongoing, and upcoming developments across diverse sectors."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded bg-accent px-2 py-1 font-body text-xs font-semibold text-accent-foreground">
                      {project.type}
                    </span>
                    <span className={`rounded px-2 py-1 font-body text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-primary text-primary-foreground"
                        : project.status === "In Progress"
                        ? "bg-gold-light text-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-1 flex items-center gap-1 font-body text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
