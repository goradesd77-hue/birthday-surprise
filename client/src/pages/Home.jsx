import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  useEffect(() => {

    const isLoggedIn =
      localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {

      navigate("/", {
        replace: true,
      });

    }

  }, []);

  const openSurprise = () => {

    navigate("/surprise");

  };

  return (

    <div className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 contrast-75 opacity-80"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        
        <h1 className="text-6xl md:text-7xl font-bold font-['Cinzel'] text-pink-400 animate-pulse drop-shadow-lg">
          ❤️ Happy Birthday Sauuu❤️
        </h1>
       
          <p className="text-white text-xl font-['Cinzel'] mt-6 max-w-xl">
          Wish You A Many Many Happy Returns Of The Day Sauuu........
        </p>

           <p className="text-white text-xl mt-6 font-['Cinzel'] max-w-xl">
          Every memory with you feels magical ✨
        </p>

        <button
          onClick={openSurprise}
          className="mt-12 px-10 py-4 text-xl font-bold text-sky-300 border-2 font-['Cinzel'] border-sky-500 rounded-2xl
          shadow-[0_0_15px_#38bdf8,0_0_40px_#38bdf8]
          hover:shadow-[0_0_25px_#38bdf8,0_0_60px_#38bdf8]
          hover:scale-110 transition-all duration-300
          animate-pulse z-10"
        >
          Open Surprise 🎁
        </button>

      </div>

    </div>

  );

}