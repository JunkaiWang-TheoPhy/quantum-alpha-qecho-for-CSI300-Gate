import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
assert.ok(html.includes('越过<span class="financial-noise">金融噪声</span>，<br>看见<span class="accent">量子几何</span>。'), "missing approved two-color hero title");
assert.doesNotMatch(html, /越过噪声，|量子路径/);
for (const identity of ["Quantum Alpha", "张鸿飞", "吴哲楠", "方一策", "王俊凯", "参与者", "指导老师 · 罗迪"]) {
  assert.ok(html.includes(identity), `missing identity ${identity}`);
}
assert.equal((html.match(/指导老师/g) || []).length, 1, "advisor credit must appear exactly once");
assert.equal((html.match(/罗迪/g) || []).length, 1, "advisor name must appear exactly once");
assert.ok(html.includes('class="advisor-note"'), "advisor credit needs its own framed label");
assert.equal((html.match(/Q-ECHO-V/g) || []).length, 1, "Q-ECHO-V may appear only in the supplied document title");
assert.doesNotMatch(html, /旧版网页|evidence\/report\.html|evidence-first-landing|清华大学物理系|Advisor|ADVISOR|4\s*\+\s*1|4 位参与者|4位参与者|portrait-luo-di/);
assert.doesNotMatch(html, /三个按钮分别使用不同的原创量子芯片图/);
assert.ok(html.includes('href="https://github.com/JunkaiWang-TheoPhy/quantum-alpha-qecho-for-CSI300"'), "GitHub button must target the engineering repository");
for (const folder of ["ppt", "video", "demo"]) {
  assert.ok(html.includes(`/tree/main/${folder}`), `missing ${folder} folder`);
}
assert.equal((html.match(/data-material=/g) || []).length, 4);
assert.ok(html.includes('data-material="feishu-document"'), "missing Feishu document card");
assert.ok(html.includes('href="https://saoi3t9hyeh.feishu.cn/docx/U8NdduzHXoYHPqxqY03cZoZvnve"'), "Feishu document card must target the supplied document");
assert.ok(html.includes('target="_blank" rel="noopener noreferrer"'), "external document must open safely in a new tab");
assert.ok(html.includes("一览·飞书文档") && html.includes("Quantum Alpha｜Q-ECHO-V"), "missing document overview copy");
assert.ok(html.includes("assets/feishu-document-panorama.png"), "document card must use its dedicated panoramic background");
assert.ok(html.includes('class="portrait-gallery"'), "missing portrait gallery");
assert.equal((html.match(/class="portrait-card/g) || []).length, 4, "gallery must contain four participant cards");
for (const asset of ["distant-mountains.jpg", "wanderer-snow-mountains.png", "feishu-document-panorama.png", "chip-gold.png", "chip-silver.png", "chip-violet.png"]) {
  assert.ok(existsSync(new URL(`../assets/${asset}`, import.meta.url)), `missing ${asset}`);
}
for (const portrait of ["zhang-hongfei", "wu-zhenan", "fang-yice", "wang-junkai"]) {
  assert.ok(existsSync(new URL(`../assets/portrait-${portrait}-v2.png`, import.meta.url)), `missing portrait ${portrait}`);
}
console.log("Quantum Alpha Gate contract: pass");
