import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import Waves from "../ui/waves";
import AnimatedButton from "./animated-button";
import MaxWidthWrapper from "./max-width-wrapper";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  sectionClassName?: string;
};

export default function Cta({
  title,
  description,
  buttonText,
  buttonLink,
  sectionClassName,
}: Props) {
  return (
    <section className={cn("py-16 pt-0", sectionClassName)}>
      <MaxWidthWrapper>
        <div className="relative mx-auto h-full w-full rounded-xl border border-gray-100 bg-white p-8 shadow-2xl lg:max-w-4xl">
          <div className="relative inset-0 z-20 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
            <div className="pt-2">
              <Link href={buttonLink}>
                <AnimatedButton
                  text={buttonText}
                  className="bg-gradient_indigo-purple hover:opacity-90"
                />
              </Link>
            </div>
          </div>
          <Waves
            className="z-0"
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
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
