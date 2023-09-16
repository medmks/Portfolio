import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX}  absolute inset-0  top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="bg-[#915eff] w-7 h-7 rounded-full "/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>     
        <div> 
            <h1 className={`${styles.heroHeadText}`}> I'm <span className="text-[#915eff]">Mohamed</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> I'm developping web application <br className="sm:block hidden" /> and cross platform App </p>
        </div>
      </div>   
    <ComputersCanvas/>
    <div className=" absolute xs:bottom-10 bottom-32 w-full h-9 flex justify-center items-center" >
      <a href="#about"  className="text-black"><div className="w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-center p-2 ">
        <motion.div
        animate={{
          y:[0,21,0]
        }}
        transition={
          {
            duration:1.5,
            repeat:Infinity,
            repeatType:"loop"
          }
        }
        className="bg-white w-3 h-3 rounded-full mb-1" />
        </div>
      </a>
    </div>
    </section> 
  )
}

export default Hero
// max-w-7xl mx-auto flex flex-row items-start gap-5