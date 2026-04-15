export const siteNav = [
  { key: 'about', label: 'Über uns', href: 'index.html' },
  { key: 'social', label: 'Soziales', href: 'soziales.html' },
  { key: 'food', label: 'Food', href: 'food.html' },
]

export const competitionFacts = {
  season: 'Science League 2025/2026',
  brand: 'bre-delicious',
  title: 'FoodConnectMarkt',
  subtitle: 'Ein Markt für frisches Essen, gemeinsames Lernen und echte Nachbarschaft.',
  description:
    'Für die zdi Science League entwickelt das Team bre-delicious einen FoodConnectMarkt, der Vertical Farming, Einkauf, Bildung und soziale Angebote in einem praktischen Konzept verbindet.',
  intro:
    'Die Website soll nicht nur erklären, was die Idee ist, sondern zeigen, wie sie sich im Alltag anfühlt: klar, vertrauenswürdig, nutzbar und offen für verschiedene Zielgruppen.',
  links: {
    competition: 'https://mint-community.de/scienceleague/',
    team: 'https://mint-community.de/science-league-teams/bre-delicious-saison-2025-2026/',
  },
}

export const heroStats = [
  {
    value: '9',
    label: 'Produkte im Demo-Markt',
  },
  {
    value: '4',
    label: 'Soziale und Bildungsangebote',
  },
  {
    value: '1',
    label: 'Ort für Food, Lernen und Gemeinschaft',
  },
]

export const trustHighlights = [
  'Transparente Produktinfos statt Deko-Overload',
  'Klare Food-Suche mit Filtern, Warenkorb und Zustandsanzeige',
  'Projektpräsentation, Community-Angebote und Einkauf in einem System',
]

export const aboutPillars = [
  {
    title: 'FoodConnectMarkt als echter Ort',
    text: 'Der Markt ist nicht nur Verkaufsfläche, sondern verbindet Anbau, Beratung, Begegnung und Teilhabe an einem Standort.',
  },
  {
    title: 'Urban Farming sichtbar machen',
    text: 'Vertical Farming wird nicht im Hintergrund versteckt, sondern als Teil des Einkaufserlebnisses und der Bildungsarbeit erklärt.',
  },
  {
    title: 'Niedrige Einstiegshürden',
    text: 'Menschen sollen schnell verstehen, was angeboten wird, wie Produkte gefunden werden und welche sozialen Formate es gibt.',
  },
]

export const aboutMetrics = [
  {
    value: 'Food',
    label: 'Frisches Gemüse und Kräuter mit klarer Produktsuche, Lagerstatus und Warenkorb.',
  },
  {
    value: 'Soziales',
    label: 'Mietbare Räume, Kochklassen, Lernangebote und offene Events für die Nachbarschaft.',
  },
  {
    value: 'Projekt',
    label: 'Science League Kontext, Teamstory und Mission verständlich aufbereitet.',
  },
]

export const services = [
  {
    badge: 'Raum & Begegnung',
    title: 'Mietbare Säle',
    text: 'Flexible Räume für Vereine, kleine Feiern, Initiativen oder Workshops. Der Markt bleibt dadurch auch außerhalb des Einkaufs relevant.',
    details: ['verschiedene Raumgrößen', 'für Gruppen, Vereine und Familien', 'mit Technik und Bestuhlung planbar'],
  },
  {
    badge: 'Bildung',
    title: 'Nachhilfe & Lernzeit',
    text: 'Schülerinnen und Schüler können Lerninseln, Hausaufgabenhilfe und praktische MINT-Bezüge rund um Ernährung und Anbau nutzen.',
    details: ['Lernzeiten nach der Schule', 'MINT-Bezug durch Vertical Farming', 'ruhige Arbeitsplätze im Markt'],
  },
  {
    badge: 'Food & Community',
    title: 'Kochklassen',
    text: 'Aus frischen Zutaten werden gemeinsame Kochformate für Kinder, Familien und Interessierte. Einkauf und Anwendung rücken näher zusammen.',
    details: ['saisonale Rezepte', 'gemeinsames Kochen mit Marktgemüse', 'praxisnah und niedrigschwellig'],
  },
  {
    badge: 'Mitmachen',
    title: 'Events & offene Formate',
    text: 'Workshops, Infotage und Mitmach-Aktionen bringen Nachbarschaft, Nachhaltigkeit und Ernährung in einen gemeinsamen Rahmen.',
    details: ['Workshops und Themenabende', 'Mitmachformate für Schulklassen', 'offene Nachbarschaftstreffen'],
  },
]

export const storyTimeline = [
  {
    title: 'Science League Briefing',
    text: 'Die Aufgabe stellt einen FoodConnectMarkt in den Mittelpunkt, der Technik, Nachhaltigkeit und Alltagsnutzen zusammenbringt.',
  },
  {
    title: 'Team bre-delicious',
    text: 'Das Team entwickelt daraus ein Konzept, das Gemüseverkauf, Community-Angebote und Bildung nicht trennt, sondern gemeinsam denkt.',
  },
  {
    title: 'Digitale Nutzerführung',
    text: 'Die Website übersetzt das Marktmodell in eine nachvollziehbare Navigation mit klarem Einstieg für Über uns, Soziales und Food.',
  },
  {
    title: 'Praktischer Demo-Flow',
    text: 'Produkte können gefiltert, verglichen und in einen Warenkorb gelegt werden, damit die Idee nicht abstrakt bleibt.',
  },
]

export const productCategories = ['Alle', 'Blattgemüse', 'Kräuter', 'Fruchtgemüse', 'Wurzelgemüse', 'Pilze']

export const products = [
  {
    id: 'romana-salat',
    name: 'Romana Salat',
    category: 'Blattgemüse',
    price: 2.9,
    unit: 'pro Kopf',
    stockLabel: 'Erntebereit',
    stockLevel: 'fresh',
    image: '/images/products/romana-salat.jpg',
    description: 'Knackiger Salat direkt aus dem Vertical-Farming-Regal für Bowls, Sandwiches und schnelle Alltagsküche.',
    origin: 'Anbau im FoodConnectMarkt',
    badge: 'Heute empfohlen',
    tags: ['hydroponisch', 'regional', 'frisch geerntet'],
  },
  {
    id: 'basilikum',
    name: 'Basilikum',
    category: 'Kräuter',
    price: 1.8,
    unit: 'pro Bund',
    stockLabel: 'Auf Lager',
    stockLevel: 'ready',
    image: '/images/products/basilikum.jpg',
    description: 'Aromatisches Basilikum für Pasta, Sandwiches, Pesto oder Kochklassen im Markt.',
    origin: 'Marktregal Kräuterzone',
    badge: 'Küchenklassiker',
    tags: ['aromatisch', 'urban farm', 'beliebt'],
  },
  {
    id: 'kirschtomaten',
    name: 'Kirschtomaten',
    category: 'Fruchtgemüse',
    price: 3.7,
    unit: 'pro 500 g',
    stockLabel: 'Auf Lager',
    stockLevel: 'ready',
    image: '/images/products/kirschtomaten.jpg',
    description: 'Süß, saftig und gut für Snackboxen, Salate oder kleine Marktverkostungen.',
    origin: 'Gewächshaus nah am Markt',
    badge: 'Familienfreundlich',
    tags: ['snack', 'lokal', 'sommerlich'],
  },
  {
    id: 'gurke',
    name: 'Mini Gurken',
    category: 'Fruchtgemüse',
    price: 2.6,
    unit: 'pro 400 g',
    stockLabel: 'Auf Lager',
    stockLevel: 'ready',
    image: '/images/products/gurke.jpg',
    description: 'Kühle, frische Gurken für Brotdosen, Salate und einfache gesunde Gerichte.',
    origin: 'Tagesfrische Lieferung',
    badge: 'Schnell vergriffen',
    tags: ['knackig', 'alltag', 'frisch'],
  },
  {
    id: 'microgreens',
    name: 'Microgreens Mix',
    category: 'Blattgemüse',
    price: 3.2,
    unit: 'pro Schale',
    stockLabel: 'Frisch geschnitten',
    stockLevel: 'fresh',
    image: '/images/products/microgreens.jpg',
    description: 'Kleine Blätter mit viel Geschmack und hohem Nährstoffprofil für Bowls und kreative Küche.',
    origin: 'Indoor Farm',
    badge: 'Premium',
    tags: ['nährstoffreich', 'modern', 'fein'],
  },
  {
    id: 'petersilie',
    name: 'Petersilie glatt',
    category: 'Kräuter',
    price: 1.5,
    unit: 'pro Bund',
    stockLabel: 'Auf Lager',
    stockLevel: 'ready',
    image: '/images/products/petersilie.jpg',
    description: 'Vielseitig einsetzbar für Suppen, Dips, Gemüsepfannen und Kochkurse.',
    origin: 'Kräuterstation',
    badge: 'Preiswert',
    tags: ['würzig', 'klassiker', 'erntefrisch'],
  },
  {
    id: 'radieschen',
    name: 'Radieschen',
    category: 'Wurzelgemüse',
    price: 2.2,
    unit: 'pro Bund',
    stockLabel: 'Auf Lager',
    stockLevel: 'ready',
    image: '/images/products/radieschen.png',
    description: 'Leicht scharf und knackig für Brote, Salate oder kleine Snackteller.',
    origin: 'Regionaler Partnerbetrieb',
    badge: 'Wochenmarkt-Gefühl',
    tags: ['saisonal', 'regional', 'knackig'],
  },
  {
    id: 'seitlinge',
    name: 'Austernseitlinge',
    category: 'Pilze',
    price: 4.4,
    unit: 'pro 300 g',
    stockLabel: 'Kleine Ernte',
    stockLevel: 'limited',
    image: '/images/products/seitlinge.jpg',
    description: 'Herzhafte Pilze für Pfanne, Pasta oder Workshops rund um nachhaltige Ernährung.',
    origin: 'Pilzzucht-Partner',
    badge: 'Nur kleine Menge',
    tags: ['umami', 'kochkurs-favorit', 'besonders'],
  },
  {
    id: 'mangold',
    name: 'Bunter Mangold',
    category: 'Blattgemüse',
    price: 3.4,
    unit: 'pro Bund',
    stockLabel: 'Erntebereit',
    stockLevel: 'fresh',
    image: '/images/products/mangold.jpg',
    description: 'Farbenfroher Mangold für Pfanne, Ofengerichte und sichtbare Frische im Regal.',
    origin: 'Vertical-Farming-Modul',
    badge: 'Saisonal',
    tags: ['farbig', 'frisch geerntet', 'regional'],
  },
]
