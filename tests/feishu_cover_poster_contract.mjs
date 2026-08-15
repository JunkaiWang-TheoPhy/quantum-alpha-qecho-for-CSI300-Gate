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
  "4096",
  "单个最新时间步测量",
  "[ H<sub>a</sub>, H<sub>b</sub> ] ≠ 0",
  "F<sub>ij</sub>",
  "QLIKE(y, v̂)",
]) {
  assert.ok(html.includes(content), `missing migrated poster content: ${content}`);
}
assert.ok(html.includes("width:800px;height:2000px"), "screen canvas must be 800 × 2000");
assert.ok(html.includes("size:800mm 2000mm"), "print page must be 800 × 2000 mm");
assert.equal((html.match(/class="author"/g) || []).length, 5, "poster must contain five authors");
assert.doesNotMatch(html, /Q-SWITCH|可信路由|经典安全专家|Commuting|0\.53%|7\/9/);
assert.doesNotMatch(html, /font-size:(?:6|7|8|9|10|11)(?:\.\d+)?px/, "poster contains undersized text");
assert.ok(existsSync(new URL("../assets/feishu-cover-market-memory.webp", import.meta.url)), "unique hero asset missing");
assert.ok(existsSync(new URL("../assets/feishu-cover-live-qr.png", import.meta.url)), "live poster QR missing");
assert.ok(html.includes("junkaiwang-theophy.github.io/quantum-alpha-qecho-for-CSI300-Gate/poster-feishu-cover.html"), "live URL missing");
console.log("Feishu cover poster contract: pass");
