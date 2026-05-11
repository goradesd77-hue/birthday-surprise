import { useNavigate } from "react-router-dom";

export default function Surprise() {

  const navigate = useNavigate();

  const handleReady = () => {
       
     navigate("/reveal");

  };

  return (

    <div className="h-screen bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

         {/* Background Image */}
         <img
        src="/Treasure.jpg"
        alt="background"
        className="absolute w-full h-full object-cover brightness-50 contrast-75 opacity-70"
      />

      {/* Background glow effect */}
      <div className="absolute w-[00px] h-[00px] bg-pink-500 blur-3xl opacity-1 rounded-full animate-pulse"></div>

      {/* Title */}
      <h1 className="text-6xl md:text-7xl text-pink-500 font-bold font-['Cinzel'] animate-bounce z-10">
          🎉  Surprise 🎉
      </h1>

      <p className="text-white text-2xl mt-8 max-w-2xl font-['Cinzel'] leading-relaxed z-10">
        ✨ Something special is waiting for you ✨
      </p>

      {/* NEON READY BUTTON */}
      <button
        onClick={handleReady}
        className="mt-12 px-10 py-4 text-xl font-bold font-['Cinzel'] text-pink-300 border-2  border-pink-500 rounded-2xl
        shadow-[0_0_20px_#ff00aa] hover:shadow-[0_0_40px_#ff00aa]
        hover:scale-110 transition-all duration-300
        animate-pulse z-10"
      >
        READY ⚡
      </button>

    </div>

  );

}