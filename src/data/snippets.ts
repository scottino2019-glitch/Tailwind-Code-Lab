import { Snippet } from "../types";

export const INITIAL_SNIPPETS: Snippet[] = [
  {
    id: 'sample-1',
    title: 'Modern Landing Button',
    description: 'A button with hover effects and shadow.',
    category: 'Basic',
    code: `<button class="px-8 py-3 bg-black text-white font-bold rounded-lg transform hover:-translate-y-1 hover:shadow-lg transition-all active:scale-95">
  Get Started
</button>`,
    versions: []
  },
  {
    id: 'sample-2',
    title: 'Product Feature Card',
    description: 'Interactive card with zoom and fake cart logic.',
    category: 'Components',
    code: `<div x-data="{ count: 0, showZoom: false }" class="max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl relative">
  <div @click="showZoom = true" class="cursor-zoom-in relative group">
    <img class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" src="https://picsum.photos/seed/tech/400/250" alt="Product" referrerPolicy="no-referrer">
    <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
       <span class="text-white font-bold text-xs uppercase tracking-widest">Click to Zoom</span>
    </div>
  </div>
  
  <div class="p-6 text-black">
    <div class="flex justify-between items-start mb-4">
      <span class="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full">New Launch</span>
      <template x-if="count > 0">
        <span class="text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded-full animate-bounce" x-text="count + ' in cart'"></span>
      </template>
    </div>
    <h3 class="text-xl font-bold mb-2">Wireless Headphones Pro</h3>
    <p class="text-slate-600 text-sm mb-6 leading-relaxed">Experience crystal clear sound with active noise cancellation and 40-hour battery life.</p>
    <div class="flex items-center justify-between">
      <span class="text-2xl font-black">$299</span>
      <button @click="count++" class="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors active:scale-90">Add to Cart</button>
    </div>
  </div>

  <!-- Zoom Modal -->
  <div x-show="showZoom" x-transition.opacity class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" @click="showZoom = false">
    <img src="https://picsum.photos/seed/tech/800/500" class="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white" @click.stop>
    <button class="absolute top-4 right-4 text-white text-4xl font-light">&times;</button>
  </div>
</div>`,
    versions: []
  },
  {
    id: 'sample-3',
    title: 'Grid Pricing Table',
    description: 'Switchable pricing (Monthly/Yearly) with transition.',
    category: 'Marketing',
    code: `<div x-data="{ yearly: false }" class="w-full max-w-6xl mx-auto p-10">
  <div class="flex items-center justify-center gap-4 mb-12">
    <span class="text-sm font-black uppercase tracking-widest" :class="!yearly ? 'text-black' : 'text-slate-400'">Monthly</span>
    <button @click="yearly = !yearly" class="w-14 h-8 bg-black rounded-full p-1 relative transition-colors">
      <div class="w-6 h-6 bg-white rounded-full transition-transform duration-300 transform" :class="yearly ? 'translate-x-6' : '' "></div>
    </button>
    <span class="text-sm font-black uppercase tracking-widest" :class="yearly ? 'text-black' : 'text-slate-400'">Yearly</span>
    <span class="bg-yellow-300 text-[10px] font-black px-2 py-1 uppercase rounded-sm">-20%</span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
      <h3 class="text-xl font-black uppercase mb-2 text-black">Essential</h3>
      <div class="text-4xl font-black mb-6 text-black">
        $<span x-text="yearly ? '150' : '19'"></span><span class="text-sm" x-text="yearly ? '/yr' : '/mo'"></span>
      </div>
      <ul class="space-y-4 mb-8 text-sm font-medium w-full text-left text-black opacity-80">
        <li class="flex items-center gap-2">✓ 10 Projects</li>
        <li class="flex items-center gap-2">✓ Basic Support</li>
        <li class="flex items-center gap-2 text-slate-400">✗ Automation</li>
      </ul>
      <button class="w-full py-3 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-colors">Select Plan</button>
    </div>
    
    <div class="relative p-8 border-2 border-black bg-yellow-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center transform md:scale-105 z-10">
      <div class="absolute -top-4 bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Most Popular</div>
      <h3 class="text-xl font-black uppercase mb-2 text-black">Professional</h3>
      <div class="text-4xl font-black mb-6 text-black">
        $<span x-text="yearly ? '390' : '49'"></span><span class="text-sm" x-text="yearly ? '/yr' : '/mo'"></span>
      </div>
      <ul class="space-y-4 mb-8 text-sm font-medium w-full text-left text-black">
        <li class="flex items-center gap-2">✓ Unlimited Projects</li>
        <li class="flex items-center gap-2">✓ 24/7 Support</li>
        <li class="flex items-center gap-2">✓ Custom API Access</li>
      </ul>
      <button class="w-full py-3 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-slate-900 transition-colors">Select Plan</button>
    </div>

    <div class="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
      <h3 class="text-xl font-black uppercase mb-2 text-black">Enterprise</h3>
      <div class="text-4xl font-black mb-6 text-black">
        $<span x-text="yearly ? '790' : '99'"></span><span class="text-sm" x-text="yearly ? '/yr' : '/mo'"></span>
      </div>
      <ul class="space-y-4 mb-8 text-sm font-medium w-full text-left text-black opacity-80">
        <li class="flex items-center gap-2">✓ Dedicated Manager</li>
        <li class="flex items-center gap-2">✓ Custom Contracts</li>
        <li class="flex items-center gap-2">✓ SSO Integration</li>
      </ul>
      <button class="w-full py-3 bg-black text-white font-bold uppercase text-xs tracking-widest hover:bg-slate-800 transition-colors">Select Plan</button>
    </div>
  </div>
</div>`,
    versions: []
  },
  {
    id: 'sample-4',
    title: 'Newsletter Hero',
    description: 'Success state simulation with Alpine.js.',
    category: 'Marketing',
    code: `<section x-data="{ success: false, loading: false }" class="bg-indigo-600 text-white py-24 px-12 text-center rounded-3xl overflow-hidden relative">
  <div x-show="!success" x-transition.duration.500ms>
    <h1 class="text-5xl font-black mb-6 tracking-tight">Stay ahead of the curve.</h1>
    <p class="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-medium">Join 10,000+ developers getting weekly insights on Tailwind CSS and modern web design.</p>
    <form @submit.prevent="loading = true; setTimeout(() => { loading = false; success = true }, 1500)" class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
      <input type="email" required placeholder="Enter your email" class="flex-1 px-6 py-4 rounded-xl text-slate-900 font-medium focus:ring-4 focus:ring-indigo-300 outline-none">
      <button class="px-8 py-4 bg-white text-indigo-600 font-black rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center min-w-[140px]">
        <span x-show="!loading">Subscribe</span>
        <svg x-show="loading" class="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </button>
    </form>
  </div>

  <div x-show="success" x-transition.scale.90.duration.500ms class="flex flex-col items-center">
    <div class="bg-white text-indigo-600 rounded-full p-4 mb-6 shadow-xl">
      <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <h2 class="text-4xl font-black mb-2">You're in!</h2>
    <p class="text-lg text-indigo-100">Check your inbox to confirm your subscription.</p>
    <button @click="success = false" class="mt-8 text-indigo-200 underline text-sm hover:text-white">Back to form</button>
  </div>
</section>`,
    versions: []
  },
  {
    id: 'sample-5',
    title: 'Functional FAQ Accordion',
    description: 'Fully interactive accordion with smooth transitions.',
    category: 'Layout',
    code: `<div x-data="{ active: 1 }" class="max-w-2xl mx-auto space-y-4 p-8">
  <div class="border-2 border-slate-200 rounded-2xl overflow-hidden bg-white transition-all shadow-sm" :class="active === 1 ? 'border-indigo-500 shadow-md' : ''">
    <button @click="active = (active === 1 ? null : 1)" class="w-full p-6 flex items-center justify-between text-left group">
      <span class="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">How does the versioning work?</span>
      <span class="text-slate-400 text-2xl transition-transform duration-300" :class="active === 1 ? 'rotate-45' : ''">+</span>
    </button>
    <div x-show="active === 1" x-collapse x-transition.duration.300ms>
      <div class="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
        Every time you click 'Commit', we store a local snapshot of your code. You can revert back through the history tab at any time using our fast recovery system.
      </div>
    </div>
  </div>

  <div class="border-2 border-slate-200 rounded-2xl overflow-hidden bg-white transition-all shadow-sm" :class="active === 2 ? 'border-indigo-500 shadow-md' : ''">
    <button @click="active = (active === 2 ? null : 2)" class="w-full p-6 flex items-center justify-between text-left group">
      <span class="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">Can I export my snippets?</span>
      <span class="text-slate-400 text-2xl transition-transform duration-300" :class="active === 2 ? 'rotate-45' : ''">+</span>
    </button>
    <div x-show="active === 2" x-collapse x-transition.duration.300ms>
      <div class="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
        Absolutely! You can use the copy button to get the Tailwind code directly, or use the external preview to see the standalone page.
      </div>
    </div>
  </div>

  <div class="border-2 border-slate-200 rounded-2xl overflow-hidden bg-white transition-all shadow-sm" :class="active === 3 ? 'border-indigo-500 shadow-md' : ''">
    <button @click="active = (active === 3 ? null : 3)" class="w-full p-6 flex items-center justify-between text-left group">
      <span class="font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors">Is this tool free?</span>
      <span class="text-slate-400 text-2xl transition-transform duration-300" :class="active === 3 ? 'rotate-45' : ''">+</span>
    </button>
    <div x-show="active === 3" x-collapse x-transition.duration.300ms>
      <div class="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
        Yes, this lab is open for experimentation. We believe in sharing cool Tailwind recipes with the community!
      </div>
    </div>
  </div>
</div>`,
    versions: []
  }
];
