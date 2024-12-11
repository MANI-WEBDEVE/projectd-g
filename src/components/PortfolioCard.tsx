"use client";

import portfolioData from "@/json/portfolio.json";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

interface PortfolioCardProps {
  value: string;
}

export default function PortfolioCard({ value }: PortfolioCardProps) {
  // Remove spaces and get the matching data from portfolio.json
  const normalizedValue = value.replace(/\s+/g, "");
  const projects =
    portfolioData[normalizedValue as keyof typeof portfolioData] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-4">
      {projects.map((project) => (
        <CardContainer key={project.title} className="inter-var">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto w-[94%] md:w-full rounded-xl p-6 bg-slate-400/10 sm:bg-slate-400/10 md:bg-transparent  border hover:bg-slate-400/10">
            <CardItem
              translateZ="50"
              className="text-lg md:text-xl font-bold dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white/70 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={project.title}
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as={Link}
                href={project.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem translateZ={20} as="div" className="flex gap-2">
                {project.tags &&
                  project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
