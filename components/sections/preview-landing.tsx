import Image from "next/image";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16" id="#about">
      <MaxWidthWrapper>
        <div className="rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="relative aspect-video overflow-hidden rounded-xl border md:rounded-lg">
            <Image
              className="size-full object-cover object-center dark:opacity-85 dark:invert"
              src="/_static/blog/blog-post-3.jpg"
              alt="preview landing"
              width={2000}
              height={1000}
              priority={true}
            />
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-center text-xl font-bold sm:text-3xl">
            At BoseIn, we&apos;re on a mission to democratise research. We
            understand the value of your expertise and the impact your research
            can have on real-world challenges.
          </h2>
          <p className="mt-3 text-center text-lg text-muted-foreground">
            We offer Research as a Service (RAAS)— an innovative solution
            designed to support businesses and academic researchers with their
            R&D needs, without the hefty price tag typically associated with
            traditional research.
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
