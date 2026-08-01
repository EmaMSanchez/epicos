import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = path.join(process.cwd(), "WhatsApp Unknown 2026-07-31 at 17.16.39");
const outputDirectory = path.join(process.cwd(), "public", "products");

const views = [
  ["WhatsApp Image 2026-07-27 at 11.59.31.jpeg", "branca-archivo.webp", { brightness: 1.015, saturation: 0.95 }],
  ["WhatsApp Image 2026-07-27 at 11.59.30.jpeg", "branca-aguila.webp", { brightness: 0.985, saturation: 0.9 }],
];

await mkdir(outputDirectory, { recursive: true });

for (const [source, output, modulation] of views) {
  await sharp(path.join(sourceDirectory, source))
    .resize(900, 1400, { fit: "fill" })
    .modulate(modulation)
    .sharpen({ sigma: 0.65 })
    .webp({ quality: 88, smartSubsample: true })
    .toFile(path.join(outputDirectory, output));
}

console.log("Prepared aligned Branca assets in public/products.");
