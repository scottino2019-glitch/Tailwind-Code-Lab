import { Snippet } from "../types";

export const INITIAL_SNIPPETS: Snippet[] = [
  {
    id: 'btn-primary',
    title: 'Pulsante Primario',
    description: 'Un pulsante classico con effetto hover e focus.',
    category: 'Basic',
    code: `<button class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
  Cliccami
</button>`,
    versions: []
  },
  {
    id: 'card-product',
    title: 'Carta Prodotto',
    description: 'Una scheda prodotto con immagine, titolo, prezzo e bottone.',
    category: 'Components',
    code: `<div class="max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
  <img class="w-full h-48 object-cover" src="https://picsum.photos/seed/tech/400/300" alt="Prodotto" />
  <div class="p-6">
    <div class="flex items-center justify-between mb-2">
      <span class="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded-full uppercase">Nuovo</span>
      <span class="text-gray-500 text-sm font-medium">Electronics</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 mb-2">Smart Gadget X1</h3>
    <p class="text-gray-600 text-sm mb-4 leading-relaxed">
      L'ultima frontiera della tecnologia nel palmo della tua mano. Design elegante e prestazioni imbattibili.
    </p>
    <div class="flex items-center justify-between">
      <span class="text-2xl font-bold text-gray-900">€299.00</span>
      <button class="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
        Aggiungi al Carrello
      </button>
    </div>
  </div>
</div>`,
    versions: []
  },
  {
    id: 'hero-modern',
    title: 'Hero Section Moderna',
    description: 'Sezione hero con testo centrato, gradiente e bottoni.',
    category: 'Layout',
    code: `<section class="relative py-20 bg-gray-900 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
  <div class="container mx-auto px-4 relative z-10 text-center">
    <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
      Costruisci il Futuro <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Oggi Stesso</span>
    </h1>
    <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
      Una piattaforma intuitiva per sviluppatori che vogliono accelerare il proprio workflow senza compromettere la qualità.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a href="#" class="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all">Inizia Ora</a>
      <a href="#" class="px-8 py-3 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-all">Scopri di più</a>
    </div>
  </div>
</section>`,
    versions: []
  },
  {
    id: 'navbar-glass',
    title: 'Navbar Glassmorphism',
    description: 'Header trasparente con effetto blur.',
    category: 'Layout',
    code: `<nav class="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 px-6 py-4 flex items-center justify-between">
  <div class="flex items-center gap-2">
    <div class="w-8 h-8 bg-blue-600 rounded-lg"></div>
    <span class="text-xl font-bold tracking-tight">CodeLab</span>
  </div>
  <div class="hidden md:flex items-center gap-8">
    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Esempi</a>
    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Temi</a>
    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Docs</a>
  </div>
  <button class="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
    Entra
  </button>
</nav>`,
    versions: []
  },
  {
    id: 'form-contact',
    title: 'Modulo Contatti',
    description: 'Form pulito con etichette e input stilizzati.',
    category: 'Forms',
    code: `<div class="max-w-md mx-auto p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-6 font-sans">Contattaci</h2>
  <form class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
      <input type="text" class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Mario Rossi" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input type="email" class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="mario@esempio.it" />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
      <textarea rows="4" class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" placeholder="Come possiamo aiutarti?"></textarea>
    </div>
    <button type="submit" class="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
      Invia Messaggio
    </button>
  </form>
</div>`,
    versions: []
  }
];
