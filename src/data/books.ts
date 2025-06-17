import { Book } from "@/types/book";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "Veyipadagalu",
    titleTelugu: "వేయిపదగలు",
    author: "Viswanatha Satyanarayana",
    authorTelugu: "విశ్వనాథ సత్యనారాయణ",
    publisher: "Vishwakarma Publications",
    publisherTelugu: "విశ్వకర్మ పబ్లికేషన్స్",
    isbn: "978-81-234-5678-9",
    price: 299,
    originalPrice: 399,
    discount: 25,
    description:
      "A classic Telugu novel that explores the depths of human nature and social dynamics. Winner of the Jnanpith Award.",
    descriptionTelugu:
      "మానవ స్వభావం మరియు సామాజిక గతిశీలతల లోతులను అన్వేషించే ఒ�� అద్భుతమైన తెలుగు నవల. జ్ఞానపీఠ పురస్కార విజేత రచన.",
    image: "/api/placeholder/300/400",
    images: [
      "/api/placeholder/300/400",
      "/api/placeholder/300/401",
      "/api/placeholder/300/402",
    ],
    category: "Literature",
    categoryTelugu: "సాహిత్యం",
    pages: 456,
    language: "Telugu",
    dimensions: { length: 22, width: 14, height: 3 },
    weight: 580,
    publicationYear: 1952,
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    stockCount: 45,
    tags: ["Classic", "Jnanpith", "Literature"],
    seoTitle: "Veyipadagalu - Classic Telugu Novel by Viswanatha Satyanarayana",
    seoDescription:
      "Buy Veyipadagalu, the acclaimed Telugu novel by Viswanatha Satyanarayana. Winner of Jnanpith Award. Free delivery and aesthetic packaging.",
    featured: true,
    bestseller: true,
    newArrival: false,
  },
  {
    id: "2",
    title: "Maa Telugu Talli",
    titleTelugu: "మా తెలుగుతల్లి",
    author: "Sankarambadi Sundarachari",
    authorTelugu: "శంకరంబాడి సుందరాచారి",
    publisher: "Telugu Bharathi",
    publisherTelugu: "తెలుగు భారతి",
    isbn: "978-81-234-5679-6",
    price: 199,
    originalPrice: 249,
    discount: 20,
    description:
      "A beautiful collection of poems celebrating Telugu language and culture. Perfect for students and poetry lovers.",
    descriptionTelugu:
      "తెలుగు భాష మరియు సంస్కృతిని కీర్తించే అందమైన కవితల సంకలనం. విద్యార్థులు మరియు కవిత్వ ప్రేమికులకు అనువైనది.",
    image: "/api/placeholder/300/400",
    images: ["/api/placeholder/300/400"],
    category: "Poetry",
    categoryTelugu: "కవిత్వం",
    pages: 180,
    language: "Telugu",
    dimensions: { length: 20, width: 13, height: 1.5 },
    weight: 220,
    publicationYear: 1920,
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    stockCount: 67,
    tags: ["Poetry", "Culture", "Educational"],
    seoTitle: "Maa Telugu Talli - Telugu Poetry Collection",
    seoDescription:
      "Classic Telugu poetry collection celebrating our beautiful language and culture. Perfect for students and literature enthusiasts.",
    featured: false,
    bestseller: true,
    newArrival: false,
  },
  {
    id: "3",
    title: "Annamayya Keerthanalu",
    titleTelugu: "అన్నమయ్య కీర్తనలు",
    author: "Annamayya",
    authorTelugu: "అన్నమయ్య",
    publisher: "TTD Publications",
    publisherTelugu: "టిటిడి పబ్లికేషన్స్",
    isbn: "978-81-234-5680-2",
    price: 349,
    originalPrice: 449,
    discount: 22,
    description:
      "Complete collection of Annamayya's devotional songs. Includes Telugu lyrics with meanings and musical notations.",
    descriptionTelugu:
      "అన్నమయ్య యొక్క భక్తి పాటల పూర్తి సంకలనం. తెలుగు సాహిత్యం మరియు సంగీత అర్థాలతో పాటు సంగీత సంకేతాలు కూడా ఉన్నాయి.",
    image: "/api/placeholder/300/400",
    images: ["/api/placeholder/300/400"],
    category: "Devotional",
    categoryTelugu: "భక్తి",
    pages: 520,
    language: "Telugu",
    dimensions: { length: 23, width: 15, height: 3.5 },
    weight: 680,
    publicationYear: 2018,
    rating: 4.9,
    reviewCount: 456,
    inStock: true,
    stockCount: 23,
    tags: ["Devotional", "Music", "Classical"],
    seoTitle: "Annamayya Keerthanalu - Complete Collection of Devotional Songs",
    seoDescription:
      "Buy the complete collection of Annamayya's devotional songs. Includes lyrics, meanings, and musical notations.",
    featured: true,
    bestseller: false,
    newArrival: false,
  },
  {
    id: "4",
    title: "Telugu Grammar Made Easy",
    titleTelugu: "తెలుగు వ్యాకరణం సులభంగా",
    author: "Dr. K. V. Ramakrishna Rao",
    authorTelugu: "డాక్టర్ కె.వి. రామకృష్ణ రావు",
    publisher: "Educational Publishers",
    publisherTelugu: "ఎడ్యుకేషనల్ పబ్లిషర్స్",
    isbn: "978-81-234-5681-9",
    price: 249,
    originalPrice: 299,
    discount: 17,
    description:
      "Comprehensive guide to Telugu grammar with examples and exercises. Essential for students and teachers.",
    descriptionTelugu:
      "ఉదాహరణలు మరియు వ్యాయామాలతో తెలుగు వ్యాకరణానికి సమగ్ర మార్గదర్శి. విద్యార్థులు మరియు ఉపాధ్యాయులకు అవసరమైనది.",
    image: "/api/placeholder/300/400",
    images: ["/api/placeholder/300/400"],
    category: "Educational",
    categoryTelugu: "విద్యా",
    pages: 320,
    language: "Telugu",
    dimensions: { length: 21, width: 14, height: 2.2 },
    weight: 420,
    publicationYear: 2021,
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    stockCount: 89,
    tags: ["Grammar", "Educational", "Reference"],
    seoTitle: "Telugu Grammar Made Easy - Complete Grammar Guide",
    seoDescription:
      "Learn Telugu grammar easily with this comprehensive guide. Includes examples and exercises for better understanding.",
    featured: false,
    bestseller: false,
    newArrival: true,
  },
  {
    id: "5",
    title: "Chandamama Stories",
    titleTelugu: "చందమామ కథలు",
    author: "Various Authors",
    authorTelugu: "వివిధ రచయితలు",
    publisher: "Chandamama Publications",
    publisherTelugu: "చందమామ పబ్లికేషన్స్",
    isbn: "978-81-234-5682-6",
    price: 179,
    originalPrice: 199,
    discount: 10,
    description:
      "Collection of beloved Chandamama stories for children. Beautifully illustrated with moral tales.",
    descriptionTelugu:
      "పిల్లలకు ప్రియమైన చందమామ కథల సంకలనం. నైతిక కథలతో అందంగా చిత్రీకరించబడింది.",
    image: "/api/placeholder/300/400",
    images: ["/api/placeholder/300/400"],
    category: "Children",
    categoryTelugu: "పిల్లల పుస్తకలు",
    pages: 240,
    language: "Telugu",
    dimensions: { length: 20, width: 14, height: 2 },
    weight: 280,
    publicationYear: 2020,
    rating: 4.7,
    reviewCount: 89,
    inStock: true,
    stockCount: 156,
    tags: ["Children", "Stories", "Illustrated"],
    seoTitle: "Chandamama Stories - Classic Telugu Stories for Children",
    seoDescription:
      "Beautiful collection of Chandamama stories for children. Illustrated moral tales that kids love.",
    featured: false,
    bestseller: true,
    newArrival: false,
  },
  {
    id: "6",
    title: "Modern Telugu Poetry",
    titleTelugu: "ఆధునిక తెలుగు కవిత్వం",
    author: "Contemporary Poets",
    authorTelugu: "సమకాలీన కవులు",
    publisher: "New Age Publications",
    publisherTelugu: "న్యూ ఏజ్ పబ్లికేషన్స్",
    isbn: "978-81-234-5683-3",
    price: 279,
    originalPrice: 349,
    discount: 20,
    description:
      "Collection of contemporary Telugu poetry exploring modern themes and emotions.",
    descriptionTelugu:
      "ఆధునిక ఇతివృత్తాలు మరియు భావోద్వేగాలను అన్వేషించే సమకాలీన తెలుగు కవిత్వ సంకలనం.",
    image: "/api/placeholder/300/400",
    images: ["/api/placeholder/300/400"],
    category: "Poetry",
    categoryTelugu: "కవిత్వం",
    pages: 200,
    language: "Telugu",
    dimensions: { length: 20, width: 13, height: 1.8 },
    weight: 250,
    publicationYear: 2023,
    rating: 4.3,
    reviewCount: 67,
    inStock: true,
    stockCount: 34,
    tags: ["Poetry", "Modern", "Contemporary"],
    seoTitle: "Modern Telugu Poetry - Contemporary Poetry Collection",
    seoDescription:
      "Explore modern Telugu poetry with this contemporary collection. Fresh voices and modern themes.",
    featured: false,
    bestseller: false,
    newArrival: true,
  },
];

export const categories = [
  { id: "literature", name: "Literature", nameTelugu: "సాహిత్యం" },
  { id: "poetry", name: "Poetry", nameTelugu: "కవిత్వం" },
  { id: "devotional", name: "Devotional", nameTelugu: "భక్తి" },
  { id: "educational", name: "Educational", nameTelugu: "విద్యా" },
  { id: "children", name: "Children", nameTelugu: "పిల్లల పుస్తకలు" },
  { id: "history", name: "History", nameTelugu: "చరిత్ర" },
  { id: "philosophy", name: "Philosophy", nameTelugu: "తత్వశాస్త్రం" },
  { id: "biography", name: "Biography", nameTelugu: "జీవితచరిత్ర" },
];

export const languages = [
  { id: "telugu", name: "Telugu", nameTelugu: "తెలుగు" },
  { id: "english", name: "English", nameTelugu: "ఇంగ్లీష్" },
  { id: "hindi", name: "Hindi", nameTelugu: "హిందీ" },
];

// Helper functions
export function getBookById(id: string): Book | undefined {
  return mockBooks.find((book) => book.id === id);
}

export function getBooksByCategory(category: string): Book[] {
  return mockBooks.filter(
    (book) =>
      book.category.toLowerCase() === category.toLowerCase() ||
      book.categoryTelugu === category,
  );
}

export function getFeaturedBooks(): Book[] {
  return mockBooks.filter((book) => book.featured);
}

export function getBestsellers(): Book[] {
  return mockBooks.filter((book) => book.bestseller);
}

export function getNewArrivals(): Book[] {
  return mockBooks.filter((book) => book.newArrival);
}

export function searchBooks(query: string): Book[] {
  const lowerQuery = query.toLowerCase();
  return mockBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.titleTelugu?.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery) ||
      book.authorTelugu?.toLowerCase().includes(lowerQuery) ||
      book.category.toLowerCase().includes(lowerQuery) ||
      book.categoryTelugu?.toLowerCase().includes(lowerQuery) ||
      book.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  );
}
