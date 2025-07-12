'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

// Traduções para o header, hero, universities, aboutUs, contact e joinUs
const translations = {
  'pt-BR': {
    // Header
    about: 'Sobre',
    patron: 'Patrono',
    events: 'Eventos',
    sponsors: 'Patrocinadores',
    contact: 'Contato',
    // Hero
    heroSubtitle: 'Descubra seu potencial quântico',
    heroTitle1: 'LACQ Feynman',
    heroTitle2: 'Liga Acadêmica de',
    heroTitle3: 'Computação Quântica',
    heroDescription: 'Quer se destacar no universo quântico? Junte-se à LACQ Feynman!',
    exploreButton: 'Explorar',
    joinButton: 'Junte-se à Liga',
    // Universities
    universitiesTitle: 'Sua universidade aqui',
    universitiesDescription: 'Traga sua instituição para participar da Liga Nacional de Computação Quântica.',
    universitiesButton: 'Junte-se à Liga',
    // AboutUs
    aboutTitle: 'Transformando o futuro da computação',
    aboutDescription: 'Conectamos estudantes, pesquisadores e profissionais para criar, educar e inovar em computação quântica no Brasil.',
    missionTitle: 'Nossa missão',
    missionText1: 'Fundada em 2024 na Universidade Federal do Rio Grande do Sul (UFRGS), a LACQ Feynman nasceu com o propósito de promover a pesquisa e formação na área da computação quântica.',
    missionText2: 'Buscamos conectar talentos emergentes com o futuro das tecnologias quânticas, construindo um ecossistema vibrante de aprendizagem e inovação.',
    membersCount: '+1.200',
    membersLabel: 'Membros em todo o país',
    projectsCount: '+25',
    projectsLabel: 'Projetos de pesquisa ativos',
    workshopsCount: '+18',
    workshopsLabel: 'Workshops realizados',
    opportunitiesTitle: 'Oportunidades para estudantes',
    researchTitle: 'Projetos de Pesquisa',
    researchDescription: 'Trabalhe em algoritmos, aplicações e teorias quânticas em projetos com professores e profissionais.',
    workshopsTitle: 'Workshops e Cursos',
    workshopsDescription: 'Aprenda computação quântica desde os conceitos básicos à programação em plataformas como Qiskit e Cirq.',
    careerTitle: 'Estágios e Carreira',
    careerDescription: 'Conquiste vagas em centros de pesquisa e startups parceiras por meio da nossa rede de conexões.',
    // Contact
    contactTitle: 'Fale com a gente',
    contactDescription: 'Estamos aqui para esclarecer suas dúvidas, ouvir sugestões ou iniciar uma colaboração com a Liga Nacional de Computação Quântica.',
    contactEmailLabel: 'E-mail de contato',
    // ContactForm
    namePlaceholder: 'Nome',
    phonePlaceholder: 'Telefone',
    emailPlaceholder: 'Email',
    subjectPlaceholder: 'Assunto',
    messagePlaceholder: 'Mensagem',
    sendingText: 'Enviando...',
    sendButton: 'Enviar',
    // JoinUs
    joinUsTitle: 'Por que entrar para a LACQ Feynman?',
    joinUsDescription: 'Descubra os benefícios de fazer parte de uma comunidade inovadora, colaborativa e apaixonada por computação quântica.',
    pioneerTitle: 'Faça Parte de um Movimento Pioneiro',
    pioneerText: 'Junte-se a uma comunidade na vanguarda da pesquisa e inovação em computação quântica. Como membro da LACQ Feynman, você fará parte de um grupo dedicado a explorar tecnologias revolucionárias que vão moldar o futuro da computação.',
    researchTitle: 'Acesse Pesquisas de Ponta',
    researchText: 'Participe de projetos avançados e pesquisas em computação quântica, contribuindo para inovações que estão mudando o mundo. A LACQ Feynman oferece uma plataforma para estudantes e profissionais explorarem novas ideias e gerarem impacto real.',
    educationTitle: 'Oportunidades Educacionais',
    educationText: 'Oferecemos workshops, palestras e cursos para equipar você com o conhecimento e as habilidades necessárias para se destacar em computação quântica. Esteja você começando ou já com experiência, nossos programas educacionais vão impulsionar seu avanço.',
    networkingTitle: 'Networking e Colaboração',
    networkingText: 'A LACQ Feynman conecta você a especialistas, profissionais do setor e outros estudantes, promovendo oportunidades de colaboração e troca de conhecimento. Construa relações que vão impulsionar seu crescimento acadêmico e profissional.',
  },
  'en': {
    // Header
    about: 'About',
    patron: 'Patron',
    events: 'Events',
    sponsors: 'Sponsors',
    contact: 'Contact',
    // Hero
    heroSubtitle: 'Discover your quantum potential',
    heroTitle1: 'LACQ Feynman',
    heroTitle2: 'Academic League of',
    heroTitle3: 'Quantum Computing',
    heroDescription: 'Want to stand out in the quantum universe? Join LACQ Feynman!',
    exploreButton: 'Explore',
    joinButton: 'Join the League',
    // Universities
    universitiesTitle: 'Your university here',
    universitiesDescription: 'Bring your institution to participate in the National Quantum Computing League.',
    universitiesButton: 'Join the League',
    // AboutUs
    aboutTitle: 'Transforming the future of computing',
    aboutDescription: 'We connect students, researchers and professionals to create, educate and innovate in quantum computing in Brazil.',
    missionTitle: 'Our mission',
    missionText1: 'Founded in 2024 at the Federal University of Rio Grande do Sul (UFRGS), LACQ Feynman was born with the purpose of promoting research and training in quantum computing.',
    missionText2: 'We seek to connect emerging talents with the future of quantum technologies, building a vibrant ecosystem of learning and innovation.',
    membersCount: '+1,200',
    membersLabel: 'Members across the country',
    projectsCount: '+25',
    projectsLabel: 'Active research projects',
    workshopsCount: '+18',
    workshopsLabel: 'Workshops held',
    opportunitiesTitle: 'Opportunities for students',
    researchTitle: 'Research Projects',
    researchDescription: 'Work on quantum algorithms, applications and theories in projects with professors and professionals.',
    workshopsTitle: 'Workshops and Courses',
    workshopsDescription: 'Learn quantum computing from basic concepts to programming on platforms like Qiskit and Cirq.',
    careerTitle: 'Internships and Career',
    careerDescription: 'Secure positions at research centers and partner startups through our network of connections.',
    // Contact
    contactTitle: 'Get in touch',
    contactDescription: 'We are here to clarify your doubts, hear suggestions or start a collaboration with the National Quantum Computing League.',
    contactEmailLabel: 'Contact email',
    // ContactForm
    namePlaceholder: 'Name',
    phonePlaceholder: 'Phone',
    emailPlaceholder: 'Email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Message',
    sendingText: 'Sending...',
    sendButton: 'Send',
    // JoinUs
    joinUsTitle: 'Why join LACQ Feynman?',
    joinUsDescription: 'Discover the benefits of being part of an innovative, collaborative and passionate community about quantum computing.',
    pioneerTitle: 'Be Part of a Pioneering Movement',
    pioneerText: 'Join a community at the forefront of quantum computing research and innovation. As a member of LACQ Feynman, you will be part of a group dedicated to exploring revolutionary technologies that will shape the future of computing.',
    researchTitle: 'Access Cutting-Edge Research',
    researchText: 'Participate in advanced projects and research in quantum computing, contributing to innovations that are changing the world. LACQ Feynman offers a platform for students and professionals to explore new ideas and generate real impact.',
    educationTitle: 'Educational Opportunities',
    educationText: 'We offer workshops, lectures and courses to equip you with the knowledge and skills needed to excel in quantum computing. Whether you are just starting or already experienced, our educational programs will boost your advancement.',
    networkingTitle: 'Networking and Collaboration',
    networkingText: 'LACQ Feynman connects you to experts, industry professionals and other students, promoting collaboration opportunities and knowledge exchange. Build relationships that will boost your academic and professional growth.',
  },
  'es': {
    // Header
    about: 'Acerca de',
    patron: 'Patrono',
    events: 'Eventos',
    sponsors: 'Patrocinadores',
    contact: 'Contacto',
    // Hero
    heroSubtitle: 'Descubre tu potencial cuántico',
    heroTitle1: 'LACQ Feynman',
    heroTitle2: 'Liga Académica de',
    heroTitle3: 'Computación Cuántica',
    heroDescription: '¿Quieres destacar en el universo cuántico? ¡Únete a LACQ Feynman!',
    exploreButton: 'Explorar',
    joinButton: 'Únete a la Liga',
    // Universities
    universitiesTitle: 'Tu universidad aquí',
    universitiesDescription: 'Trae tu institución para participar en la Liga Nacional de Computación Cuántica.',
    universitiesButton: 'Únete a la Liga',
    // AboutUs
    aboutTitle: 'Transformando el futuro de la computación',
    aboutDescription: 'Conectamos estudiantes, investigadores y profesionales para crear, educar e innovar en computación cuántica en Brasil.',
    missionTitle: 'Nuestra misión',
    missionText1: 'Fundada en 2024 en la Universidad Federal de Rio Grande do Sul (UFRGS), LACQ Feynman nació con el propósito de promover la investigación y formación en computación cuántica.',
    missionText2: 'Buscamos conectar talentos emergentes con el futuro de las tecnologías cuánticas, construyendo un ecosistema vibrante de aprendizaje e innovación.',
    membersCount: '+1.200',
    membersLabel: 'Miembros en todo el país',
    projectsCount: '+25',
    projectsLabel: 'Proyectos de investigación activos',
    workshopsCount: '+18',
    workshopsLabel: 'Talleres realizados',
    opportunitiesTitle: 'Oportunidades para estudiantes',
    researchTitle: 'Proyectos de Investigación',
    researchDescription: 'Trabaja en algoritmos, aplicaciones y teorías cuánticas en proyectos con profesores y profesionales.',
    workshopsTitle: 'Talleres y Cursos',
    workshopsDescription: 'Aprende computación cuántica desde los conceptos básicos hasta la programación en plataformas como Qiskit y Cirq.',
    careerTitle: 'Pasantías y Carrera',
    careerDescription: 'Consigue posiciones en centros de investigación y startups asociadas a través de nuestra red de conexiones.',
    // Contact
    contactTitle: 'Habla con nosotros',
    contactDescription: 'Estamos aquí para aclarar tus dudas, escuchar sugerencias o iniciar una colaboración con la Liga Nacional de Computación Cuántica.',
    contactEmailLabel: 'Email de contacto',
    // ContactForm
    namePlaceholder: 'Nombre',
    phonePlaceholder: 'Teléfono',
    emailPlaceholder: 'Email',
    subjectPlaceholder: 'Asunto',
    messagePlaceholder: 'Mensaje',
    sendingText: 'Enviando...',
    sendButton: 'Enviar',
    // JoinUs
    joinUsTitle: '¿Por qué unirse a LACQ Feynman?',
    joinUsDescription: 'Descubre los beneficios de ser parte de una comunidad innovadora, colaborativa y apasionada por la computación cuántica.',
    pioneerTitle: 'Sé Parte de un Movimiento Pionero',
    pioneerText: 'Únete a una comunidad en la vanguardia de la investigación e innovación en computación cuántica. Como miembro de LACQ Feynman, serás parte de un grupo dedicado a explorar tecnologías revolucionarias que moldearán el futuro de la computación.',
    researchTitle: 'Accede a Investigación de Vanguardia',
    researchText: 'Participa en proyectos avanzados e investigación en computación cuántica, contribuyendo a innovaciones que están cambiando el mundo. LACQ Feynman ofrece una plataforma para estudiantes y profesionales explorar nuevas ideas y generar impacto real.',
    educationTitle: 'Oportunidades Educativas',
    educationText: 'Ofrecemos talleres, conferencias y cursos para equiparte con el conocimiento y las habilidades necesarias para destacar en computación cuántica. Ya sea que estés comenzando o ya tengas experiencia, nuestros programas educativos impulsarán tu avance.',
    networkingTitle: 'Networking y Colaboración',
    networkingText: 'LACQ Feynman te conecta con expertos, profesionales de la industria y otros estudiantes, promoviendo oportunidades de colaboración e intercambio de conocimientos. Construye relaciones que impulsarán tu crecimiento académico y profesional.',
  },
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('pt-BR');

  useEffect(() => {
    // Verifica se há idioma salvo no localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language) => {
    if (translations[language]) {
      setCurrentLanguage(language);
      localStorage.setItem('language', language);
    }
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}; 