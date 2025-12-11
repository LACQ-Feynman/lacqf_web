import React from "react";
import {
  Instagram,
  Linkedin,
  Github,
  Rss,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="text-center md:text-left">
          <h4
            className="text-lg font-semibold font-title"
            style={{ color: 'var(--text-primary)' }}
          >
            LACQ Feynman
          </h4>
          <p
            className="text-sm mt-1"
            style={{ color: 'var(--text-muted)' }}
          >
            Liga Acadêmica de Computação Quântica
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/company/seu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/seu-instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link transition"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/seu-github"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link transition"
            aria-label="Feed RSS"
          >
            <Rss className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div
        className="mt-10 text-center text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        © {new Date().getFullYear()} LACQ Feynman. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
