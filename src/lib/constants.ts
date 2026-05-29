export const SITE = {
  name: "Art Colors",
  fullName: "Art Colors di Steven Magoni",
  tagline: "Imbianchini a Bergamo e Provincia - Esperti in Pitture di Interni ed Esterni",
  description: "Ci specializziamo in imbiancature e tinteggiature per le case di Bergamo e provincia. Oltre 23 anni di esperienza.",
  phone: "346 687 1204",
  phoneLink: "tel:+393466871204",
  email: "info@artcolorsbergamo.com",
  emailLink: "mailto:info@artcolorsbergamo.com",
  whatsapp: "https://wa.me/393466871204",
  address: "Via Poggio Pineta, 4 - Selvino BG",
  mapsUrl: "https://maps.app.goo.gl/6WeyWCj8WeNKBeay7",
  piva: "04202890168",
  hours: {
    weekdays: "Lunedì - Venerdì: 8:00 - 18:30",
    saturday: "Sabato: 8:00 - 12:30",
    sunday: "Domenica: Chiuso",
  },
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export const STATS = [
  { number: "23+", label: "Anni di esperienza" },
  { number: "2000+", label: "Progetti completati" },
  { number: "5/5", label: "Stelle su Google" },
  { number: "100%", label: "Clienti soddisfatti" },
] as const;

export const SERVICES = [
  {
    slug: "pittura-interni",
    title: "Pittura Interni",
    shortTitle: "Interni",
    description: "Rinnoviamo gli spazi interni della tua casa con finiture impeccabili e garantendo un'esperienza fluida, senza problemi e risultati che riflettono il tuo stile.",
    longDescription: "Il nostro team di esperti imbianchini trasforma gli spazi interni della tua casa con finiture di alta qualità. Utilizziamo vernici Sikkens, tra le più resistenti e durature sul mercato, per garantire risultati che durano nel tempo.",
    image: "https://www.artcolorsbergamo.com/assets/images/image08.jpg",
    icon: "Paintbrush",
    features: ["Preparazione superfici", "Finiture personalizzate", "Vernici lavabili", "Colori su misura"],
  },
  {
    slug: "pittura-esterni",
    title: "Pittura Esterni",
    shortTitle: "Esterni",
    description: "Aumenta il fascino esterno della tua casa con vernici resistenti e durature per ogni tipo di superficie.",
    longDescription: "Proteggi e valorizza l'esterno della tua casa con i nostri trattamenti specializzati. Utilizziamo vernici ad alte prestazioni resistenti a intemperie e agenti atmosferici, con garanzia di 5 anni.",
    image: "https://www.artcolorsbergamo.com/assets/images/image12.jpg",
    icon: "Home",
    features: ["Vernici resistenti", "Garanzia 5 anni", "Trattamento intemperie", "Finiture premium"],
  },
  {
    slug: "soluzioni-anti-muffa",
    title: "Soluzioni Anti-Muffa",
    shortTitle: "Anti-Muffa",
    description: "Art Colors rimuove la muffa e dipinge le pareti con vernici Anti-Muffa certificate mantenendo la tua casa fresca e sicura.",
    longDescription: "Offriamo soluzioni certificate per la rimozione e prevenzione della muffa. I nostri trattamenti garantiscono pareti pulite e salubri, con prodotti testati e certificati.",
    image: "https://www.artcolorsbergamo.com/assets/images/image02.jpg",
    icon: "Shield",
    features: ["Rimozione muffa", "Vernici certificate", "Prevenzione", "Trattamenti igienizzanti"],
  },
  {
    slug: "cartongesso-stucco",
    title: "Riparazione Cartongesso & Stucco",
    shortTitle: "Cartongesso",
    description: "Il team di Art Colors si occuperà di stuccare, levigare e preparare la superficie per ottenere un risultato perfetto da dipingere.",
    longDescription: "Riparazione e preparazione professionale di superfici in cartongesso e stucco. Garantiamo superfici perfettamente lisce e pronte per la pittura.",
    image: "https://www.artcolorsbergamo.com/assets/images/image4.jpg",
    icon: "Wrench",
    features: ["Stuccatura professionale", "Levigatura", "Preparazione superfici", "Riparazione danni"],
  },
  {
    slug: "restauro-imposte",
    title: "Restauro Imposte, Persiane e Staccionate",
    shortTitle: "Restauro",
    description: "Riportiamo queste superfici al loro splendore originale, utilizzando verniciature resistenti e di alta qualità.",
    longDescription: "Restauro completo di infissi, persiane e strutture in legno. Trattamenti specializzati per riportare queste superfici al loro splendore originale.",
    image: "https://www.artcolorsbergamo.com/assets/images/image6.jpg",
    icon: "DoorOpen",
    features: ["Restauro legno", "Verniciatura resistente", "Trattamento protettivo", "Finiture decorative"],
  },
  {
    slug: "trattamento-ferro",
    title: "Trattamento Barriere e Parapetti",
    shortTitle: "Trattamento Ferro",
    description: "Proteggi e valorizza le strutture in ferro e zinco con trattamenti specializzati contro ruggine e intemperie.",
    longDescription: "Trattamenti specializzati per strutture metalliche. Protezione contro ruggine e intemperie con vernici ad alte prestazioni.",
    image: "https://www.artcolorsbergamo.com/assets/images/image7.jpg",
    icon: "ShieldCheck",
    features: ["Anti-ruggine", "Trattamento zincato", "Verniciatura metallo", "Protezione duratura"],
  },
  {
    slug: "consulenza-colori",
    title: "Consulenza Colori e Design",
    shortTitle: "Consulenza",
    description: "Ti guideremo attraverso palette personalizzate e idee su misura per trovare i colori perfetti per la tua casa.",
    longDescription: "Servizio di consulenza personalizzata per trovare i colori e gli stili perfetti per ogni ambiente. Ti accompagniamo nella scelta con competenza e creatività.",
    image: "https://www.artcolorsbergamo.com/assets/images/image7.jpg",
    icon: "Palette",
    features: ["Palette personalizzata", "Consulenza gratuita", "Idee su misura", "Visualizzazione colori"],
  },
] as const;

export const WHY_US = [
  {
    title: "Non paghi mai tutto prima",
    description: "Con noi paghi il lavoro completo solo quando è finito e sei soddisfatto dei risultati.",
    icon: "CreditCard",
  },
  {
    title: "Preventivo gratuito",
    description: "Offriamo preventivi gratuiti, stima online e sopralluogo per la proposta finale, senza alcun costo.",
    icon: "FileText",
  },
  {
    title: "Prodotti di alta qualità",
    description: "Utilizziamo la Sikkens, una delle vernici per esterni più resistenti sul mercato contro agenti atmosferici.",
    icon: "Award",
  },
  {
    title: "Recensioni a 5 stelle",
    description: "Diamo valore al tuo tempo e garantiamo che i nostri clienti siano soddisfatti del risultato finale.",
    icon: "Star",
  },
  {
    title: "Garanzia 5 anni",
    description: "Ti garantiamo 5 anni di verniciatura esterna senza mai doverla rifare.",
    icon: "ShieldCheck",
  },
  {
    title: "Pitture certificate Anti-Muffa",
    description: "Proteggi la tua casa con soluzioni certificate che prevengono la formazione di muffa.",
    icon: "Heart",
  },
] as const;

export const TEAM = [
  {
    name: "Steven Magoni",
    role: "Proprietario e Fondatore",
    image: "https://www.artcolorsbergamo.com/assets/images/image9.jpg",
    description: "Con oltre 23 anni di esperienza, Steven guida il team con passione e dedizione.",
  },
  {
    name: "Lorenzo Magoni",
    role: "Collaboratore",
    image: "https://www.artcolorsbergamo.com/assets/images/image8.jpg",
    description: "Esperto in finiture decorative e tecniche speciali di pittura.",
  },
] as const;

export const PORTFOLIO_IMAGES = [
  { src: "https://www.artcolorsbergamo.com/assets/images/image06.jpg", alt: "Verniciatura interni - motivo a triangoli", category: "interni" },
  { src: "https://www.artcolorsbergamo.com/assets/images/image10.jpg", alt: "Camera matrimoniale lavabile vellutato verde turchese", category: "interni" },
  { src: "https://www.artcolorsbergamo.com/assets/images/image11.jpg", alt: "Tinteggiatura interni grigio perla e bianco", category: "interni" },
  { src: "https://www.artcolorsbergamo.com/assets/images/image13.jpg", alt: "Velatura di sala con vernice Sikkens", category: "interni" },
  { src: "https://www.artcolorsbergamo.com/assets/images/image14.jpg", alt: "Motivo triangoli tonalità di giallo", category: "interni" },
  { src: "https://www.artcolorsbergamo.com/assets/images/image15.jpg", alt: "Tinteggiatura salotto con velatura Sikkens", category: "interni" },
  { src: "https://www.artcolorsbergamo.com/assets/images/image18.jpg", alt: "Verniciatura muretto esterno grigio", category: "esterni" },
  { src: "https://www.artcolorsbergamo.com/assets/images/image20.jpg", alt: "Riparazione crepe e pittura lavabile al quarzo", category: "esterni" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marco Bianchi",
    location: "Bergamo",
    rating: 5,
    text: "Servizio eccezionale! Hanno rinnovato completamente la nostra casa. Professionali, puntuali e con un risultato sopra le aspettative. Consigliatissimi!",
    service: "Pittura Interni",
  },
  {
    name: "Laura Rossi",
    location: "Selvino",
    rating: 5,
    text: "Abbiamo fatto dipingere l'esterno della villa. Il lavoro è perfetto e la garanzia di 5 anni ci ha dato grande sicurezza. Ottimo rapporto qualità-prezzo.",
    service: "Pittura Esterni",
  },
  {
    name: "Andrea Colombo",
    location: "Alzano Lombardo",
    rating: 5,
    text: "Problema muffa risolto in modo definitivo. Il team è stato professionale e i prodotti utilizzati sono di altissima qualità. Casа come nuova!",
    service: "Soluzioni Anti-Muffa",
  },
  {
    name: "Giulia Ferrari",
    location: "Nembro",
    rating: 5,
    text: "Consulenza colori fantastica. Hanno saputo interpretare perfettamente i nostri gusti e il risultato è magnifico. Esperienza unica!",
    service: "Consulenza Colori",
  },
  {
    name: "Roberto Martinelli",
    location: "Capanna",
    rating: 5,
    text: "Restauro persiane eccezionale. Hanno riportato le vecchie persiane al loro splendore originale. Lavoro meticoloso e curato in ogni dettaglio.",
    service: "Restauro Imposte",
  },
] as const;

export const TRUST_BADGES = [
  { label: "Garanzia 5 Anni", icon: "ShieldCheck" },
  { label: "Preventivo Gratuito", icon: "FileText" },
  { label: "Vernici Sikkens", icon: "Award" },
  { label: "23+ Anni Esperienza", icon: "Clock" },
] as const;
