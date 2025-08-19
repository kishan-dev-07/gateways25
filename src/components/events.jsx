"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Code,
  Shield,
  Zap,
  Wifi,
  Brain,
  Palette,
  Gamepad2,
  Users,
  Camera,
  Gift,
  Map,
} from "lucide-react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { usePageTransition } from "@/hooks/usePageTransition";

const eventsData = [
  {
    title: "IT Quiz",
    description:
      "Test your knowledge across various IT domains including networking, databases, and emerging technologies.",
    icon: Brain,
  },
  {
    title: "It Manager",
    description:
      "Leadership simulation challenges focusing on project management and team coordination skills.",
    icon: Users,
  },

  {
    title: "Surprise Event",
    description:
      "Mystery challenge with unknown format - be prepared for anything and showcase your adaptability.",
    icon: Gift,
  },
  {
    title: "Treasure Hunt",
    description:
      "Adventure-based problem solving with clues, puzzles, and exploration challenges.",
    icon: Map,
  },
  {
    title: "Gaming",
    description:
      "Competitive esports tournaments featuring popular games and strategic gaming challenges.",
    icon: Gamepad2,
  },
  {
    title: "Photography",
    description:
      "Capture stunning moments and showcase your creative vision through the lens of photography.",
    icon: Camera,
  },
  {
    title: "IOT",
    description:
      "Internet of Things challenges combining hardware programming with creative software solutions.",
    icon: Wifi,
  },
  {
    title: "Capture The Flag",
    description:
      "Cybersecurity challenges involving cryptography, reverse engineering, and vulnerability exploitation.",
    icon: Shield,
  },
  {
    title: "Coding Debugging",
    description:
      "Debug complex algorithms and solve challenging coding problems to test your programming skills.",
    icon: Code,
  },
  {
    title: "UI/UX",
    description:
      "Design beautiful and intuitive user interfaces while creating exceptional user experiences.",
    icon: Palette,
  },
  {
    title: "Hackathon",
    description:
      "48-hour coding marathon to build innovative solutions and showcase your development expertise.",
    icon: Zap,
  },
];

// animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // This will apply a 0.1s delay to each child
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Events = () => {
  const { startPageTransition } = usePageTransition();
  const router = useRouter();

  const handleCardClick = (index) => {
    // Navigate to events page with slide query parameter (slides are 1-indexed)
    startPageTransition(() => {
      router.push(`/events?slide=${index + 1}`);
    });
  };

  return (
    <section
      className="min-h-screen px-4 md:px-8 lg:px-10"
      style={{
        background:
          "linear-gradient(298deg, #1c1829 0%, #1b1828 8.61%, #191724 17.21%, #161520 25.82%, #14131c 34.42%, #121218 43.03%, #111117 51.63%)",
      }}
    >
      <div className="mx-auto max-w-7xl ">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-[3.5rem] w-fit text-left font-bold md:text-7xl bg-gradient-to-r from-cyan-300 to-[#D4ff00] bg-clip-text text-transparent">
            Events
          </h1>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pb-12">
          {eventsData.map((event, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
                viewport={{ amount: 0.3 }}
                onClick={() => handleCardClick(index)}
                className="cursor-pointer"
              >
                <Card event={event} index={index} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Card = ({ event, index }) => {
  const IconComponent = event.icon;

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gray-950/50 border-white/[0.2] rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full">
          <img
            src={`/carousel/${index + 1}.png`}
            className=" object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold mt-4 flex justify-center"
        >
          <IconComponent className="h-6 w-6 inline-block mr-2" />
          {event.title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-[#d4ff00]/65"
        >
          {event.description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Events;
