import fs from 'node:fs';
import path from 'node:path';

const imgDir = path.join('build', 'img');

const filesToRemove = [
  'docusaurus-social-card.jpg',
  'docusaurus.png',
  'undraw_docusaurus_mountain.svg',
  'undraw_docusaurus_react.svg',
];

for (const file of filesToRemove) {
  const filePath = path.join(imgDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`removed: build/img/${file}`);
  }
}
