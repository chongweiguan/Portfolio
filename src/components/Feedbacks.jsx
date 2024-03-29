import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, linkicon } from '../assets';
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-[#151515] p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className="relative w-full">
      <p className='text-white font-black text-[48px]'>"</p>
      <div className="absolute inset-0 flex justify-end card-img_hover">
        <div
          onClick={() => window.open(link, "_blank")}
          className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img src={linkicon} alt="github" className='w-8/12 object-contain'/>
        </div>
      </div>
    </div>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span>@</span> {name}
          </p>
          <p className='mt-1 text-[white] text-[12px]'>
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[#212121] rounded-[20px]`}>
      <div
        className={`bg-[#191919] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "testimonials");