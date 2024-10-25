import { useRef, useState } from 'react';
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

export default function ProjectsSlider() {
  const swiperRef = useRef<SwiperType>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        color: 'rgb(171, 119, 226)',
        filter: 'drop-shadow(0 0 5px rgba(171, 119, 226, 0.5))',
        transition: 'filter 0.3s ease-in-out'
      }}
      onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(171, 119, 226, 0.8))'}
      onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 5px rgba(171, 119, 226, 0.5))'}
    />
  )

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
        slidesPerView={2}
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
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index}>
            <motion.div variants={slideVariants}>
              <ProjectCard
                title="project vflows"
                description="projeto realizado durante a minha estadia na V-FLOWS"
                tags={["Confiabilidade", "Eficiência", "Inovação"]}
                techTags={["React", "Node.js", "TypeScript"]}
                imageSrc="/path-to-your-image.jpg"
                imageAlt="Project VFlows"
                isActive={activeIndex === index}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between z-10" style={{width: '110%'}}>
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
