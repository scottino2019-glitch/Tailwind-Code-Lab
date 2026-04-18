import { Snippet } from "../types";

export const INITIAL_SNIPPETS: Snippet[] = [
  {
    id: '1',
    title: 'Modern Landing Button',
    description: 'A button with hover effects and shadow.',
    category: 'Basic',
    code: `<button class="px-8 py-3 bg-black text-white font-bold rounded-lg transform hover:-translate-y-1 hover:shadow-lg transition-all active:scale-95">
  Get Started
</button>`,
    versions: []
  },
  {
    id: '2',
    title: 'Product Feature Card',
    description: 'A clean card with image and badge.',
    category: 'Components',
    code: `<div class="max-w-sm rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
  <img class="w-full h-48 object-cover" src="https://picsum.photos/seed/tech/400/250" alt="Product" referrerPolicy="no-referrer">
  <div class="p-6">
    <span class="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full mb-4">New Launch</span>
    <h3 class="text-xl font-bold text-slate-900 mb-2">Wireless Headphones Pro</h3>
    <p class="text-slate-600 text-sm mb-6">Experience crystal clear sound with active noise cancellation and 40-hour battery life.</p>
    <div class="flex items-center justify-between">
      <span class="text-2xl font-black">$299</span>
      <button class="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors">Add to Cart</button>
    </div>
  </div>
</div>`,
    versions: []
  },
  {
    id: '3',
    title: 'Grid Pricing Table',
    description: 'A responsive pricing section with high contrast.',
    category: 'Marketing',
    code: `<div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 max-w-6xl mx-auto">
  <div class="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
    <h3 class="text-xl font-black uppercase mb-2 text-black">Essential</h3>
    <div class="text-4xl font-black mb-6 text-black">$19<span class="text-sm">/mo</span></div>
    <ul class="space-y-4 mb-8 text-sm font-medium w-full text-left text-black">
      <li class="flex items-center gap-2">✓ 10 Projects</li>
      <li class="flex items-center gap-2">✓ Basic Support</li>
      <li class="flex items-center gap-2 text-slate-400">✗ Automation</li>
    </ul>
    <button class="w-full py-3 bg-black text-white font-bold uppercase text-xs tracking-widest">Select Plan</button>
  </div>
  
  <div class="relative p-8 border-2 border-black bg-yellow-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center transform md:scale-105">
    <div class="absolute -top-4 bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">Most Popular</div>
    <h3 class="text-xl font-black uppercase mb-2 text-black">Professional</h3>
    <div class="text-4xl font-black mb-6 text-black">$49<span class="text-sm">/mo</span></div>
    <ul class="space-y-4 mb-8 text-sm font-medium w-full text-left text-black">
      <li class="flex items-center gap-2">✓ Unlimited Projects</li>
      <li class="flex items-center gap-2">✓ 24/7 Support</li>
      <li class="flex items-center gap-2">✓ Custom API Access</li>
    </ul>
    <button class="w-full py-3 bg-black text-white font-bold uppercase text-xs tracking-widest">Select Plan</button>
  </div>

  <div class="p-8 border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
    <h3 class="text-xl font-black uppercase mb-2 text-black">Enterprise</h3>
    <div class="text-4xl font-black mb-6 text-black">$99<span class="text-sm">/mo</span></div>
    <ul class="space-y-4 mb-8 text-sm font-medium w-full text-left text-black">
      <li class="flex items-center gap-2">✓ Dedicated Manager</li>
      <li class="flex items-center gap-2">✓ Custom Contracts</li>
      <li class="flex items-center gap-2">✓ SSO Integration</li>
    </ul>
    <button class="w-full py-3 bg-black text-white font-bold uppercase text-xs tracking-widest">Select Plan</button>
  </div>
</div>`,
    versions: []
  },
  {
    id: '4',
    title: 'Newsletter Hero',
    description: 'A bold, minimalist hero section for subscriptions.',
    category: 'Marketing',
    code: `<section class="bg-indigo-600 text-white py-24 px-12 text-center rounded-3xl">
  <h1 class="text-5xl font-black mb-6 tracking-tight">Stay ahead of the curve.</h1>
  <p class="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-medium">Join 10,000+ developers getting weekly insights on Tailwind CSS and modern web design.</p>
  <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
    <input type="email" placeholder="Enter your email" class="flex-1 px-6 py-4 rounded-xl text-slate-900 font-medium focus:ring-4 focus:ring-indigo-300 outline-none">
    <button class="px-8 py-4 bg-white text-indigo-600 font-black rounded-xl hover:bg-slate-50 transition-colors">Subscribe</button>
  </form>
  <p class="mt-4 text-xs text-indigo-200">No spam, just quality. Unsubscribe at any time.</p>
</section>`,
    versions: []
  },
  {
    id: '5',
    title: 'Sleek FAQ Accordion',
    description: 'A modern FAQ section with interactive feels.',
    category: 'Layout',
    code: `<div class="max-w-2xl mx-auto space-y-4 p-8">
  <div class="border border-slate-200 rounded-2xl p-6 bg-white hover:border-slate-400 transition-colors shadow-sm">
    <h4 class="font-bold text-lg flex items-center justify-between cursor-pointer text-slate-900">
      How does the versioning work?
      <span class="text-slate-400 text-2xl">+</span>
    </h4>
    <p class="mt-4 text-slate-600 leading-relaxed font-medium">Every time you click 'Commit', we store a local snapshot of your code. You can revert back through the history tab at any time.</p>
  </div>
  <div class="border border-slate-200 rounded-2xl p-6 bg-white">
    <h4 class="font-bold text-lg flex items-center justify-between cursor-pointer text-slate-400">
      Can I export my snippets?
      <span class="text-2xl">+</span>
    </h4>
  </div>
  <div class="border border-slate-200 rounded-2xl p-6 bg-white">
    <h4 class="font-bold text-lg flex items-center justify-between cursor-pointer text-slate-400">
      Is this tool free?
      <span class="text-2xl">+</span>
    </h4>
  </div>
</div>`,
    versions: []
  }
];
