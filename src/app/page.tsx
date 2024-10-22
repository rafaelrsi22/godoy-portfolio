"use client"

import Stars from "./components/Stars";
import BloomBackground from "./components/BloomBackground";
import GradientTitle from "./components/GradientTitle";
import GradientText from "./components/GradientText";
import GradientButton from "./components/GradientButton";

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
        <GradientText className="mt-6">
          I&apos;m <span className="text-white font-semibold">Rafael Godoy</span>, turning your ideas into reality with<br />
          creativity and collaboration.
        </GradientText>
        <GradientButton
          content="Contact me"
        />
      </main>
    </div>
  );
}
