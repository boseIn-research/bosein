"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

type AnimatedLoginButtonProps = {
  varient?:
    | "secondary"
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "ghost"
    | "disable"
    | null
    | undefined;
  className?: string;
  text: string;
};

export default function AnimatedButton({
  varient,
  className,
  text,
}: AnimatedLoginButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      className={`${className} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variant={varient}
    >
      <span>{text}</span>
      <motion.div
        initial={{ opacity: 0, x: -10, width: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : -10,
          width: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <ChevronRight className="size-4" />
      </motion.div>
    </Button>
  );
}
