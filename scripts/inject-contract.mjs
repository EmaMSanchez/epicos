import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const contract = `<!--
THESIS: Cada vaso se descubre como una pieza de colección; rechazamos la cuadrícula de tienda intercambiable.
OWN-WORLD: Negro tinta, oro serigráfico, papel hueso y azul cancha; portadas, lomos y etiquetas de edición.
STORY: El visitante reconoce el carácter, explora diseños reales y abre una consulta contextual por WhatsApp.
FIRST VIEWPORT: Marca compacta arriba; titular a la izquierda; una batea de tres productos ocupa la derecha; el CTA queda visible junto al mensaje.
FORM: Batea de culto, sexta dirección fundamentada; seed f205e5b5.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? htmlFiles(path) : path.endsWith(".html") ? [path] : [];
    }),
  );
  return nested.flat();
}

for (const path of await htmlFiles("out")) {
  const html = await readFile(path, "utf8");
  if (!html.includes("f205e5b5")) {
    await writeFile(path, html.replace(/<body([^>]*)>/, `<body$1>${contract}`));
  }
}
