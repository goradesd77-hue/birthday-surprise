import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Animated Background Circles */}
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
        className="relative z-10 w-[360px] p-8 rounded-3xl border border-pink-400/50 bg-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,0,150,0.3)]"
      >

        {/* Heading */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-white mb-8 tracking-widest"
        >
         ✨ LOGIN ✨
        </motion.h1>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-5 rounded-2xl bg-black/30 border border-pink-300 text-white placeholder:text-gray-300 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-2xl bg-black/30 border border-pink-300 text-white placeholder:text-gray-300 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
        >
          Your space ❤️
        </motion.button>

        {/* Bottom Text */}
        <p className="text-center text-gray-300 mt-6 text-sm">
         ❤️ “Glad you’re here.” ❤️<br/>
          Initializing your experience….✨
        </p>

      </motion.div>
    </div>
  );
}