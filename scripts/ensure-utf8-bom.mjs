/**
 * static/files 内の .txt / .csv に UTF-8 BOM を付与（Windows で日本語が文字化けしないようにする）
 * 使い方: node scripts/ensure-utf8-bom.mjs [ファイルパス...]
 * 引数なしの場合は static/files 以下の .txt と .csv をすべて処理
 */
import fs from 'fs';
import path from 'path';

const BOM = '\uFEFF';
const defaultDir = path.join('static', 'files');

function ensureBom(filePath) {
  const raw = fs.readFileSync(filePath);
  let text = raw.toString('utf8');
  if (text.charCodeAt(0) === 0xfeff) {
    console.log(`skip (already BOM): ${filePath}`);
    return;
  }
  // UTF-8 として不正なバイト列があれば警告
  const reencoded = Buffer.from(text, 'utf8');
  if (!raw.equals(reencoded) && raw.length !== reencoded.length + 3) {
    console.warn(`warn: ${filePath} may not be valid UTF-8`);
  }
  fs.writeFileSync(filePath, BOM + text.replace(/^\uFEFF/, ''), 'utf8');
  console.log(`BOM added: ${filePath}`);
}

const args = process.argv.slice(2);
const files =
  args.length > 0
    ? args
    : fs
        .readdirSync(defaultDir)
        .filter((f) => f.endsWith('.txt') || f.endsWith('.csv'))
        .map((f) => path.join(defaultDir, f));

for (const file of files) {
  ensureBom(file);
}
