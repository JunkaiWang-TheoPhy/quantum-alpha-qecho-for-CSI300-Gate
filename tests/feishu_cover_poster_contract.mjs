import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const posterUrl = new URL("../poster-feishu-cover.html", import.meta.url);
assert.ok(existsSync(posterUrl), "poster-feishu-cover.html must exist");
const html = readFileSync(posterUrl, "utf8");

for (const content of [
  "市场不是一张静止的表",
  "事件顺序进入量子动力学本身",
  "训练沿量子态真正可区分的方向发生",
  "从量子预测器走到真实 NISQ 平台",
  "0.8327",
  "7/9",
  "4096",
  "0.53%",
  "冻结单步测量",
]) {
  assert.ok(html.includes(content), `missing migrated poster content: ${content}`);
}
assert.ok(html.includes("width:800px;height:2000px"), "screen canvas must be 800 × 2000");
assert.ok(html.includes("size:800mm 2000mm"), "print page must be 800 × 2000 mm");
assert.equal((html.match(/class="author"/g) || []).length, 5, "poster must contain five authors");
assert.doesNotMatch(html, /Q-SWITCH|可信路由|经典安全专家/);
assert.ok(existsSync(new URL("../assets/feishu-cover-market-memory.webp", import.meta.url)), "unique hero asset missing");
console.log("Feishu cover poster contract: pass");
