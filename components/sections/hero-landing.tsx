import Link from "next/link";
import { LinkedinIcon } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

import { AuroraText } from "../magicui/aurora-text";
import { LineShadowText } from "../magicui/line-shadow-text";

export default async function HeroLanding() {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
          {/* <span className="text-gradient_indigo-purple font-extrabold">
            Unlocking Tomorrow&apos;s Innovations, Today
          </span> */}
          <AuroraText>Unlocking Tomorrow&apos;s Innovations, Today</AuroraText>
        </h1>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Kick off your innovation journey with{" "}
          {/* <span className="font-bold">BoseIn</span> */}
          <span className="text-gradient_indigo-purple font-semibold">
            BoseIn{" "}
          </span>
          —where academia meets industry to solve real-world challenges!
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            target="_blank"
            href="mailto:operations@bosein.com"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2",
            )}
          >
            <span>Start with us Today</span>
            <Icons.arrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
