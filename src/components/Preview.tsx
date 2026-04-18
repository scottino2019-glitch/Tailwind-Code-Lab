import React from 'react';

interface PreviewProps {
  code: string;
  theme?: 'light' | 'dark' | 'sepia' | 'slate';
}

const Preview: React.FC<PreviewProps> = ({ code, theme = 'light' }) => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const themeConfig = {
    light: { bg: '#ffffff', text: '#000000' },
    dark: { bg: '#0f172a', text: '#ffffff' },
    sepia: { bg: '#f4ecd8', text: '#5b4636' },
    slate: { bg: '#e2e8f0', text: '#0f172a' },
  };

  const currentTheme = themeConfig[theme];

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
        <style>
          body { 
            margin: 0; 
            padding: 2rem; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            min-height: 100vh; 
            background-color: ${currentTheme.bg}; 
            color: ${currentTheme.text};
            transition: background-color 0.3s ease;
          }
        </style>
      </head>
      <body>
        ${code}
      </body>
    </html>
  `;

  return (
    <div className="w-full h-full bg-slate-50 relative overflow-hidden flex items-center justify-center">
      <iframe
        key={code.length > 0 ? code : 'empty'}
        ref={iframeRef}
        title="Live Preview"
        srcDoc={srcDoc}
        className="w-full h-full border-none"
        sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"
      />
    </div>
  );
};

export default Preview;
