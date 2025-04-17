"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sendEmail } from "@/actions/send-mail";
import {
  AlertCircle,
  BarChart3,
  Building,
  CheckCircle,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Mail,
  PhoneCall,
  Shield,
} from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Timeline } from "../ui/timeline";
import { Toaster } from "../ui/toaster";
import { toast } from "../ui/use-toast";
import Waves from "../ui/waves";

export default function PreviewLanding() {
  const currentTheme = useTheme();

  const { theme } = currentTheme;
  const [organizationType, setOrganizationType] = useState<
    "company" | "academia"
  >("company");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organizationName: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      // Prepare the data for submission
      const dataToSubmit = {
        ...formData,
        organizationType,
        organizationName: formData.organizationName,
      };

      // Send the email
      const result = await sendEmail(dataToSubmit);

      setFormStatus(result);

      if (result.success) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          organizationName: "",
          message: "",
        });

        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Match With Researchers
          </h2>
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Our app matches your needs with qualified academics
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
            Use Our Platform
          </h2>
          <p className="text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Organize, assign, and track research tasks in real-time—centralize
            data, enable reuse, and visualize progress, all in one place
          </p>
        </div>
      ),
    },
    {
      title: "05",
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
      <Toaster />
      <section className="rounded-xl border bg-white py-12 transition-all duration-200 hover:shadow-xl dark:bg-muted md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              Why We Exist !!
            </h2>
            <p className="text-lg text-muted-foreground">
              Startups need expert research insights but can’t afford full-time
              hires. Meanwhile, academics crave real-world impact for their
              work.
            </p>
            <p className="text-lg text-muted-foreground">
              This disconnect creates a critical innovation gap — slowing down
              business growth and limiting the real-world impact of academic
              insights in today&apos;s knowledge-driven economy.
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
            <code className="bg-muted text-lg font-semibold italic text-muted-foreground">
              &quot;Accelerating research by reusing proven insights and
              leveraging past experiments done by our Researchers&quot;
            </code>
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
        className="rounded-xl border bg-white py-12 transition-all duration-200 hover:shadow-xl dark:bg-muted md:py-16"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">
              Your Research Journey, Simplified !!
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
            <h2 className="text-4xl font-bold tracking-tighter">
              Mutual Wins: Startups × Researchers
            </h2>
            <p className="text-lg text-muted-foreground">
              Creating value for both startups and academic researchers
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="rounded-xl transition-all duration-200 hover:shadow-xl">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <Building className="size-5 text-primary" />
                  <CardTitle>For Startups</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Cost-effective R&D without full-time hires",
                  "Access to specialized expertise across multiple domains",
                  "Academic rigor applied to business challenges",
                  "Fastrack innovation through proven research methodologies",
                  "Competitive intelligence and market insights",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="rounded-xl transition-all duration-200 hover:shadow-xl">
              <CardHeader>
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="size-5 text-primary" />
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
                    <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" />
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
              <h2 className="text-4xl font-bold tracking-tighter dark:text-primary sm:text-3xl">
                Ready to Transform Your Research Approach?
              </h2>
              <p className="text-muted- text-lg dark:text-white">
                Join BoseIn today to collaborate on real-world challenges.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-end">
              <Button size="lg" className="hover:primary/80 sm:w-auto">
                <Link href="https://docs.google.com/forms/d/1WPolnbnoZGLqolOui4c0DZL9sJHYRNTGZ1OtVpZKUAM/edit">
                  For Startups / Companies
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-[#97ACBA] hover:bg-[#6c7981] sm:w-auto"
              >
                <Link href="https://docs.google.com/forms/d/1_F_irxRsLVLIbGGd7l3KqrJTmXPVrO683OmTQK2sj9I/edit">
                  For Academia / Researchers
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Waves
          className="-z-10 shadow-xl"
          // lineColor={cn(`#e5e7eb `, {
          //   dark: "#000",

          // })}
          lineColor={theme === "dark" ? "#000" : "#e5e7eb"}
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.03}
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
      <section className="rounded-xl border bg-white py-12 dark:bg-muted/20 md:py-16">
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
                question: "How quickly can  projects be completed?",
                answer:
                  "Timelines depend on project complexity. While simple projects may take 2–4 weeks, more comprehensive initiatives can span several months. However, we can fast-track progress by breaking down your problem into focused chunks, enabling multiple researchers to work in parallel.",
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
                to navigate your research journey
              </p>
              <div className="space-y-2">
                <div className="flex flex-col items-start gap-2">
                  <a
                    href="mailto:operations@bosein.com"
                    className="flex items-center gap-x-2 rounded-xl bg-gray-300 px-2 dark:bg-gray-800 dark:text-primary"
                  >
                    <Mail className="size-5 text-black dark:text-primary" />
                    operations@bosein.com
                  </a>
                  {/* <a
                    href="tel:+918409783307"
                    className="flex items-center gap-x-2 rounded-xl bg-gray-300 px-2 dark:bg-gray-800 dark:text-primary"
                  >
                    <PhoneCall className="size-5 text-black dark:text-primary" />
                    +91 8409783307
                  </a> */}
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
                {/* {formStatus && (
                  <Alert
                    className={`mb-6 ${formStatus.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                  >
                    {formStatus.success ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertTitle>
                      {formStatus.success ? "Success" : "Error"}
                    </AlertTitle>
                    <AlertDescription>{formStatus.message}</AlertDescription>
                  </Alert>
                )} */}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Organization Type</Label>
                    <RadioGroup
                      value={organizationType}
                      onValueChange={(value) =>
                        setOrganizationType(value as "company" | "academia")
                      }
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="company" id="company" />
                        <Label htmlFor="company">Company</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="academia" id="academia" />
                        <Label htmlFor="academia">Academia</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    {organizationType === "company" ? (
                      <>
                        <Label htmlFor="organizationName">Company Name</Label>
                        <Input
                          id="organizationName"
                          placeholder="Your company"
                          required
                          value={formData.organizationName}
                          onChange={handleChange}
                        />
                      </>
                    ) : (
                      <>
                        <Label htmlFor="organizationName">
                          College/Institute Name
                        </Label>
                        <Input
                          id="organizationName"
                          placeholder="Your college or institute"
                          required
                          value={formData.organizationName}
                          onChange={handleChange}
                        />
                      </>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[150px]"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
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
