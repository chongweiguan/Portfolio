import { motion } from 'framer-motion';

import { profile } from '../assets';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { socialmedia } from '../constants';

const SocialMediaIcon = ({
  id,
  link,
  icon
}) => { return (
    <div className="inset-0 flex">
      <div
        onClick={() => window.open(link, "_blank")}
        className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
      >
        <img src={icon} alt="github" className='w-10/12 object-contain'/>
      </div>
    </div>
  )
};

const Hero = () => {
  return (
    <section className="relative w-full h-[800px] mx-auto">
      <div className='w-full flex justify-between'>
        <div className={"sm:py-20 py-6 px-10"}>
          <h1 className={`${styles.heroSubText} text-white font-semibold py-2`}>Hello, I am</h1>
          <h1 className={`${styles.heroHeadText} text-[#87FADF] mt-2 py-3`}>Wei Guan</h1>
          <p className={`text-white text-[23px] mt-2`}>
            I am a Sophmore Computer Science Student from the National University of Singapore and I am passionate about software development and Artificial Intelligence
          </p>
          <div className="mt-5 flex flex-wrap gap-7">
            {socialmedia.map((socialmedia, index) => (
              <SocialMediaIcon key={socialmedia.id} index={index} {...socialmedia} />
            ))}
          </div>
        </div>
        <img 
          src={profile}
          //className="h-[905px] px-10 py-10 hidden"
          className="hidden lg:flex h-[905px] px-10 py-10"
        />
      </div>
    </section>
    /*<section className='relative w-full h-screen mx-auto'>
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
    </section>*/
  )
}

export default SectionWrapper(Hero, "home");