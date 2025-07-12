'use client';

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactSchema, initialValues } from '@/schemas/contactSchema';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();
  
  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);
      console.log(values);
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-2xl mx-auto p-4 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Field
                type="text"
                name="name"
                placeholder={t('namePlaceholder')}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="flex-1">
              <Field
                type="text"
                name="phone"
                placeholder={t('phonePlaceholder')}
                className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>
          <div>
            <Field
              type="email"
              name="email"
              placeholder={t('emailPlaceholder')}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field
              type="text"
              name="subject"
              placeholder={t('subjectPlaceholder')}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <Field
              as="textarea"
              name="message"
              placeholder={t('messagePlaceholder')}
              rows={5}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? t('sendingText') : t('sendButton')}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;