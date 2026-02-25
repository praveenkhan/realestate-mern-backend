import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast({
          title: "Send Failed",
          description: data?.error || "Failed to send message",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for reaching out. We'll get back to you soon.",
        });

        setForm({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      toast({
        title: "Send Failed",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Contact Us
            </h1>
            <div className="gold-divider mt-4" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* LEFT SIDE CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl font-bold text-foreground">
                Let's Discuss Your Project
              </h2>

              <div className="gold-divider !mx-0 mt-3 mb-6" />

              <p className="mb-8 font-body text-muted-foreground">
                Whether you have a question about our services, need a
                consultation, or want to explore partnership opportunities, our
                team is here to help.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Visit Us",
                    value: "42 Meridian Boulevard,\nDowntown Business District",
                  },
                  {
                    icon: Phone,
                    label: "Call Us",
                    value: "+1 (555) 890-1234",
                  },
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: "info@crestviewdev.com",
                  },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    value: "Mon – Fri: 9:00 AM – 6:00 PM",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">
                        {item.label}
                      </p>
                      <p className="whitespace-pre-line font-body text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-border bg-card p-8 shadow-sm"
              >
                <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
                  Send Us a Message
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-body text-sm font-medium text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      value={form.fullName}
                      onChange={(e) =>
                        setForm({ ...form, fullName: e.target.value })
                      }
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block font-body text-sm font-medium text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block font-body text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block font-body text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full bg-accent font-body text-sm font-semibold uppercase tracking-wider text-accent-foreground hover:bg-gold-dark sm:w-auto"
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      SEND MESSAGE
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
