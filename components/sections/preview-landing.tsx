import Image from "next/image";
import {
  BarChart3,
  Building,
  CheckCircle,
  GraduationCap,
  Lightbulb,
  Shield,
} from "lucide-react";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Timeline } from "../ui/timeline";
import Waves from "../ui/waves";

export default function PreviewLanding() {
  // {
  //   step: "01",
  //   title: "Submit Research Needs",
  //   description:
  //     "Startups define their research challenges and requirements",
  // },
  // {
  //   step: "02",
  //   title: "Match with Researchers",
  //   description:
  //     "Our App matches your needs with qualified academics",
  // },
  // {
  //   step: "03",
  //   title: "Collaborative Research",
  //   description:
  //     "Structured collaboration with clear milestones and deliverables",
  // },
  // {
  //   step: "04",
  //   title: "Implement Insights",
  //   description:
  //     "Turn research findings into actionable innovations",
  // },

  const data = [
    {
      title: "01",
      content: (
        <div>
          <h2 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
            Submit Research Needs
          </h2>
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Startups define their research challenges and requirements
          </p>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div>
          <h2 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
            Match with Researchers
          </h2>
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Our App matches your needs with qualified academics
          </p>
        </div>
      ),
    },
    {
      title: "03",
      content: (
        <div>
          <h2 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
            Collaborative Research
          </h2>
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Structured collaboration with clear milestones and deliverables
          </p>
        </div>
      ),
    },
    {
      title: "04",
      content: (
        <div>
          <h2 className="mb-2 text-2xl font-normal text-neutral-800 dark:text-neutral-200">
            Implement Insights
          </h2>
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Turn research findings into actionable innovations
          </p>
        </div>
      ),
    },
  ];

  return (
    <MaxWidthWrapper>
      <section className="rounded-xl border bg-white py-12 transition-all duration-200 hover:shadow-xl md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              Problem Statement
            </h2>
            <p className="text-lg text-muted-foreground">
              Startups struggle to access specialized research expertise without
              the burden of full-time hires, while academic researchers seek
              real-world applications for their knowledge.
            </p>
            <p className="text-lg text-muted-foreground">
              This disconnect creates a significant innovation gap, limiting
              both business growth and academic impact in today&apos;s knowledge
              economy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              Our Solution
            </h2>
            <p className="text-lg text-muted-foreground">
              Bosein bridges this gap with a platform that connects startups
              with academic researchers, creating a seamless Research as a
              Service ecosystem.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Specialized Talent",
                description:
                  "Affordable access to specialized research expertise",
                icon: <GraduationCap className="h-6 w-6 text-primary" />,
              },
              {
                title: "Real-world Data",
                description:
                  "Academics gain access to industry data and challenges",
                icon: <BarChart3 className="h-6 w-6 text-primary" />,
              },
              {
                title: "Flexible Models",
                description: "Project-based or ongoing collaboration options",
                icon: <Lightbulb className="h-6 w-6 text-primary" />,
              },
              {
                title: "IP Protection",
                description:
                  "Clear intellectual property agreements and protection",
                icon: <Shield className="h-6 w-6 text-primary" />,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="rounded-xl border-none shadow-xl transition-all duration-200 hover:shadow-2xl dark:bg-muted"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <CardDescription className="text-center text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="rounded-xl border bg-white py-12 transition-all duration-200 hover:shadow-xl md:py-16"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process makes research collaboration simple and
              effective
            </p>
          </div>
          <div className="w-full gap-8">
            <Timeline data={data} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">Benefits</h2>
            <p className="text-lg text-muted-foreground">
              Creating value for both startups and academic researchers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="rounded-xl transition-all duration-200 hover:shadow-xl">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  <CardTitle>For Startups</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Cost-effective R&D without full-time hires",
                  "Access to specialized expertise across multiple domains",
                  "Academic rigor applied to business challenges",
                  "Innovation acceleration through proven research methodologies",
                  "Competitive intelligence and market insights",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="rounded-xl transition-all duration-200 hover:shadow-xl">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <CardTitle>For Academics</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Real-world industry data for meaningful research",
                  "Publication and patent opportunities",
                  "Industry connections and networking",
                  "Additional income streams",
                  "Practical application of theoretical knowledge",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative rounded-xl py-12 md:py-16">
        <div className="container z-10 rounded-xl px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-3xl">
                Ready to Transform Your Research Approach?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join Bosein today and connect with the perfect research partners
                for your innovation journey.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-end">
              <Button size="lg" className="sm:w-auto">
                Post Your Research Challenge
              </Button>
              <Button variant="outline" size="lg" className="sm:w-auto">
                Join Our Researcher Network
              </Button>
            </div>
          </div>
        </div>
        <Waves
          className="-z-10 shadow-xl"
          lineColor="#e5e7eb"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={10}
          yGap={36}
        />
      </section>

      {/* About Us */}
      <section id="about" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              About BoseIn
            </h2>
            <p className="text-lg text-muted-foreground">
              Founded with a vision to establish India as a global research hub,
              Bosein is committed to bridging the gap between academic
              excellence and industry innovation.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team combines expertise in research, technology, and business
              to create a platform that democratizes access to specialized
              knowledge while upholding the highest standards of ethical
              research practices.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="rounded-xl border bg-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 md:gap-8">
            {[
              {
                question: "How are researchers vetted?",
                answer:
                  "All researchers undergo a rigorous verification process including academic credential verification, expertise assessment, and reference checks to ensure quality.",
              },
              {
                question: "Who owns the intellectual property?",
                answer:
                  "By default, clients own all IP generated through our platform. Custom arrangements can be made for joint research initiatives.",
              },
              {
                question: "What types of startups can benefit most?",
                answer:
                  "Any startup facing complex challenges that require specialized knowledge can benefit, particularly those in tech, healthcare, finance, and manufacturing.",
              },
              {
                question: "How quickly can research projects be completed?",
                answer:
                  "Timelines vary based on project complexity. Simple projects may take 2-4 weeks, while comprehensive research initiatives might span several months.",
              },
              {
                question: "How is data security maintained?",
                answer:
                  "We implement enterprise-grade security protocols, strict NDAs, and secure data handling practices to protect all client information.",
              },
              {
                question: "Can I work with international researchers?",
                answer:
                  "Yes, our platform connects you with researchers globally, though we specialize in connecting clients with India's vast academic talent pool.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="rounded-xl border-none shadow-xl transition-all duration-200 hover:shadow-2xl dark:bg-muted"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-3xl">
                Get in Touch
              </h2>
              <p className="text-muted-foreground">
                Have questions or ready to start? Our team is here to help you
                navigate your research journey.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <p>operations@bosein.com</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you
                  shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your company"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}

/* 

in today’s rapidly evolving technology landscape, startups are emerging daily, each with unique product and technological needs. However, most startups struggle to fund extensive research and development (R&D) due to limited resources. Hiring a dedicated R&D team or full-time employees for every aspect of innovation can be prohibitively expensive, particularly for early-stage companies.

Simultaneously, academia faces its own challenges. Professors and graduate students are eager to conduct cutting-edge research aligned with modern industry needs, yet they often lack access to high-quality, relevant industry data. While open-source platforms like Kaggle provide datasets, these are typically generic and not tailored to specific research goals. On the other hand, acquiring specialized industry data comes with a significant cost, which many researchers cannot afford.

To address these challenges, we are building a platform offering Research as a Service (RaaS). This platform will serve as a bridge between academia and industry, enabling:

Startups: Gain access to high-quality research and insights without the financial burden of hiring dedicated R&D employees.

Academia: Allow professors and graduate students to conduct relevant, industry-level research for their papers and patents, utilizing real-world data without the high costs of data acquisition.

Through this innovative model, we aim to create a mutually beneficial ecosystem where both startups and academia thrive. Startups can leverage the expertise of researchers to accelerate their product development, while researchers gain access to real-time industry data to enhance their research capabilities.

Ultimately, our vision is to establish India as a global hub for research and innovation by creating a platform where cutting-edge industry problems meet academic expertise, fostering a new era of knowledge-driven growth and technological advancement.

We believe this RaaS platform will not only benefit startups and academic researchers but will also contribute significantly to India's global positioning as a leading center for research and innovation.

*/
