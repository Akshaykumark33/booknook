const books = [
  {
    id: 1,
    title: "A Little Life",
    author: "Hanya Yanagihara",
    category: "Fiction",
    subcategory: "Classic Fiction",
    price: 560,
    rating: 4.5,
    language: "English",
    publisher: "Picador",
    isbn: "9780743273565",
    description:
      "A classic American novel following Jay Gatsby, a mysterious millionaire whose dream of winning back his lost love leads to tragedy.",
    image:
      "https://www.crossword.in/cdn/shop/files/71kUYNSKKgL._SY466.webp?v=1745917966"
  },

  {
    id: 2,
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    category: "Non-Fiction",
    subcategory: "Mythology & Retellings",
    price: 400,
    rating: 4.8,
    language: "English",
    publisher: "Picador",
    isbn: "9780735211292",
    description:
      "A fascinating retelling of the Mahabharata from Draupadi's perspective, exploring love, power, destiny and the struggles of a remarkable woman.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/A1dtQ-soQEL._SL1500_360x.jpg?v=1783577488"
  },

  {
    id: 3,
    title: "Love, Mom",
    author: "Iliana Xander",
    category: "Fiction",
    subcategory: "Contemporary Fiction",
    price: 492,
    rating: 4.7,
    language: "English",
    publisher: "Penguin Random House",
    isbn: "9780062315007",
    description:
      "A heartfelt story exploring family Penguin Random Houserelationships, love, emotions and the special bond between a mother and her child.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/717KVxJkxiL._SL1500_360x.jpg?v=1751362231"
  },

  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Non-Fiction",
    subcategory: "Self-Help & Personal Development",
    price: 856,
    rating: 4.6,
    language: "English",
    publisher: "Penguin Random House",
    isbn: "9780143130727",
    description:
      "A practical guide to building good habits, breaking bad ones and making small changes that lead to remarkable long-term results.",
    image:
      "https://www.crossword.in/cdn/shop/files/Atomic-Habits-1.webp?v=1776665957"
  },

  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Non-Fiction",
    subcategory: "Productivity & Time Management",
    price: 320,
    rating: 4.7,
    language: "English",
    publisher: "Piatkus Books",
    isbn: "9780857197689",
    description:
      "A guide to developing focused concentration and eliminating distractions to achieve better productivity and meaningful results.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/products/hachette-uk-books-default-title-deep-work-rules-for-focused-success-in-a-distracted-world-paperback-newport-cal-paperback-newport-cal-40359324254425_360x.jpg?v=1775394876"
  },

  {
    id: 6,
    title: "Ratan Tata : A Life",
    author: "Thomas Mathew",
    category: "Non-Fiction",
    subcategory: "Biography & Business",
    price: 1230,
    rating: 4.5,
    language: "English",
    publisher: "Harper Collins",
    isbn: "9781612680194",
    description:
      "A detailed biography of Ratan Tata, exploring his life, leadership, values and remarkable contribution to Indian business.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/8_055dbd06-fde7-4150-842b-0393cc184759_360x.webp?v=1765256042"
  },

  {
    id: 7,
    title: "Peppa Pig: Peppa’S Swimming Lesson",
    author: "Peppa Pig",
    category: "Children's Books",
    subcategory: "Picture Books & Early Learning",
    price: 360,
    rating: 4.9,
    language: "English",
    publisher: "Penguin Random House",
    isbn: "9781408855652",
    description:
      "Peppa Pig enjoys a fun swimming lesson with her friends while learning about confidence, friendship and having fun in the water.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/71UVq_NwpML._SL1500_360x.jpg?v=1746564680"
  },

  {
    id: 8,
    title: "Little Treasures Disney Frozen",
    author: "Chapter Books",
    category: "Children's Books",
    subcategory: "Disney Stories & Activity Books",
    price: 200,
    rating: 4.8,
    language: "English",
    publisher: "Parragon Books",
    isbn: "9780241958512",
    description:
      "A delightful Disney Frozen collection designed for young readers, featuring familiar characters, stories and entertaining activities.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/products/little-treasures-disney-frozen-hardcover-disney-bk0446181-40556372328665_360x.jpg?v=1775117050"
  },

  {
    id: 9,
    title: "Lallan Sweets",
    author: "Chaudhury Srishti",
    category: "Fiction",
    subcategory: "Contemporary Indian Fiction",
    price: 294,
    rating: 4.6,
    language: "English",
    publisher: "Penguin Random House",
    isbn: "9781250301697",
    description:
      "A warm and entertaining story set around a traditional Indian sweet shop, exploring family, relationships, ambitions and everyday life.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/products/lallan-sweets-paperback-chaudhary-srishti-bk0437333-40505079070937_360x.jpg?v=1775117367"
  },

  {
    id: 10,
    title: "The Mountain Is You",
    author: "Brianna Wiest",
    category: "Non-Fiction",
    subcategory: "Self-Help & Personal Growth",
    price: 320,
    rating: 4.4,
    language: "English",
    publisher: "Manjul Publishing House",
    isbn: "9788175994662",
    description:
      "A personal-growth guide about overcoming self-sabotage, understanding emotional patterns and transforming obstacles into opportunities for growth.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/The_Mountain_Is_You_360x.webp?v=1745697558"
  },

  {
    id: 11,
    title: "The Boyfriend",
    author: "Freida McFadden",
    category: "Fiction",
    subcategory: "Psychological Thriller",
    price: 499,
    rating: 4.8,
    language: "English",
    publisher: "Poisoned Pen Press",
    isbn: "9780261102217",
    description:
      "A suspenseful thriller involving secrets, relationships and deception, where appearances can be very different from reality.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/71sa1DXwbfL._SL1500_360x.jpg?v=1770119112"
  },

  {
    id: 12,
    title: "The Housemaid",
    author: "Freida Mcfadden",
    category: "Fiction",
    subcategory: "Psychological Thriller",
    price: 440,
    rating: 4.7,
    language: "English",
    publisher: "Penguin Random House",
    isbn: "9780141439518",
    description:
      "A gripping psychological thriller about a housemaid who discovers disturbing secrets within the wealthy family she works for.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/The_Housemaid-Prh_Select_360x.jpg?v=1745709350"
  },

  {
    id: 13,
    title: "The Art Of Being Alone: Loneliness Was My Cage, Solitude Is My Home",
    author: "Renuka Gavrani",
    category: "Non-Fiction",
    subcategory: "Self-Help & Mental Wellness",
    price: 240,
    rating: 4.5,
    language: "English",
    publisher: "Manjul Publishing House",
    isbn: "9781577314806",
    description:
      "An inspiring exploration of solitude and self-discovery that encourages readers to embrace their own company and find strength within themselves.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/the-art-of-being-alone-bk0485870-41285770150105_360x.jpg?v=1775115576"
  },

  {
    id: 14,
    title: "Challenging Destiny A Biography Of Chhatrapati Shivaji",
    author: "Medha Deshmukh Bhaskaran",
    category: "Non-Fiction",
    subcategory: "Biography & History",
    price: 480,
    rating: 4.8,
    language: "English",
    publisher: "The Write Place",
    isbn: "9788173711466",
    description:
      "A biography of Chhatrapati Shivaji Maharaj that explores his leadership, courage, strategic vision and role in Indian history.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/ChallengingDestiny_Biography_Front_cover_360x.jpg?v=1749202628"
  },

  {
    id: 15,
    title: "The Taylor Swift Activity Book - Premium Edition",
    author: "Nathan Joyce",
    category: "Children's Books",
    subcategory: "Activity & Puzzle Books",
    price: 328,
    rating: 4.8,
    language: "English",
    publisher: "Harper Collins",
    isbn: "9780156012195",
    description:
      "An entertaining activity book inspired by Taylor Swift, featuring puzzles, games, colouring activities and fun challenges for young fans.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/the-taylor-swift-activity-book-cw-spl-ed-bk0514608-44633276350681_360x.jpg?v=1775117544"
  },

  {
    id: 16,
    title: "One Piece 01",
    author: "Eiichiro Oda",
    category: "Fiction",
    subcategory: "Manga & Graphic Novels",
    price: 855,
    rating: 4.4,
    language: "English",
    publisher: "VIZ Media",
    isbn: "9780446694890",
    description:
      "The first volume of the popular One Piece manga follows Monkey D. Luffy as he begins his adventure to become the Pirate King and find the legendary One Piece treasure.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/one-piece-01-romance-dawn-volume-1-paperback-eiichiro-oda-paperback-oda-eiichiro-bk0429151-40738146418905_360x.jpg?v=1775117697"
  },

  {
    id: 17,
    title: "Loope Brown Eco Notebook A4 | Unruled | 200 Pages",
    author: "PaperNest",
    category: "Stationery",
    subcategory: "Notebooks & Journals",
    price: 299,
    rating: 4.5,
    language: "English",
    publisher: "PaperNest Publishing",
    isbn: "9788191234501",
    description:
      "A premium hardcover notebook perfect for notes, ideas, journaling, daily planning and creative writing.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/31_ce0c1436-0a08-4b63-a0e9-96e0a65757b2_360x.jpg?v=1782189860"
  },

  {
    id: 18,
    title: "Loope Unruled Notebook A5 | The Starry Night",
    author: "WriteWell",
    category: "Stationery",
    subcategory: "Notebooks & Journals",
    price: 349,
    rating: 4.6,
    language: "English",
    publisher: "WriteWell Press",
    isbn: "9788191234502",
    description:
      "A simple and elegant journal designed for daily writing, planning, personal reflections and goal setting.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/218_afd5a7bc-20f4-44f7-941f-9765e327aee5_360x.jpg?v=1782189692"
  },

  {
    id: 19,
    title: "Loope Brown Eco Notebook A4 | Unruled | 100 Pages",
    author: "ClassMate",
    category: "Stationery",
    subcategory: "Notebooks & Journals",
    price: 199,
    rating: 4.3,
    language: "English",
    publisher: "ClassMate Books",
    isbn: "9788191234503",
    description:
      "A practical spiral notebook suitable for students, classroom notes, office work and everyday writing.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/A4unruledimage-1_360x.png?v=1783399207"
  },

  {
    id: 20,
    title: "Premium Ball Pen Set",
    author: "Cello",
    category: "Stationery",
    subcategory: "Pens & Pencils",
    price: 249,
    rating: 4.5,
    language: "English",
    publisher: "Cello World",
    isbn: "9788191234504",
    description:
      "A smooth-writing ball pen set designed for students, professionals and everyday writing.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/parker-vector-standard-calligraphy-fp-st0043629-40790546415833_360x.jpg?v=1775117366"
  },

  {
    id: 21,
    title: "Classic Wooden Pencil Set",
    author: "Nataraj",
    category: "Stationery",
    subcategory: "Pens & Pencils",
    price: 149,
    rating: 4.4,
    language: "English",
    publisher: "Hindustan Pencils",
    isbn: "9788191234505",
    description:
      "High-quality wooden pencils suitable for writing, sketching, drawing and classroom use.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/51QaRzaasdL._SL1000_360x.jpg?v=1779259057"
  },

  {
    id: 22,
    title: "Color Gel Pen ",
    author: "Faber-Castell",
    category: "Stationery",
    subcategory: "Pens & Pencils",
    price: 299,
    rating: 4.7,
    language: "English",
    publisher: "Faber-Castell",
    isbn: "9788191234506",
    description:
      "Bright and smooth gel pens perfect for colorful notes, creative writing, journaling and school projects.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/parker-premium-odyssey-lacque-black-ct-ballpoint-pen-st0040945-40823831527641_360x.jpg?v=1775116083"
  },

  {
    id: 23,
    title: "Professional Sketching Set",
    author: "ArtLine",
    category: "Stationery",
    subcategory: "Art Supplies",
    price: 599,
    rating: 4.8,
    language: "English",
    publisher: "ArtLine Studio",
    isbn: "9788191234507",
    description:
      "A complete sketching set containing essential drawing tools for beginners, students and professional artists.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/blister-2-p1-pens-blue-and-red-2-graphite-pencils-hb-and-h-eraser-430-sharpener-st0066365-43162915373273_360x.jpg?v=1775116503"
  },

  {
    id: 24,
    title: "Watercolor Paint Set",
    author: "Camel",
    category: "Stationery",
    subcategory: "Art Supplies",
    price: 449,
    rating: 4.6,
    language: "English",
    publisher: "Camlin",
    isbn: "9788191234508",
    description:
      "A vibrant watercolor paint set suitable for painting, creative projects, school activities and artistic experiments.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/faber-castell-easy-to-use-assorted-watercolours-24-tube-of-2-box-9-ml-each-st0044209-40570265534681_360x.jpg?v=1775115255"
  },

  {
    id: 25,
    title: "Artist Brush Collection",
    author: "Artisan",
    category: "Stationery",
    subcategory: "Art Supplies",
    price: 399,
    rating: 4.5,
    language: "English",
    publisher: "Artisan Supplies",
    isbn: "9788191234509",
    description:
      "A versatile collection of painting brushes designed for watercolor, acrylic and other creative art techniques.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/the-ink-works-markers-set-of-5-st0061240-42413995524313_360x.png?v=1775115162"
  },

  {
    id: 26,
    title: "Wooden Desk Organizer",
    author: "OrganizePro",
    category: "Stationery",
    subcategory: "Desk Accessories",
    price: 499,
    rating: 4.5,
    language: "English",
    publisher: "OrganizePro",
    isbn: "9788191234510",
    description:
      "A stylish wooden desk organizer for keeping pens, notebooks, documents and office essentials neatly arranged.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
  },

  {
    id: 27,
    title: "Minimal Desk Calendar",
    author: "PaperCraft",
    category: "Stationery",
    subcategory: "Desk Accessories",
    price: 249,
    rating: 4.3,
    language: "English",
    publisher: "PaperCraft Publications",
    isbn: "9788191234511",
    description:
      "A clean and modern desk calendar for organizing daily tasks, appointments and important dates.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/sketch_pads-33_360x.webp?v=1763636629"
  },

  {
    id: 28,
    title: "Sticky Notes ",
    author: "NoteMate",
    category: "Stationery",
    subcategory: "Desk Accessories",
    price: 199,
    rating: 4.4,
    language: "English",
    publisher: "NoteMate India",
    isbn: "9788191234512",
    description:
      "A compact desk organizer for sticky notes and reminders, ideal for students, professionals and home offices.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/cube-400-adhesive-notes-76x76-fluo-st0061853-40903279116505_360x.jpg?v=1775115097"
  },

  {
    id: 29,
    title: "Premium Writing Gift Set",
    author: "Cross",
    category: "Stationery",
    subcategory: "Gift Sets",
    price: 799,
    rating: 4.8,
    language: "English",
    publisher: "Cross Writing",
    isbn: "9788191234513",
    description:
      "An elegant writing gift set containing premium stationery items, perfect for students, professionals and book lovers.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/brustro-calligraphy-pen-st0042472-44037023432921_360x.jpg?v=1775116795"
  },

  {
    id: 30,
    title: "Creative Artist Gift Box",
    author: "ArtBox",
    category: "Stationery",
    subcategory: "Gift Sets",
    price: 999,
    rating: 4.7,
    language: "English",
    publisher: "ArtBox Creations",
    isbn: "9788191234514",
    description:
      "A creative stationery gift box designed for artists, students and anyone who enjoys drawing and painting.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/box-18-triangular-coloured-pencils-st0066376-43169962426585_360x.jpg?v=1775115898"
  },

  {
    id: 31,
    title: "Journal Lover Gift Set",
    author: "WriteWell",
    category: "Stationery",
    subcategory: "Gift Sets",
    price: 699,
    rating: 4.6,
    language: "English",
    publisher: "WriteWell Press",
    isbn: "9788191234515",
    description:
      "A thoughtful gift set featuring a beautiful journal and essential writing accessories for everyday use.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/products/tell-me-what-encyclopedia-for-kids-collection-of-12-books-early-learning-books-for-kids-age-6-8-years-general-knowledge-books-for-children-gk-for-kids-paperback-om-books-editorial-team-bk0476594-40532750696665_360x.jpg?v=1775115920"
  },

  {
    id: 32,
    title: "Study Essentials Gift Pack",
    author: "StudyMate",
    category: "Stationery",
    subcategory: "Gift Sets",
    price: 549,
    rating: 4.5,
    language: "English",
    publisher: "StudyMate Publications",
    isbn: "9788191234516",
    description:
      "A useful stationery collection containing everyday study essentials for students and learners.",
    image:
      "https://cdn.shopify.com/s/files/1/0648/3066/9017/files/legami-mini-stationery-set-kit-6pcs-st0061966-43168992428249_360x.jpg?v=1775115509"
  },
];

export default books;