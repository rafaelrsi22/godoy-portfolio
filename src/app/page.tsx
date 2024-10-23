"use client"

import { motion } from "framer-motion";

import Stars from "./components/Stars";
import BloomBackground from "./components/BloomBackground";
import GradientTitle from "./components/GradientTitle";
import GradientText from "./components/GradientText";
import GradientButton from "./components/GradientButton";
import ViewMoreLink from "./components/ViewMoreLink";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <div className="h-auto w-full">
      <Stars
        numOfStars={100}
      />
      <BloomBackground />
      <main className="h-screen flex flex-col justify-center items-center">
        <GradientTitle>
          Discover the true potential<br/>
          of your idea.
        </GradientTitle>
        <FadeIn duration={2.5}>
          <GradientText className="mt-6">
            I'm <span className="text-white font-semibold">Rafael Godoy</span>, turning your ideas into reality with
            <br />
            creativity and collaboration.
          </GradientText>
        </FadeIn>
        <FadeIn duration={1}>
          <GradientButton
            content="Contact me"
          />
        </FadeIn>
        <FadeIn duration={1.5}>
          <ViewMoreLink className="mt-12" />
        </FadeIn>
      </main>
    </div>
  );
}
