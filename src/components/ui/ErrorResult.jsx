"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const MotionCard = motion(Card);

const ErrorResult = ({ 
  isVisible = true,
  onClose,
  errorMessage = "errorOccurred"
}) => {
  const { t } = useLanguage();

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const cardShake = {
    initial: { x: 0 },
    animate: {
      x: [0, -10, 10, -10, 0],
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.6,
      },
    },
  };

  if (!isVisible) return null;

  return (
    <MotionCard
      className="max-w-sm mx-auto shadow-lg border border-red-200 dark:border-red-800"
      variants={cardShake}
      initial="initial"
      animate="animate"
    >
      <CardContent className="flex flex-col items-center p-6">
        {/* Error Icon/Animation */}
        <div className="w-32 h-32 mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            <svg
              className="w-24 h-24 text-red-500 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </motion.div>
        </div>

        {/* Animated Heading */}
        <motion.h2
          initial="initial"
          animate="animate"
          variants={textVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-xl font-semibold text-center text-red-600 dark:text-red-400"
        >
          {t(errorMessage || 'errorOccurred')}
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          initial="initial"
          animate="animate"
          variants={textVariants}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="mt-2 text-center text-gray-600 dark:text-gray-400"
        >
          {t('errorDescription')}
        </motion.p>

        {/* Retry Button */}
        {onClose && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            {t('tryAgain')}
          </motion.button>
        )}
      </CardContent>
    </MotionCard>
  );
};

export default ErrorResult;