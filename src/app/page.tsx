"use client"

import Stars from "./components/Stars";
import BloomBackground from "./components/BloomBackground";
import GradientTitle from "./components/GradientTitle";
import GradientText from "./components/GradientText";
import GradientButton from "./components/GradientButton";
import ViewMoreLink from "./components/ViewMoreLink";
import FadeIn from "./components/FadeIn";
import ParallaxSection from "./components/ParallaxSection";
import Section from './components/Section';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import ServiceCard from './components/ServiceCard';

export default function Home() {
  return (
    <div className="w-full">
      <Stars numOfStars={150} />
      <BloomBackground />
      <main className="min-h-screen flex flex-col justify-center items-center">
        <GradientTitle>
          Discover the true potential<br/>
          of your idea.
        </GradientTitle>
        <FadeIn duration={2.5}>
          <GradientText className="mt-6">
            I&apos;m <span className="text-white font-semibold">Rafael Godoy</span>, turning your ideas into reality with
            <br />
            creativity and collaboration.
          </GradientText>
        </FadeIn>
        <FadeIn duration={1}>
          <GradientButton content="Contact me" />
        </FadeIn>
        <FadeIn duration={1.5}>
          <ViewMoreLink 
            className="mt-12" 
            sectionId="about-section"
          />
        </FadeIn>
      </main>
      <ParallaxSection className="py-48 px-36">
        <Section id="about-section" className="flex justify-between">
          <Heading
            level={2}
          >
            Who said great software <br/>
            has to cost a fortune?
          </Heading>
          <Paragraph className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#A3A3A3] to-[#71717A]">
            Great software doesn&apos;t have to be out of reach. Whether <br/>
            you&apos;ve got a big idea or a small project, it can be brought to <br/>
            life without all the stress. Let&apos;s make it happen, together, with <br/>
            solutions that work for you.
          </Paragraph>
        </Section>
        <Section id="services-section" className="flex flex-col gap-8 mt-80">
          <Heading level={2} className="py-1">
            Here is what I can <br/>
            build for you
          </Heading>
          <div className="flex flex-col xl:flex-row w-full justify-between">
            <ServiceCard
              imageSrc="https://res.cloudinary.com/dmp8jxp7c/image/upload/v1729705272/myzphdujs6q5kiyeyn8m.png"
              imageAlt="Web Application"
              title="Web Applications"
              description="Custom web apps tailored to your business needs, from simple sites to complex platforms."
            />
            <ServiceCard
              imageSrc="https://res.cloudinary.com/dmp8jxp7c/image/upload/v1729705390/qshyfyjkrixykhfflpiq.png"
              imageAlt="Mobile Application"
              title="Mobile Applications"
              description="Native and cross-platform mobile apps for iOS and Android, delivering seamless user experiences."
            />
            <ServiceCard
              imageSrc="https://res.cloudinary.com/dmp8jxp7c/image/upload/v1729705447/s7hswilevglzuipwbtf1.png"
              imageAlt="API Integration"
              title="API Integration"
              description="Seamless integration of third-party APIs and development of custom APIs for your projects."
            />
          </div>
        </Section>
      </ParallaxSection>
    </div>
  );
}
