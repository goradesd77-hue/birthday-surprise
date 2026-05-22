import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

    const navigate = useNavigate();

const handleLogin = async () => {

  try {

    const response = await fetch(
      "https://birthday-surprise-for-you.onrender.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      navigate("/home", {
        replace: true,
      });

    } else {

      alert(data.message);

    }

  } catch (err) {

    console.log(err);

    alert("Server Error");

  }

};

  return (

    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

      <img
        src="/28.jpg"
        alt="background"
        className="absolute w-full h-full object-cover brightness-50 contrast-75 opacity-70"
      />

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute w-[450px] h-[450px] bg-pink-500 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute w-[350px] h-[350px] bg-purple-500 rounded-full blur-3xl"
      />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-510 w-[600px] p-25 rounded-3xl border border-pink-400/40 bg-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,150,0.3)]"
      >

        {/* Title */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center font-['Cinzel'] text-white mb-8 tracking-widest"
        >
          ✨ Surprise ✨
        </motion.h1>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-5 rounded-2xl bg-black/30 border font-['Cinzel'] border-pink-300 text-white placeholder:text-gray-300 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-8 rounded-2xl font-['Cinzel'] bg-black/30 border border-pink-300 text-white placeholder:text-gray-300 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        {/* Button */}
        <motion.button
          onClick={handleLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-3 rounded-2xl bg-gradient-to-r font-['Cinzel'] from-pink-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
        >
          Your Space ❤️
        </motion.button>

        {/* Bottom Text */}
        <p className="text-center text-xl text-gray-300 font-['Cinzel'] mt-8 text-sm leading-6">
          ❤️ “Glad you’re here.” ❤️
          <br />
          Loading a little magic for you….✨       
        </p>

      </motion.div>

    </div>
  );
}
