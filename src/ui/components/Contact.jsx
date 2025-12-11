'use client';

import SignupForm from './SignupForm';
import { UserPlus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact({ id }) {
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className="relative py-20 px-4 sm:px-6 lg:px-8 section-gradient-bg"
    >
      {/* Quantum-themed background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left: Title, description and call-to-action */}
          <div className="flex flex-col justify-center gap-8">
            <h2
              className="text-4xl md:text-5xl font-title font-bold flex items-center gap-4"
              style={{ color: 'var(--text-primary)' }}
            >
              <div
                className="p-3 rounded-xl"
                style={{ backgroundColor: 'var(--primary)' + '20' }}
              >
                <UserPlus
                  className="w-8 h-8"
                  style={{ color: 'var(--primary)' }}
                />
              </div>
              {t('signupFormTitle')}
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('signupFormDescription')}
            </p>
            <div className="bg-gradient-to-r from-transparent via-primary/10 to-transparent p-4 rounded-lg border border-primary/20">
              <p
                className="text-sm font-medium"
                style={{ color: 'var(--text-muted)' }}
              >
                Junte-se à nossa comunidade de desenvolvedores e pesquisadores em computação quântica. Acesso exclusivo a eventos, recursos educacionais e networking profissional.
              </p>
            </div>
          </div>

          {/* Right: Signup form container */}
          <div className="relative">
            {/* Efeito de glow sutil no container */}
            <div
              className="relative backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8 z-10"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                background: 'var(--bg-secondary)' + '80',
                border: '1px solid var(--border-light)',
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.1)'
              }}
            >
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}