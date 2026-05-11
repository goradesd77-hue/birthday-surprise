import { motion } from "framer-motion";
import { useEffect } from "react";


export default function Reveal() {

  return (

    <div className="min-h-screen bg-black text-white overflow-x-hidden">

        
        {/* Background */}
        <img
          src="/bg.jpg"
          alt="bg"
          className="absolute w-full h-full object-cover opacity-40"
        />

      {/* HERO SECTION */}
      <div className="relative h-screen flex items-center justify-center px-6">

        {/* Background */}
        <img
          src="/bg.jpg"
          alt="bg"
          className="absolute w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        {/* Main Text */}
        <div className="relative z-20 max-w-6x2 text-center">

          <h1 className="text-6xl md:text-7xl font-['Cinzel'] font-black text-pink-400 mb-10 animate-pulse">
            For You ✨
          </h1>

          <h3 className="text-4xl md:text-4xl font-black text-sky-400 mb-5 font-['Cinzel'] animate-pulse">
            "Whishing You A Happyest Birthday My Pookieeee "
            </h3>
            <p className="text-xl md:text-2xl leading-relaxed font-light tracking-wide font-['Cinzel'] text-pink-100 text-center break-words" >
                You are inspire me with your courage,your guts, and the way you keep growing through everything. I admire how honestly you share your happiness,your little moments, your random thoughts,and even the smallest things from your day.
                There’s something beautiful about the way you let me into your world so naturally. Your energy, your strength, and your heart make every conversation feel special. 
                You are my lifelong friend and confidant. From childhood memories to grown-up adventures, you’ve always been by my side. You are not just my sister, but also my secret-keeper, my safe place, and my biggest supporter through everything. 
                I truly admire your courage, your strength, and the beautiful way you keep growing every single day. The way you share your happiness, your little moments, random stories, and small things with me it makes my world feel warmer and closer to yours.
                You truly are one of life’s greatest gifts, and I feel so lucky and grateful to have you in my life. As long as I live, I promise I’ll always hold your hand through every circumstance through the good days, the hard days, the chaos, and the peace. No matter what happens, I’ll always stand by your side, just like Guard. 
                I can never fully explain in words what you mean to me, because you are far more precious and special than words could ever describe. Thank you for being my comfort, my strength, my soulmate and one of the most beautiful part of my life.
                Love you more than words can ever explain. im so glad you’re mine and You are one of the most special blessings in my life..... Wishing you a day as wonderful as you are. May this year bring you endless love, happiness, success, beautiful memories, and everything your heart truly deserves.
                <br />You’re the best, always. 🌸 <br />
                “Some people become memories. But you became my favorite feeling. ✨ Every laugh, every moment, every second with you. is a story I never want to end.”
            </p>
     
        </div>

      </div>

      {/* PREMIUM 3D GALLERY */}
      <section className="relative h-[100vh] bg-black overflow-hidden">

        <img
          src="/bg.jpg"
          alt="bg"
          className="absolute w-full h-full object-cover opacity-15"
        />

        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 500 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{  duration: 10,  ease: [0.22, 1, 0.36, 1], }}
            className="absolute left-16 top-16 z-50 text-6xl md:text-8xl font-black leading-none tracking-tight"
          >
            SEARCH <br /> THE TREASURE  
          </motion.h1>

          {/* MOVING ROW */}
          <motion.div
            initial={{ opacity: 0, y: 700 }} 
            whileInView={{ opacity: 15, y: 0 }}
            transition={{
              duration: 9,
              ease: "linear",
            }}
            className="flex gap-30 flex justify-center items-center mx-auto pl-[2px]"
          >

            {/* CARD 1 */}
            <div className="group relative shrink-0 [perspective:2000px]">

              <motion.div
                whileHover={{
                  rotateY: 180,
                  y: -50,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="relative w-[320px] h-[520px] preserve-3d"
              >

                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden">

                  <img
                    src="/1.jpg"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[10px]
                      shadow-[0_30px_100px_rgba(255,255,255,0.08)]
                      group-hover:shadow-[0_40px_140px_rgba(255,0,150,0.35)]
                      transition-all
                      duration-700
                    "
                  />

                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    transform: "rotateY(180deg)",
                  }}
                >

                  <img
                    src="/2.jpg"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[10px]
                      shadow-[0_40px_140px_rgba(0,255,255,0.2)]
                    "
                  />

                </div>

              </motion.div>

            </div>

            {/* CARD 2 */}
            <div className="group relative shrink-0 mt-20 [perspective:2000px]">

              <motion.div
                whileHover={{
                  rotateY: 180,
                  y: -120,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="relative w-[340px] h-[560px] preserve-3d"
              >

                <div className="absolute inset-0 backface-hidden">

                  <img
                    src="/3.jpg"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[10px]
                      shadow-[0_30px_100px_rgba(255,255,255,0.08)]
                      group-hover:shadow-[0_40px_140px_rgba(255,0,150,0.35)]
                      transition-all
                      duration-700
                    "
                  />

                </div>

                <div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    transform: "rotateY(180deg)",
                  }}
                >

                  <img
                    src="/2.jpg"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[10px]
                      shadow-[0_40px_140px_rgba(0,255,255,0.2)]
                    "
                  />

                </div>

              </motion.div>

            </div>

            {/* CARD 3 */}
            <div className="group relative shrink-0 -mt-10 [perspective:2000px]">

              <motion.div
                whileHover={{
                  rotateY: 180,
                  y: -50  ,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="relative w-[360px] h-[560px] preserve-3d"
              >

                <div className="absolute inset-0 backface-hidden">

                  <img
                    src="/2.jpg"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[10px]
                      shadow-[0_30px_100px_rgba(255,255,255,0.08)]
                      group-hover:shadow-[0_40px_140px_rgba(255,0,150,0.35)]
                      transition-all
                      duration-700
                    "
                  />

                </div>

                <div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    transform: "rotateY(180deg)",
                  }}
                >

                  <img
                    src="/4.jpg"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[10px]
                      shadow-[0_40px_140px_rgba(0,255,255,0.2)]
                    "
                  />

                </div>

              </motion.div>

            </div>

            {/* CARD 4 */}
            <div className="group relative shrink-0 -mt -40 [perspective:2000px]">

              <motion.div
                whileHover={{
                  rotateY: 180,
                  y: -120,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="relative w-[360px] h-[560px] preserve-3d"
              >

                <div className="absolute inset-0 backface-hidden">

                  <img
                    src="/3.jpg"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[10px]
                      shadow-[0_30px_100px_rgba(255,255,255,0.08)]
                      group-hover:shadow-[0_40px_140px_rgba(255,0,150,0.35)]
                      transition-all
                      duration-700
                    "
                  />

                </div>

                <div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    transform: "rotateY(180deg)",
                  }}
                >

                  <img
                    src="/2.jpg"
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-[10px]
                      shadow-[0_40px_140px_rgba(0,255,255,0.2)]
                    "
                  />

                </div>

                </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

    </div>

  );

}