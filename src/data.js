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
    value: '68 %',
    label: 'der Weltbevölkerung werden bis 2050 in Städten leben',
  },
  {
    value: '~20 %',
    label: 'der CO₂-Emissionen aus Lebensmitteln entstehen durch Transport',
  },
  {
    value: '2 Türme',
    label: 'und ein Keller bilden den FoodConnectMarkt',
  },
]

export const trustHighlights = [
  'Lokal anbauen: frische Produkte direkt am Verkaufsort, ohne weite Transportwege',
  'Gemeinschaft stärken: fünf barrierefreie Etagen für Einkauf, Lernen und Begegnung',
  'Selbstversorgung fördern: Workshops zum Anbau auf Balkon und in der Wohnung',
]

export const buildingParts = [
  {
    badge: 'ConnectMarkt',
    sublabel: '5 Etagen · Kreisförmig',
    heading: 'Begegnung & Verkauf',
    text: 'Der soziale Turm. Kinderecke und Lernplätze im Erdgeschoss, barrierefreie Verkaufsfläche mit smarten Einkaufswagen im ersten Stock, Restaurant mit eigenem Gemüse im dritten Stock, Seminarräume und Praxisanbauflächen in den oberen Etagen.',
  },
  {
    badge: 'Gemüseturm',
    sublabel: '10 Etagen · Bohnenform',
    heading: 'Vertical Farming',
    text: 'Der Produktionsturm. Die Bohnenform maximiert die horizontale Fläche und behält die Windresistenz eines ovalen Querschnitts. Alle Etagen sind dem kontrollierten Gemüseanbau gewidmet — mit automatischer Bewässerung und optimiertem Licht.',
  },
  {
    badge: 'Keller',
    sublabel: 'Logistik & Technik',
    heading: 'Das Rückgrat',
    text: 'Warenlager, Heizung, Strom- und Wasserversorgung sowie Kontrolleinheiten liegen im Untergrund — damit oberirdisch jeder Quadratmeter für Grünanlagen und soziale Räume frei bleibt.',
  },
]

export const services = [
  {
    badge: 'Erdgeschoss',
    title: 'Gemeinschaft & offene Räume',
    text: 'Das Erdgeschoss ist offen für alle: eine betreute Kinderecke, ruhige Lernplätze und Informationsstände laden ein, ohne Einkaufsdruck.',
    details: ['betreute Kinderecke', 'ruhige Lerninseln für Schüler*innen', 'Infostände zu allen Angeboten'],
  },
  {
    badge: 'Restaurant · 3. Etage',
    title: 'Restaurant mit eigenem Gemüse',
    text: 'Frisch gekocht aus dem eigenen Anbau. Die Ernte aus dem Gemüseturm landet direkt in der Küche — und als Produkt im Regal, zum Beispiel als Tomatensauce.',
    details: ['Gerichte aus vertikalem Anbau', 'Weiterverarbeitung zu Marktprodukten', 'lokal produziert, kurze Wege'],
  },
  {
    badge: 'Workshops · 4. & 5. Etage',
    title: 'Selbstversorgung lernen',
    text: 'Wir sind realistisch: Unser Markt allein kann keine ganze Stadt versorgen. Deshalb zeigen wir, wie man selbst auf dem Balkon oder in der Wohnung Gemüse anbaut.',
    details: ['Theorie in Seminarräumen (4. Etage)', 'Praxis an echten Anbauanlagen (5. Etage)', 'Ernte wird im Markt verkauft'],
  },
  {
    badge: 'Flexible Nutzung',
    title: 'Seminare, Nachhilfe & Feiern',
    text: 'Kein Raum soll leer stehen. Die Seminarräume sind mehrzweckfähig — für Kurse, Nachhilfe, Geburtstagsfeiern oder Vereinstreffen.',
    details: ['mietbare Seminarräume', 'Nachhilfe und Lernzeit', 'private Veranstaltungen möglich'],
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
