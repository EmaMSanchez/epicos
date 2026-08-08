import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const productsDirectory = path.join(process.cwd(), "public", "products");

const assets = [
  ["bolsa_epicos (3)/Branca-vaso_frente.png", "catalog/vasos-tubo/branca-frente.webp"],
  ["bolsa_epicos (3)/Branca-vaso_dorso.png", "catalog/vasos-tubo/branca-dorso.webp"],
  ["bolsa_epicos (3)/Diego_immortal-vaso_frente.png", "catalog/vasos-tubo/inmortal-frente.webp"],
  ["bolsa_epicos (3)/Diego_inmotal-caso-dorso.png", "catalog/vasos-tubo/inmortal-dorso.webp"],
  ["bolsa_epicos (3)/Diego_scudetto-1988_-vasofrente.png", "catalog/vasos-tubo/scudetto-frente.webp"],
  ["bolsa_epicos (3)/Diego_scudetto-1988_vaso-dorso.png", "catalog/vasos-tubo/scudetto-dorso.webp"],
  ["bolsa_epicos (3)/River-Vaso_doble.png", "catalog/vasos-tubo/river-10.webp"],
  ["bolsa_epicos (3)/Boca-vaso-doble.png", "catalog/vasos-tubo/boca-10.webp"],
  ["bolsa_epicos (2)/Argentina-termico_frente.png", "catalog/termicos/argentina-frente.webp"],
  ["bolsa_epicos (2)/Boca-termico_frente.png", "catalog/termicos/boca-frente.webp"],
  ["bolsa_epicos (2)/Boca-termico_dorso.png", "catalog/termicos/boca-dorso.webp"],
  ["bolsa_epicos (2)/River-termico_frente.png", "catalog/termicos/river-frente.webp"],
  ["bolsa_epicos (2)/River-termico_dorso.png", "catalog/termicos/river-dorso.webp"],
  ["bolsa_epicos/messi_frente_silhouette_1200.png", "catalog/ferneteros/messi-argentina-frente.webp"],
  ["bolsa_epicos/messi_10_dorso_1893_1200.png", "catalog/ferneteros/messi-argentina-dorso.webp"],
  ["bolsa_epicos/Messi-fernetero.png", "catalog/ferneteros/messi-argentina-detalle.webp"],
  ["bolsa_epicos/Messi-fernetero-azul.png", "catalog/ferneteros/messi-azul.webp"],
  ["bolsa_epicos/Diego-fernetero.png", "catalog/ferneteros/diego.webp"],
  ["bolsa_epicos/ChatGPT Image 8 ago 2026, 11_57_37 a.m..png", "catalog/ferneteros/xeneize-frente.webp"],
  ["bolsa_epicos/Xeneise-fernetero_dorso.png", "catalog/ferneteros/xeneize-dorso.webp"],
  ["bolsa_epicos.png", "catalog/packaging.webp"],
];

for (const [source, output] of assets) {
  const outputPath = path.join(productsDirectory, output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await sharp(path.join(productsDirectory, source))
    .resize({ width: 1200, height: 1400, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 84, smartSubsample: true })
    .toFile(outputPath);
}

console.log(`Prepared ${assets.length} optimized catalog assets.`);
