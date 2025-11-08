const fs = require('fs');
const path = require('path');

const scriptContent = fs.readFileSync(
  path.join(__dirname, '..', 'public', 'dashboard-console-capture.js'),
  'utf8'
);

const inlineScript = `<script>${scriptContent}</script>`;

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture')) {
    return;
  }
  
  content = content.replace('</head>', `${inlineScript}</head>`);
  fs.writeFileSync(filePath, content);
  console.log(`Injected console capture into ${filePath}`);
}

const outDir = path.join(__dirname, '..', '.next', 'server', 'app');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

if (fs.existsSync(outDir)) {
  walkDir(outDir);
  console.log('Console capture injection complete');
} else {
  console.log('Build output directory not found');
}