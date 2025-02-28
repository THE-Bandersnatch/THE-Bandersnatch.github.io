import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Run the Vite build
console.log('Running Vite build...');
execSync('npx vite build', { stdio: 'inherit' });

// Ensure .nojekyll file exists
console.log('Creating .nojekyll file...');
fs.writeFileSync(path.join(__dirname, 'docs', '.nojekyll'), '');

console.log('Build completed successfully!'); 