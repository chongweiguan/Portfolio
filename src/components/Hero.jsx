import { motion } from 'framer-motion';

import { profile } from '../assets';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#87FADF]'/>
          <div className='w-1 sm:h-80 h-40 teal-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#87FADF]'>Wei Guan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Sophmore Computer Science Student <br className='sm:block hidden'/> from the National University of Singapore <br className='sm:block hidden'/>and I am passionate about software <br className='sm:block hidden'/>development and Artificial Intelligence
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#A6D5CA] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#A6D5CA] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero