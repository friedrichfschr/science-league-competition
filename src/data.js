export const siteNav = [
  { key: 'about', label: 'Über uns', href: 'index.html' },
  { key: 'social', label: 'Soziales', href: 'soziales.html' },
  { key: 'food', label: 'Food', href: 'food.html' },
  { key: 'forum', label: 'Forum', href: 'forum.html' },
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


// ── Forum ─────────────────────────────────────────────────────────────

export const forumUsers = [
  {
    id: 'u1',
    username: 'friedrichfschr',
    displayName: 'Friedrich S.',
    role: 'administrator',
    initials: 'FS',
    password: 'admin',
  },
  {
    id: 'u2',
    username: 'jana_k',
    displayName: 'Jana K.',
    role: 'moderator',
    initials: 'JK',
    password: 'mod',
  },
  {
    id: 'u3',
    username: 'anna_m',
    displayName: 'Anna M.',
    role: 'member',
    initials: 'AM',
    password: 'pass',
  },
  {
    id: 'u4',
    username: 'lukas_b',
    displayName: 'Lukas B.',
    role: 'member',
    initials: 'LB',
    password: 'pass',
  },
  {
    id: 'u5',
    username: 'marie_u',
    displayName: 'Marie U.',
    role: 'member',
    initials: 'MU',
    password: 'pass',
  },
]

const _now = Date.now()
const _min = 60 * 1000
const _hr = 60 * _min
const _day = 24 * _hr

export const forumPosts = [
  {
    id: 'p1',
    authorId: 'u1',
    title: 'Willkommen im FoodConnectMarkt-Forum!',
    body: 'Herzlich willkommen im offiziellen Forum des FoodConnectMarkts!\n\nHier könnt ihr Fragen stellen, Ideen teilen und euch über urbane Landwirtschaft, Selbstversorgung und das Konzept unseres Markts austauschen. Bitte bleibt respektvoll und konstruktiv.\n\nWir freuen uns auf eine lebhafte Diskussion!',
    createdAt: new Date(_now - 2 * _day).toISOString(),
    votes: 24,
    userVote: 0,
    comments: [
      {
        id: 'c1',
        postId: 'p1',
        authorId: 'u3',
        body: 'Super Initiative! Ich freue mich sehr auf den Austausch hier.',
        createdAt: new Date(_now - 47 * _hr).toISOString(),
        votes: 8,
        userVote: 0,
      },
      {
        id: 'c2',
        postId: 'p1',
        authorId: 'u4',
        body: 'Endlich ein Ort für Fragen zum Projekt. Ich hatte schon so viele!',
        createdAt: new Date(_now - 30 * _hr).toISOString(),
        votes: 5,
        userVote: 0,
      },
    ],
  },
  {
    id: 'p2',
    authorId: 'u3',
    title: 'Wie funktioniert das Vertical Farming im Gemüseturm genau?',
    body: 'Ich habe auf der Website gelesen, dass der Gemüseturm 99 % weniger Wasser verbraucht als konventionelle Landwirtschaft. Wie wird das technisch umgesetzt?\n\nWelche Pflanzen können dort angebaut werden und wie viele Etagen sind tatsächlich für den Anbau vorgesehen? Und: Kann man als Besucher die Anbauflächen irgendwann besichtigen?',
    createdAt: new Date(_now - 18 * _hr).toISOString(),
    votes: 17,
    userVote: 0,
    comments: [
      {
        id: 'c3',
        postId: 'p2',
        authorId: 'u1',
        body: 'Gute Frage! Der Gemüseturm nutzt hydroponische Systeme — die Pflanzen wachsen in Nährlösung statt in Erde. Das spart nicht nur Wasser, sondern erlaubt auch ganzjährigen Anbau unabhängig vom Wetter. Alle 10 Etagen sind für den Anbau geplant. Führungen sind in Planung!',
        createdAt: new Date(_now - 16 * _hr).toISOString(),
        votes: 11,
        userVote: 0,
      },
      {
        id: 'c4',
        postId: 'p2',
        authorId: 'u5',
        body: 'Blattgemüse und Kräuter funktionieren am besten bei Vertical Farming. Tomaten und Gurken gehen auch, brauchen aber mehr Licht. Ich gärtnere selbst auf dem Balkon mit ähnlichen Methoden und kann nur empfehlen, damit anzufangen!',
        createdAt: new Date(_now - 12 * _hr).toISOString(),
        votes: 7,
        userVote: 0,
      },
    ],
  },
  {
    id: 'p3',
    authorId: 'u4',
    title: 'Kann man die Seminarräume auch privat mieten?',
    body: 'Ich habe gelesen, dass die Räume in der 4. Etage auch für private Veranstaltungen genutzt werden können. Gibt es schon Informationen zu den Konditionen — Preise, Verfügbarkeit, maximale Personenzahl?',
    createdAt: new Date(_now - 6 * _hr).toISOString(),
    votes: 9,
    userVote: 0,
    comments: [
      {
        id: 'c5',
        postId: 'p3',
        authorId: 'u2',
        body: 'Die genauen Konditionen werden noch ausgearbeitet. Ich plane eine Antwort bis Ende des Monats zu veröffentlichen. Kurz: bis ca. 40 Personen, stundenweise buchbar, Preise richten sich nach Vereins- oder Privatnutzung.',
        createdAt: new Date(_now - 4 * _hr).toISOString(),
        votes: 6,
        userVote: 0,
      },
    ],
  },
  {
    id: 'p4',
    authorId: 'u5',
    title: 'Tipps für Balkongemüse im Winter?',
    body: 'Nachdem ich den Workshop über Selbstversorgung besucht habe, möchte ich auch im Winter auf meinem Balkon etwas anbauen. Hat jemand Erfahrungen mit Wintersorten oder Mini-Gewächshäusern für den Balkon?',
    createdAt: new Date(_now - 2 * _hr).toISOString(),
    votes: 14,
    userVote: 0,
    comments: [
      {
        id: 'c6',
        postId: 'p4',
        authorId: 'u3',
        body: 'Feldsalat und Spinat überleben sogar leichten Frost! Ich nutze ein kleines Foliengewächshaus (~30 €) und kann damit bis in den Dezember hinein ernten.',
        createdAt: new Date(_now - 90 * _min).toISOString(),
        votes: 9,
        userVote: 0,
      },
      {
        id: 'c7',
        postId: 'p4',
        authorId: 'u4',
        body: 'Radieschen und Schnittlauch sind sehr winterhart. Und Microgreens kann man sogar drinnen auf der Fensterbank anbauen — ganzjährig!',
        createdAt: new Date(_now - 30 * _min).toISOString(),
        votes: 4,
        userVote: 0,
      },
    ],
  },
  {
    id: 'p5',
    authorId: 'u2',
    title: '[Ankündigung] Erster Workshop „Gemüse auf dem Balkon" – Anmeldung offen',
    body: 'Wir freuen uns, den ersten Workshop des FoodConnectMarkts ankündigen zu können:\n\n„Gemüse auf dem Balkon — Einstieg in die Selbstversorgung"\n\nDatum: 15. Juni 2026 · 14:00–17:00 Uhr\nOrt: 5. Etage, Praxisanbaufläche\nKosten: kostenlos\n\nAnmeldung über den Newsletter. Plätze sind begrenzt!',
    createdAt: new Date(_now - 20 * _min).toISOString(),
    votes: 31,
    userVote: 0,
    comments: [],
  },
]

// ── Products ──────────────────────────────────────────────────────────

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
