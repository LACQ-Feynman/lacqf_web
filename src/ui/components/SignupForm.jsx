'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const BottomGradient = () => {
  // Decorative gradient under the submit button on hover.
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  // We wrap label+input in a group to attach the glow via :focus-within.
  return (
    <div className={`flex w-full flex-col space-y-2 input-glow-group ${className || ''}`}>
      {children}
    </div>
  );
};

export function SignupFormDemo() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    // Demo submit; we just fake a small delay.
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field) => (e) => {
    // Keep form data in a single object keyed by field name.
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <motion.div
      className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border)',
        border: '1px solid var(--border)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-xl font-bold mb-2"
        style={{ color: 'var(--text)' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {t('signupFormTitle')}
      </motion.h2>
      <motion.p 
        className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 mb-8"
        style={{ color: 'var(--text-secondary)' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t('signupFormDescription')}
      </motion.p>
      
      <motion.form 
        className="space-y-6" 
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="grid grid-cols-2 gap-4">
          <LabelInputContainer>
            <label
              htmlFor="firstname"
              className="text-sm font-medium"
              style={{ color: 'var(--text)' }}
            >
              {t('firstName')}
            </label>
            <input
              id="firstname"
              placeholder="João"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange('firstName')}
              className="w-full px-3 py-2 rounded-md border transition-all duration-300 focus:ring-2 focus:ring-primary"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--text)'
              }}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <label
              htmlFor="lastname"
              className="text-sm font-medium"
              style={{ color: 'var(--text)' }}
            >
              {t('lastName')}
            </label>
            <input
              id="lastname"
              placeholder="Silva"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange('lastName')}
              className="w-full px-3 py-2 rounded-md border transition-all duration-300 focus:ring-2 focus:ring-primary"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--text)'
              }}
              required
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <label
            htmlFor="email"
            className="text-sm font-medium"
            style={{ color: 'var(--text)' }}
          >
            {t('email')}
          </label>
          <input
            id="email"
            placeholder="joao@exemplo.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            className="w-full px-3 py-2 rounded-md border transition-all duration-300 focus:ring-2 focus:ring-primary"
            style={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <label
            htmlFor="password"
            className="text-sm font-medium"
            style={{ color: 'var(--text)' }}
          >
            {t('password')}
          </label>
          <input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleInputChange('password')}
            className="w-full px-3 py-2 rounded-md border transition-all duration-300 focus:ring-2 focus:ring-primary"
            style={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium"
            style={{ color: 'var(--text)' }}
          >
            {t('confirmPassword')}
          </label>
          <input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            className="w-full px-3 py-2 rounded-md border transition-all duration-300 focus:ring-2 focus:ring-primary"
            style={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--border)',
              color: 'var(--text)'
            }}
            required
          />
        </LabelInputContainer>

        <motion.button
          className="group/btn relative block h-10 w-full rounded-md font-medium text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2"
          style={{
            background: 'linear-gradient(to right, var(--primary), var(--primary-dark))',
            boxShadow: '0px 1px 0px 0px rgba(255, 255, 255, 0.1) inset, 0px -1px 0px 0px rgba(255, 255, 255, 0.1) inset',
            '--tw-ring-color': 'var(--primary)'
          }}
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="flex items-center justify-center gap-2">
            {isSubmitting ? (
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            ) : (
              t('signUpButton')
            )}
          </span>
          <BottomGradient />
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default SignupFormDemo;
