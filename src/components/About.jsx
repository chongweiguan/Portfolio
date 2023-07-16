import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5*index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#024B4B] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img 
          src={icon} 
          alt='web-development' 
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        I am a skilled software developer who possess a diverse skill set with a focus on JavaScript, Java, and Python programming languages. I am proficient in working with frameworks like React.js, Node.js, Express.js among others. My passion lies in leveraging technology to solve complex problems and create innovative solutions that make a positive impact. In addition to my professional skills, I am also a national track and field athlete. I have proudly represented Singapore in multiple international competitions, which has honed my skills in teamwork, discipline, and leadership. I am also an entrepreneur and have a running business
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")