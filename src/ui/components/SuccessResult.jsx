"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const SuccessResult = ({ 
  isVisible = true,
  onClose,
  successMessage = "success"
}) => {
  const { t } = useLanguage();

  // Animation variants for reusability
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <Card className="max-w-sm mx-auto shadow-lg border border-green-200 dark:border-green-800">
        <CardContent className="flex flex-col items-center p-6">
          {/* Success Icon/Animation */}
          <div className="w-32 h-32 mb-4">
            <motion.div
              variants={iconVariants}
              initial="initial"
              animate="animate"
              className="w-full h-full flex items-center justify-center"
            >
              <svg
                className="w-24 h-24 text-green-500 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
          </div>

          {/* Animated Heading */}
          <motion.h2
            initial="initial"
            animate="animate"
            variants={textVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-4 text-xl font-semibold text-center text-green-600 dark:text-green-400"
          >
            {t(successMessage || 'success')}
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            initial="initial"
            animate="animate"
            variants={textVariants}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4, // Staggered animation
            }}
            className="mt-2 text-center text-gray-600 dark:text-gray-400"
          >
            {t('successDescription')}
          </motion.p>

          {/* Action Button */}
          {onClose && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              {t('continue')}
            </motion.button>
          )}
        </CardContent>
      </Card>
    </AnimatePresence>
  );
};

export default SuccessResult;