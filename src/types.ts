export type Category = 'Basic' | 'Components' | 'Layout' | 'Marketing' | 'Forms';

export interface SnippetVersion {
  id: string;
  code: string;
  timestamp: number;
  label?: string;
}

export interface Snippet {
  id: string;
  title: string;
  description: string;
  category: Category;
  code: string;
  versions: SnippetVersion[];
}
