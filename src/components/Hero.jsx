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
        <div className={"sm:py-16 py-6 px-10"}>
          <h1 className={`${styles.heroSubText} text-white font-semibold py-2`}>Hello, I am</h1>
          <h1 className={`${styles.heroHeadText} text-[white] mt-2 py-3`}>Wei Guan</h1>
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
  )
}

export default SectionWrapper(Hero, "home");