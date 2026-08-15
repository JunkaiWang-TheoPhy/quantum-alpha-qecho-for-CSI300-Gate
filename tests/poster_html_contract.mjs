import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync(new URL("../poster.html", import.meta.url), "utf8");
for (const claim of ["让<span class=\"market\">市场路径</span>", "THE MARKET REMEMBERS", "0.8327", "7/9", "4096", "0.53%", "不是端到端五步预测"]) {
  assert.ok(html.includes(claim), `missing poster claim: ${claim}`);
}
assert.ok(html.includes("width:800px;height:2000px"), "screen poster must use an 800 × 2000 canvas");
assert.ok(html.includes("size:800mm 2000mm"), "print page must use 800 × 2000 mm");
assert.equal((html.match(/class="person"/g) || []).length, 5, "poster must contain five team portraits");
assert.equal((html.match(/class="journey-label/g) || []).length, 4, "poster must contain four journey labels");
assert.ok(existsSync(new URL("../assets/market-memory-hero.webp", import.meta.url)), "poster hero asset missing");
assert.doesNotMatch(html, /已证明量子优势|完整真机预测|全面SOTA/);
console.log("Quantum Alpha HTML poster contract: pass");
