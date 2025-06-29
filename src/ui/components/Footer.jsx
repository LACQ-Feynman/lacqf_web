import React from "react";
import {
  Instagram,
  Linkedin,
  Github,
  Rss,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 dark:bg-black text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white font-title">LACQ Feynman</h4>
          <p className="text-sm text-gray-400 mt-1">
            Liga Acadêmica de Computação Quântica
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/company/seu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/seu-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/seu-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Feed RSS"
          >
            <Rss className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LACQ Feynman. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
