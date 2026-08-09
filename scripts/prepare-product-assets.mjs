import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const productsDirectory = path.join(process.cwd(), "public", "products");

const assets = [
  ["vasos/Branca-vaso_frente.png", "catalog/vasos-tubo/branca-frente.webp"],
  ["vasos/Branca-vaso_dorso.png", "catalog/vasos-tubo/branca-dorso.webp"],
  ["vasos/Diego_immortal-vaso_frente.png", "catalog/vasos-tubo/inmortal-frente.webp"],
  ["vasos/Diego_inmotal-caso-dorso.png", "catalog/vasos-tubo/inmortal-dorso.webp"],
  ["vasos/Diego_scudetto-1988_-vasofrente.png", "catalog/vasos-tubo/scudetto-frente.webp"],
  ["vasos/Diego_scudetto-1988_vaso-dorso.png", "catalog/vasos-tubo/scudetto-dorso.webp"],
  ["vasos/River-Vaso_doble.png", "catalog/vasos-tubo/river-10.webp"],
  ["vasos/Boca-vaso-doble.png", "catalog/vasos-tubo/boca-10.webp"],
  ["Termicos/Argentina-termico_frente.png", "catalog/termicos/argentina-frente.webp"],
  ["Termicos/Argentina-termico-dorso.png", "catalog/termicos/argentina-dorso.webp"],
  ["Termicos/Boca-termico_frente.png", "catalog/termicos/boca-frente.webp"],
  ["Termicos/Boca-termico_dorso.png", "catalog/termicos/boca-dorso.webp"],
  ["Termicos/River-termico_frente.png", "catalog/termicos/river-frente.webp"],
  ["Termicos/River-termico_dorso.png", "catalog/termicos/river-dorso.webp"],
  ["Ferneteros/messi_frente_silhouette_1200.png", "catalog/ferneteros/messi-argentina-frente.webp"],
  ["Ferneteros/messi_10_dorso_1893_1200.png", "catalog/ferneteros/messi-argentina-dorso.webp"],
  ["Ferneteros/Messi-fernetero_frente.png", "catalog/ferneteros/sangre-campeones-frente.webp"],
  ["Ferneteros/Diego-fernetero.png", "catalog/ferneteros/sangre-campeones-dorso.webp"],
  ["Ferneteros/Messi-fernetero-azul.png", "catalog/ferneteros/messi-azul.webp"],
  ["Ferneteros/Xeneise-fernetero_frente.png", "catalog/ferneteros/xeneize-frente.webp"],
  ["Ferneteros/Xeneise-fernetero_dorso.png", "catalog/ferneteros/xeneize-dorso.webp"],
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
