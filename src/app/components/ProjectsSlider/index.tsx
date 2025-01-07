import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ProjectCard from './ProjectCard';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  techTags: string[];
  imageSrc: string;
  imageAlt: string;
  redirect?: string;
}

const projects: Project[] = [
  {
    title: "ABE Events Website",
    description: "The project includes the home page, about page, services page, and contact page for ABE Events.",
    tags: ["Reliability", "Efficiency", "Innovation"],
    techTags: ["React", "Node.js", "TypeScript", "Tailwind", "Figma", "Vercel"],
    imageSrc: "https://res.cloudinary.com/dmp8jxp7c/image/upload/v1729953387/wauf4i8hrdvbkexcyvh3.png",
    imageAlt: "ABE Events"
  },
  {
    title: "Credentech System",
    description: "A system where it's possible to manage event credentials. The system has integrations with event turnstiles and credentialing kiosks.",
    tags: ["Security", "Scalability"],
    techTags: ["Next.JS", "Java", "Angular", "TypeScript", "Tailwind", "Vercel", "Docker", "PostgreSQL", "AWS"],
    imageSrc: "https://res.cloudinary.com/dmp8jxp7c/image/upload/v1729954268/mrqbxcb6rer7ktloenig.png",
    imageAlt: "Credentech"
  },
  {
    title: "Paladino & Mello Landing Page",
    description: "Landing page for Paladino & Mello legal consultancy, a reputable law firm. The page is designed to attract potential clients and establish credibility.",
    tags: ["Reliability", "Efficiency", "Innovation"],
    techTags: ["React", "Node.js", "TypeScript", "Tailwind", "Figma", "Vercel"],
    imageSrc: "https://res.cloudinary.com/dmp8jxp7c/image/upload/v1729954114/dbaqyoatumsdszkd1uzg.png",
    imageAlt: "Paladino & Mello"
  }
]

interface ProjectsSliderProps {
  onClick: (project: Project) => void;
}

export default function ProjectsSlider({ 
  onClick 
}: ProjectsSliderProps) {
  const swiperRef = useRef<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [windowWidth, setWindowWidth] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1,
        when: "beforeChildren",
        staggerChildren: 0.15,
        duration: 1.2
      }
    }
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 20,
        mass: 0.7,
        duration: 0.8
      }
    }
  };

  const SliderButton = ({
    onClick,
    className
  }: {onClick: () => void, className: string}) => (
    <button 
      onClick={onClick}
      className={className}
      style={{ 
        color: 'rgb(255, 255, 255)',
        filter: 'drop-shadow(0 0 5px rgba(243, 243, 243, 0.5))',
        transition: 'filter 0.3s ease-in-out'
      }}
      onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(171, 119, 226, 0.8))'}
      onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 5px rgba(171, 119, 226, 0.5))'}
    />
  )

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div 
      ref={ref}
      className="relative select-none"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Swiper
        modules={[Navigation, EffectCoverflow, Autoplay]}
        spaceBetween={160}
        slidesPerView={windowWidth < 700 ? 1 : 2}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 160,
          },
        }}
        className="w-full"
      >
        {projects.map((project, index) => ( 
          <SwiperSlide key={index}>
            <motion.div variants={slideVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                techTags={project.techTags}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                isActive={activeIndex === index}
                onClick={() => {
                  onClick(project);
                }}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between z-10" style={{width: windowWidth < 700 ? '120%' : '110%'}}>
        <SliderButton
          onClick={() => swiperRef.current?.slidePrev()}
          className="swiper-button-prev"
        />
        <SliderButton
          onClick={() => swiperRef.current?.slideNext()}
          className="swiper-button-next"
        />
      </div>
    </motion.div>
  );
}
