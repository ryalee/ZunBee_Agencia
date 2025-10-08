/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContatoModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResult("Enviando...");

    // Cria o FormData e adiciona a access_key
    const data = new FormData(e.target);
    data.append("access_key", "e3f0b990-31ba-4ae8-8051-c6c8cbb880f5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const res = await response.json();

      if (res.success) {
        setResult("Mensagem enviada com sucesso! 🎉");
        e.target.reset();
        setFormData({ name: "", email: "", serviceType: "", message: "" });

        // fecha o modal após 1.5s pra o usuário ver a mensagem
        setTimeout(() => onClose(), 1500);
      } else {
        setResult("Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.");
      }
    } catch (error) {
      setResult("Erro de conexão. Tente novamente mais tarde.");
    }

    setIsSending(false);
  };

  const wppNumber = '5574999115799';
  const wppMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os seus serviços.');
  const wppLink = `https://wa.me/${wppNumber}?text=${wppMessage}`;

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 flex items-center justify-center p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className='bg-white p-8 rounded-2xl relative max-w-md w-full z-50 shadow-lg'
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className='absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl'
          >
            &times;
          </button>

          <div className='mb-6 text-center'>
            <h2 className='text-2xl font-bold mb-2'>Solicite seu orçamento</h2>
            <p className='text-gray-600 text-sm'>
              Pronto para tirar seu projeto do papel? <br />
              Vamos construir algo extraordinário juntos!
            </p>
          </div>

          <a
            href={wppLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-[15px] mb-5 w-full flex justify-center items-center gap-2 transition'
          >
            <FontAwesomeIcon icon={['fab', 'whatsapp']} className='text-white text-lg' />
            Falar pelo WhatsApp
          </a>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="hidden" name="subject" value="📩 Novo pedido de orçamento - ZunBee Agency" />
            <input type="hidden" name="from_name" value="ZunBee Agency" />
            <input type="hidden" name="replyto" value="cliente" />
            
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='border rounded-lg px-4 py-2 text-text-alt focus:outline-none focus:ring-2 focus:ring-main focus:border-none'
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='border rounded-lg px-4 py-2 text-text-alt focus:outline-none focus:ring-2 focus:ring-main focus:border-none'
              required
            />

            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className='border rounded-lg px-4 py-2 focus:none text-text-alt focus:outline-none focus:ring-2 focus:ring-main focus:border-none'
              required
            >
              <option value="">Tipo de projeto</option>
              <option value="website">Site Institucional</option>
              <option value="landing">Landing Page</option>
              <option value="app">App Mobile</option>
              <option value="software">Software Personalizado</option>
              <option value="other">Outro</option>
            </select>

            <textarea
              name="message"
              placeholder="Descreva sua ideia ou problema"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className='border rounded-lg px-4 py-2 focus:none text-text-alt focus:outline-none focus:ring-2 focus:ring-main focus:border-none'
            />

            <button
              type="submit"
              disabled={isSending}
              className={`${
                isSending ? 'bg-gray-400' : 'bg-main hover:bg-main/90'
              } text-white font-semibold py-2 px-6 rounded-[15px] transition`}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>

            {result && (
              <span className='text-sm text-center text-gray-600 mt-2'>{result}</span>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ContatoModal;
