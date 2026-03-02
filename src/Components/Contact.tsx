import { section } from "framer-motion/client";
import { useState } from "react";
import {motion} from "framer-motion";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

export default function Contact(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const phoneNumber = "5511953334868";

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ){
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const text = `Olá, meu nome é ${form.name}
        Email: ${form.email}
        ${form.message}
        `;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

         window.open(url, "_blank");
    }

    return (
        <section id="contato" className="py-24 px-6 bg-[#05070d]">
               <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
         <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm tracking-widest text-cyan-400 uppercase">
            Contato
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Vamos <span className="text-cyan-400">Conversar?</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-md">
            Estou sempre aberto a novas oportunidades,
            projetos e colaborações.
          </p>

          {/* Social Links */}
          <div className="mt-10 flex gap-6">
            <a
              href="https://github.com/Erick-Badaro"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/erick-badaro/"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="https://instagram.com/badaro_erick"
              target="_blank"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </motion.div>

        {/* FORM */}
         <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Nome
              </label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={5}
                required
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-semibold 
              bg-gradient-to-r from-cyan-500 to-pink-500 
              hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              Enviar Mensagem
            </button>
          </div>
        </motion.form>
      </div>
    </section> 
    )


}
