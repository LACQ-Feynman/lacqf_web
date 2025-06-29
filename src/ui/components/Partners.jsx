import Image from 'next/image';

const partners = [
  {
    name: 'QubitX',
  },
  {
    name: 'QuantumLab',
  },
  {
    name: 'Entangle',
  },
  {
    name: 'Superpos',
  },
  {
    name: 'QTech',
  },
  {
    name: 'SpinUp',
  },
];

export default function Partners() {
  return (
    <section className="bg-black py-24 px-2 sm:px-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 mb-14 w-full">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={`https://placehold.co/600x400?text=${encodeURIComponent(partner.name)}&w=120&h=48`}
                alt={partner.name}
                width={120}
                height={48}
                className="object-contain grayscale hover:grayscale-0 transition duration-200"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <div className="rounded-full bg-gray-900 px-6 py-3 text-center text-gray-200 text-base shadow-sm w-full max-w-3xl">
            Conheça as empresas e instituições parceiras da LACQ Feynman.
          </div>
        </div>
      </div>
    </section>
  );
} 