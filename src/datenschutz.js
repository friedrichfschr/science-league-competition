import './style.css'
import { bindPageSelect, renderPageFrame, renderHero, setupRevealObserver } from './shared.js'

const app = document.querySelector('#app')

const hero = renderHero({
  eyebrow: 'Rechtliches',
  title: 'Datenschutzerklärung',
})

const sections = [
  {
    title: 'Verantwortliche Stelle',
    body: `
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist Team bre-delicious, erreichbar unter
      <a href="mailto:info@bredelicious.de" class="font-medium text-emerald-800 underline-offset-2 hover:underline">info@bredelicious.de</a>.
      Diese Website ist ein Schulprojekt im Rahmen der Science League von zdi.NRW und verfolgt keine kommerziellen Zwecke.</p>
    `,
  },
  {
    title: 'Welche Daten wir verarbeiten',
    body: `
      <p class="font-semibold text-stone-900">Newsletter-Anmeldung</p>
      <p class="mt-1">Wer sich für den Newsletter anmeldet, gibt seine E-Mail-Adresse an. Wir nutzen ein Double-Opt-in-Verfahren: Nach der Eingabe erhältst du eine Bestätigungs-E-Mail. Erst nach Klick auf den Bestätigungslink wird deine Adresse gespeichert. Du kannst dich jederzeit über den Abmeldelink in jeder Newsletter-E-Mail wieder austragen.</p>

      <p class="mt-5 font-semibold text-stone-900">Nutzerkonten</p>
      <p class="mt-1">Wer ein Konto anlegt, speichert E-Mail-Adresse, Benutzername und ein Passwort. Passwörter werden ausschließlich als bcrypt-Hash gespeichert — niemals im Klartext. Konten können jederzeit über den Kontakt gelöscht werden.</p>

      <p class="mt-5 font-semibold text-stone-900">Forum & Beiträge</p>
      <p class="mt-1">Im Forum erstellte Beiträge und Kommentare werden zusammen mit dem Benutzernamen auf unserem Server gespeichert. Eine Löschung kann über den Kontakt beantragt werden.</p>

      <p class="mt-5 font-semibold text-stone-900">Einkaufsdaten</p>
      <p class="mt-1">Der Warenkorb wird lokal in deinem Browser gespeichert (localStorage) und verlässt dein Gerät nicht, solange du keine Bestellung abschickst. Bei einer Bestellung werden die Artikeldaten zur Erstellung einer Quittung an unseren Server übermittelt.</p>

      <p class="mt-5 font-semibold text-stone-900">Gespeicherte Einkaufslisten</p>
      <p class="mt-1">Wer eine Einkaufsliste in seinem Konto speichert, überträgt die enthaltenen Artikel und den gewählten Listennamen auf unseren Server. Listen können jederzeit im Konto gelöscht werden.</p>
    `,
  },
  {
    title: 'Server & Hosting',
    body: `
      <p>Die Backend-API wird auf <code class="rounded bg-stone-100 px-1.5 py-0.5 text-xs font-mono text-stone-800">api.bredelicious.de</code> betrieben. Bei jedem Zugriff werden technische Zugriffsdaten (IP-Adresse, Zeitstempel, aufgerufene URL) im Server-Log für maximal 7 Tage gespeichert, um Fehler beheben zu können.</p>
    `,
  },
  {
    title: 'Keine Weitergabe an Dritte',
    body: `
      <p>Wir geben keine personenbezogenen Daten an Dritte weiter. Es werden keine externen Analyse- oder Tracking-Dienste verwendet.</p>
    `,
  },
  {
    title: 'Deine Rechte',
    body: `
      <p>Du hast das Recht auf Auskunft, Berichtigung und Löschung deiner gespeicherten Daten. Richte entsprechende Anfragen an
      <a href="mailto:info@bredelicious.de" class="font-medium text-emerald-800 underline-offset-2 hover:underline">info@bredelicious.de</a>.</p>
    `,
  },
]

const content = `
  <section class="px-5 pb-16 lg:px-6 lg:pb-24" aria-labelledby="datenschutz-heading">
    <div class="mx-auto max-w-3xl space-y-5">
      <h2 id="datenschutz-heading" class="sr-only">Datenschutzerklärung</h2>
      ${sections.map((s, i) => `
        <div class="reveal rounded-[1.5rem] border border-stone-200 bg-white/85 p-7 shadow-[var(--shadow-sm)] sm:p-9">
          <h2 class="font-display text-xl font-semibold text-stone-950">${s.title}</h2>
          <div class="mt-5 space-y-2 text-sm leading-7 text-stone-700">
            ${s.body}
          </div>
        </div>
      `).join('')}

      <p class="reveal pt-2 text-center text-xs text-stone-400">
        <a href="impressum.html" class="underline-offset-2 hover:underline hover:text-stone-700">Impressum</a>
      </p>
    </div>
  </section>
`

app.innerHTML = renderPageFrame({
  activePage: null,
  hero,
  content,
})

bindPageSelect(app)
setupRevealObserver(app)
