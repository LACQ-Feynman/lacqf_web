import ContactForm from '@/ui/forms/ContactForm';

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Fale com a gente
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Estamos aqui para esclarecer suas dúvidas, ouvir sugestões ou iniciar uma colaboração com a Liga Nacional de Computação Quântica.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 shadow-xl rounded-2xl">
        <ContactForm />
      </div>
    </section>
  );
}