import React, { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        name,
        email,
        message,
      };

      const response = await emailjs.send(
        "service_o74ldfp",
        "template_b4dwymd",
        templateParams,
        "VOqNF9CcpikDzdcQj"
      );

      if (response.status === 200) {
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <section id="contact">
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-3xl font-medium mb-5">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-md w-full bg-gray-100 rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-600">Your Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" placeholder="Email id" className="text-gray-600">Your Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-gray-600">Your Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"
              rows="6"
              required
            ></textarea>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 focus:outline-none"
            >
              Send Message
            </button>
          </div>

          {isSuccess && (
            <p className="text-green-600 mt-4">Thank you for your message! I'll get back to you soon.</p>
          )}

          {isError && (
            <p className="text-red-600 mt-4">Oops! Something went wrong. Please try again later.</p>
          )}
        </form>
      </div>

      <div className="flex flex-col items-center mt-10">
        <h3 className="text-lg font-medium mb-3">Follow me or contact me on:</h3>
          <div className="flex">
            <a
              href="https://www.github.com/markotuya0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl mx-3"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.twitter.com/mark__anthonny"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl mx-3"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mark-otuya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl mx-3"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://wa.me/+2348117644774"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl mx-3"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="mailto:markotuya0@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl mx-3"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
    </section>
  );
}
