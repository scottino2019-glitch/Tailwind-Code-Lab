import React, { useState, useEffect, useCallback } from 'react';
import { 
  Code2, 
  Library, 
  History, 
  Settings, 
  Play, 
  Copy, 
  Check, 
  Plus, 
  Trash2, 
  Menu,
  ChevronRight,
  Search,
  Layout,
  Palette,
  ExternalLink,
  Save,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast, Toaster } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@/components/ui/resizable';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
} from '@/components/ui/sidebar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

import { Snippet, Category, SnippetVersion } from './types';
import { INITIAL_SNIPPETS } from './data/snippets';
import Preview from './components/Preview';

const CATEGORIES: Category[] = ['Basic', 'Components', 'Layout', 'Forms', 'Marketing'];

export default function App() {
  const [snippets, setSnippets] = useState<Snippet[]>(() => {
    try {
      const saved = localStorage.getItem('tailwind-lab-snippets');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Identify current sample titles to filter out old duplicates/clones
          const sampleTitles = INITIAL_SNIPPETS.map(s => s.title);
          
          // Keep only truly custom user snippets
          const userSnippets = parsed.filter((s: any) => 
            s && 
            !s.id?.startsWith('sample-') && 
            !sampleTitles.includes(s.title)
          );
          
          // Always prepend initial snippets to ensure they are available and up to date
          return [...INITIAL_SNIPPETS, ...userSnippets];
        }
      }
    } catch (e) {
      console.error('Local storage error:', e);
    }
    return INITIAL_SNIPPETS;
  });
  
  const [currentSnippetId, setCurrentSnippetId] = useState<string>(() => {
    return INITIAL_SNIPPETS[0]?.id || '';
  });
  const [editingCode, setEditingCode] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [isCopied, setIsCopied] = useState(false);

  const currentSnippet = snippets.find(s => s.id === currentSnippetId) || snippets[0] || INITIAL_SNIPPETS[0];

  useEffect(() => {
    if (currentSnippet) {
      setEditingCode(currentSnippet.code);
    }
  }, [currentSnippetId, currentSnippet?.code]);

  useEffect(() => {
    localStorage.setItem('tailwind-lab-snippets', JSON.stringify(snippets));
  }, [snippets]);

  const handleSave = useCallback(() => {
    const newVersion: SnippetVersion = {
      id: Math.random().toString(36).substr(2, 9),
      code: editingCode,
      timestamp: Date.now(),
      label: `Versione ${currentSnippet.versions.length + 1}`
    };

    setSnippets(prev => prev.map(s => 
      s.id === currentSnippetId 
        ? { ...s, code: editingCode, versions: [newVersion, ...s.versions].slice(0, 10) } 
        : s
    ));
    
    toast.success('Snippet salvato nella cronologia');
  }, [editingCode, currentSnippetId, currentSnippet.versions.length]);

  const handleCopy = () => {
    navigator.clipboard.writeText(editingCode);
    setIsCopied(true);
    toast.success('Codice copiato negli appunti!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const restoreVersion = (versionCode: string) => {
    setEditingCode(versionCode);
    toast.info('Versione ripristinata');
  };

  const filteredSnippets = snippets.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         s.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const [isAddingSnippet, setIsAddingSnippet] = useState(false);
  const [newSnippetData, setNewSnippetData] = useState({ title: '', description: '', category: 'Basic' as Category });

  const addNewSnippet = () => {
    if (!newSnippetData.title) return;
    
    const newSnippet: Snippet = {
      id: Math.random().toString(36).substr(2, 9),
      title: newSnippetData.title,
      description: newSnippetData.description,
      category: newSnippetData.category,
      code: '<!-- Nuovo Snippet -->\n<div class="p-8 bg-blue-50 rounded-xl text-blue-800 font-bold">\n  Modificami nel laboratorio!\n</div>',
      versions: []
    };

    setSnippets(prev => [newSnippet, ...prev]);
    setCurrentSnippetId(newSnippet.id);
    setIsAddingSnippet(false);
    setNewSnippetData({ title: '', description: '', category: 'Basic' });
    toast.success('Nuovo snippet creato!');
  };

  const deleteSnippet = (id: string) => {
    const isProtected = INITIAL_SNIPPETS.some(s => s.id === id);
    if (isProtected) {
      toast.error('Esempi di sistema protetti. Non possono essere eliminati.');
      return;
    }

    if (snippets.length <= 1) {
      toast.error('Devi avere almeno uno snippet.');
      return;
    }
    
    setSnippets(prev => prev.filter(s => s.id !== id));
    if (currentSnippetId === id) {
      const remaining = snippets.filter(s => s.id !== id);
      setCurrentSnippetId(remaining[0]?.id || INITIAL_SNIPPETS[0].id);
    }
    toast.info('Snippet rimosso.');
  };

  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark' | 'sepia' | 'slate'>('light');

  const THEMES = [
    { id: 'light', label: 'Chiaro', bg: 'bg-white' },
    { id: 'dark', label: 'Scuro', bg: 'bg-slate-900' },
    { id: 'sepia', label: 'Seppia', bg: 'bg-[#f4ecd8]' },
    { id: 'slate', label: 'Ardesia', bg: 'bg-slate-200' },
  ];

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-white text-black font-sans overflow-hidden border-[4px] border-black">
        <Toaster position="top-right" />
        
        <Sidebar className="border-r-2 border-black">
          <SidebarHeader className="p-6 border-b-2 border-black bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="logo text-3xl font-[900] tracking-[-2px] uppercase">
                SNIPPET_LAB.01
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                <Input 
                  placeholder="SEARCH..." 
                  className="pl-9 h-10 rounded-none border-2 border-black bg-slate-50 placeholder:text-slate-400 font-bold uppercase text-[10px] tracking-wider"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Dialog open={isAddingSnippet} onOpenChange={setIsAddingSnippet}>
                <DialogTrigger render={
                  <Button className="w-full justify-center gap-2 bg-black hover:bg-slate-800 text-white rounded-none h-10 font-black uppercase text-[10px] tracking-widest transition-none" size="sm">
                    <Plus className="w-4 h-4" />
                    New Snippet
                  </Button>
                } />
                <DialogContent className="sm:max-w-md rounded-none border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <DialogHeader>
                    <DialogTitle className="uppercase font-black text-xl tracking-tighter">Create New Snippet</DialogTitle>
                    <DialogDescription className="font-medium text-slate-600">
                      Add a new Tailwind experiment to your library.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest">Title</label>
                      <Input 
                        placeholder="Es: Modern Card v2" 
                        value={newSnippetData.title}
                        onChange={(e) => setNewSnippetData({ ...newSnippetData, title: e.target.value })}
                        className="rounded-none border-2 border-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest">Description</label>
                      <Input 
                        placeholder="Es: Shadow variant..." 
                        value={newSnippetData.description}
                        onChange={(e) => setNewSnippetData({ ...newSnippetData, description: e.target.value })}
                        className="rounded-none border-2 border-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest">Category</label>
                      <select 
                        className="w-full flex h-10 rounded-none border-2 border-black bg-background px-3 py-2 text-sm focus:outline-none"
                        value={newSnippetData.category}
                        onChange={(e) => setNewSnippetData({ ...newSnippetData, category: e.target.value as Category })}
                      >
                        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddingSnippet(false)} className="rounded-none border-2 border-black font-bold uppercase text-[10px]">Back</Button>
                    <Button onClick={addNewSnippet} className="bg-black hover:bg-slate-800 text-white rounded-none font-bold uppercase text-[10px]">Create</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="bg-slate-100">
            <SidebarGroup>
              <SidebarGroupLabel className="px-6 py-4 text-[10px] uppercase tracking-[2px] font-black text-slate-500 border-b border-slate-200">Library Sections</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="flex flex-wrap gap-2 p-4 pt-6">
                  <Badge 
                    variant={activeCategory === 'All' ? 'default' : 'outline'}
                    className={`cursor-pointer rounded-none border-2 border-black font-black text-[9px] uppercase tracking-wider px-2 py-0.5 ${activeCategory === 'All' ? 'bg-black text-white' : 'bg-white text-black'}`}
                    onClick={() => setActiveCategory('All')}
                  >
                    All
                  </Badge>
                  {CATEGORIES.map(cat => (
                    <Badge 
                      key={cat}
                      variant={activeCategory === cat ? 'default' : 'outline'}
                      className={`cursor-pointer rounded-none border-2 border-black font-black text-[9px] uppercase tracking-wider px-2 py-0.5 ${activeCategory === cat ? 'bg-black text-white' : 'bg-white text-black'}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredSnippets.map((snippet) => (
                    <SidebarMenuItem key={snippet.id} className="border-b border-slate-200">
                      <SidebarMenuButton 
                        isActive={currentSnippetId === snippet.id}
                        onClick={() => setCurrentSnippetId(snippet.id)}
                        className={`py-8 px-6 group transition-none ${currentSnippetId === snippet.id ? 'bg-black text-white hover:bg-black hover:text-white' : 'bg-transparent text-black hover:bg-slate-200'}`}
                      >
                        <div className="flex flex-col items-start gap-1 overflow-hidden flex-1">
                          <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{snippet.category}</span>
                          <span className="font-black text-sm tracking-tight w-full">{snippet.title.toUpperCase()}</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col min-w-0 bg-white">
          {/* Header Bar */}
          <header className="h-20 border-b-2 border-black flex items-center justify-between px-6 shrink-0 z-10">
            <div className="flex items-center gap-6">
              <SidebarTrigger className="lg:hidden" />
              <div className="flex items-center gap-3">
                <h2 className="font-black text-2xl tracking-tighter uppercase">{currentSnippet.title}</h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 border-l-2 border-black pl-6 h-8 font-black text-[10px] uppercase tracking-widest text-slate-500">
                Category / <span className="text-black">{currentSnippet.category}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {!INITIAL_SNIPPETS.some(s => s.id === currentSnippetId) && (
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-none border-2 border-black h-10 w-10 hover:bg-red-50 hover:text-red-600 transition-none" 
                  onClick={() => deleteSnippet(currentSnippetId)}
                  title="Elimina Snippet"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-none border-2 border-black h-10 w-10 hover:bg-slate-50 transition-none" 
                onClick={() => {
                  const win = window.open('', '_blank');
                  if (win) {
                    win.document.write(`
                      <html>
                        <head>
                          <meta charset="UTF-8">
                          <title>${currentSnippet.title} - Preview</title>
                          <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
                        </head>
                        <body class="bg-slate-50 min-h-screen">
                          <div class="p-12 flex justify-center items-start">
                            <div class="w-full">
                              ${editingCode}
                            </div>
                          </div>
                        </body>
                      </html>
                    `);
                    win.document.close();
                  }
                }}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleSave} className="hidden sm:flex items-center gap-2 rounded-none border-2 border-black h-10 px-4 font-black uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-none">
                <Save className="w-4 h-4" />
                Commit
              </Button>
              <Button size="sm" className="bg-black hover:bg-slate-800 text-white rounded-none h-10 px-6 font-black uppercase text-[10px] tracking-widest transition-none" onClick={handleCopy}>
                {isCopied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                {isCopied ? 'Copy Code' : 'Copy'}
              </Button>
            </div>
          </header>

          <div className="flex-1 overflow-hidden">
            <ResizablePanelGroup direction="horizontal" className="h-full">
              <ResizablePanel defaultSize={45} minSize={30}>
                <div className="flex flex-col h-full border-r-2 border-black relative">
                  <div className="bg-blue-600 text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest flex items-center shrink-0 border-b-2 border-black">
                    EDITOR.JSX
                  </div>
                  <ScrollArea className="flex-1 bg-[#18181b]">
                    <Textarea 
                      value={editingCode}
                      onChange={(e) => setEditingCode(e.target.value)}
                      className="w-full h-[calc(100vh-140px)] min-h-full p-8 font-mono text-sm border-none focus-visible:ring-0 bg-transparent text-[#e4e4e7] selection:bg-blue-500/40 resize-none leading-relaxed"
                      spellCheck={false}
                    />
                  </ScrollArea>
                </div>
              </ResizablePanel>
              
              <ResizableHandle className="w-1.5 bg-black" />
              
              <ResizablePanel defaultSize={55} minSize={30}>
                <div className="flex flex-col h-full overflow-hidden">
                  <Tabs defaultValue="preview" className="flex-1 flex flex-col">
                    <div className="px-6 border-b-2 border-black bg-white shrink-0 flex items-center justify-between h-14">
                      <TabsList className="bg-transparent border-none p-0 h-full gap-8">
                        <TabsTrigger value="preview" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-black rounded-none h-full px-0 text-[10px] font-black uppercase tracking-[2px] transition-none">
                          Preview
                        </TabsTrigger>
                        <TabsTrigger value="history" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-black rounded-none h-full px-0 text-[10px] font-black uppercase tracking-[2px] transition-none flex gap-2">
                          History
                          {currentSnippet.versions.length > 0 && (
                            <span className="ml-1 bg-black text-white px-1.5 py-0.5 text-[8px] font-bold">{currentSnippet.versions.length}</span>
                          )}
                        </TabsTrigger>
                      </TabsList>

                      <div className="flex items-center gap-4">
                        <span className="text-[9px] font-black uppercase tracking-[2px] text-slate-400">Themes</span>
                        <div className="flex p-1 bg-slate-50 border-2 border-black gap-1.5">
                          {THEMES.map(theme => (
                            <button
                              key={theme.id}
                              onClick={() => setPreviewTheme(theme.id as any)}
                              className={`w-4 h-4 rounded-none border-2 transition-all ${theme.bg} ${previewTheme === theme.id ? 'border-blue-600 scale-110 ring-2 ring-blue-600 ring-offset-2 z-10' : 'border-black/20 hover:border-black'}`}
                              title={theme.label}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <TabsContent value="preview" className="flex-1 m-0 overflow-hidden relative">
                      <div className="absolute top-0 left-0 bg-white border-r-2 border-b-2 border-black px-4 py-1 font-black text-[9px] tracking-widest z-10 uppercase">
                        Live_Preview
                      </div>
                      <Preview code={editingCode} theme={previewTheme} />
                    </TabsContent>
                    
                    <TabsContent value="history" className="flex-1 m-0 p-10 bg-slate-50 overflow-y-auto">
                      <div className="max-w-xl mx-auto space-y-8">
                        <div className="flex items-center gap-3 pb-4 border-b-2 border-black">
                          <History className="w-5 h-5" />
                          <h3 className="font-black uppercase tracking-widest text-lg">Commit History</h3>
                        </div>
                        
                        {currentSnippet.versions.length === 0 ? (
                          <div className="p-16 text-center border-4 border-dashed border-slate-200">
                            <Clock className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                            <p className="font-black uppercase text-slate-400 tracking-wider">No commits recorded.</p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {currentSnippet.versions.map((v) => (
                              <Card key={v.id} className="p-6 rounded-none border-2 border-black flex items-center justify-between hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-none group bg-white">
                                <div className="flex items-center gap-6">
                                  <div className="w-12 h-12 bg-black flex items-center justify-center font-black text-white text-xs uppercase tracking-tighter">
                                    VER
                                  </div>
                                  <div>
                                    <p className="font-black text-sm uppercase tracking-tight">{v.label || 'Commit'}</p>
                                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                                      {new Date(v.timestamp).toLocaleString('it-IT', { 
                                        hour: '2-digit', 
                                        minute: '2-digit',
                                        day: '2-digit',
                                        month: 'short'
                                      })}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button className="rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-none h-10 font-black uppercase text-[10px] tracking-widest px-6" variant="outline" onClick={() => restoreVersion(v.code)}>
                                    Checkout
                                  </Button>
                                </div>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </main>
      </div>

    </SidebarProvider>
  );
}
