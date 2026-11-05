// Builds a tiny Shippori Mincho subset that holds only the Japanese
// characters the site actually uses, so the full CJK font is never shipped.
// Run again after adding new kanji or kana: node scripts/subset-mincho.mjs
import {
    mkdirSync,
    readdirSync,
    readFileSync,
    statSync,
    writeFileSync,
} from 'node:fs';
import { join } from 'node:path';

const root = 'resources/js';
const out = 'resources/fonts/shippori-mincho';
const weights = [400, 500];

function files(dir) {
    return readdirSync(dir).flatMap((name) => {
        const path = join(dir, name);
        return statSync(path).isDirectory() ? files(path) : [path];
    });
}

const chars = new Set('。、・ー');
for (const file of files(root).filter((f) => /\.(tsx?|json)$/.test(f))) {
    for (const ch of readFileSync(file, 'utf8')) {
        if (/[　-ヿ一-鿿＀-￯]/.test(ch)) chars.add(ch);
    }
}
const text = [...chars].sort().join('');
console.log(`${chars.size} characters: ${text}`);

mkdirSync(out, { recursive: true });
for (const weight of weights) {
    const css = await fetch(
        `https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@${weight}&text=${encodeURIComponent(text)}`,
        {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36',
            },
        },
    ).then((r) => r.text());
    const url = css.match(/url\((https:[^)]+)\)/)?.[1];
    if (!url) throw new Error(`No font URL for weight ${weight}:\n${css}`);
    const font = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
    writeFileSync(join(out, `ShipporiMincho-${weight}.woff2`), font);
    console.log(`weight ${weight}: ${font.length} bytes`);
}
