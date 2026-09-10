import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const templateParams = { name, email, message };

      const response = await emailjs.send(
        "service_x4owk7q",
        "template_ceejems",
        templateParams,
        "GoygN0xGfGhvIxjY0"
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 pb-32">
      <div className="container px-6 mx-auto max-w-xl">
        <div className="text-center mb-10">
          <span className="section-label">Let's Talk</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto mt-4">
            Have a project in mind or need a full-stack developer? Send me a
            message and I'll get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-surface p-6 sm:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              placeholder="Name..."
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-2.5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-2.5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="Message..."
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 px-4 py-2.5 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors resize-none"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="cta-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending…" : "Send Message"}
          </button>

          {isSuccess && (
            <p className="text-emerald-400 text-sm text-center">
              Thank you for your message! I'll get back to you soon.
            </p>
          )}
          {isError && (
            <p className="text-red-400 text-sm text-center">
              Oops! Something went wrong. Please try again later.
            </p>
          )}
        </form>

        <div className="flex flex-col items-center mt-12">
          <p className="text-sm text-slate-500 mb-4">You can also find me at</p>
          <div className="flex gap-5">
            <a
              href="https://www.github.com/Raulanthropos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-2xl text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ioannis-psychias/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-2xl text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:ipsichias@gmail.com"
              aria-label="Send email"
              className="text-2xl text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
