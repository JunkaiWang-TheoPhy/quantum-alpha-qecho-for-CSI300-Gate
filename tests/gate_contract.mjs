import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
for (const identity of ["Quantum Alpha", "张鸿飞", "吴哲楠", "方一策", "王俊凯", "参与者"]) {
  assert.ok(html.includes(identity), `missing identity ${identity}`);
}
assert.doesNotMatch(html, /旧版网页|evidence\/report\.html|evidence-first-landing|清华大学物理系|Q-ECHO|罗迪|指导老师|Advisor|ADVISOR|4\s*\+\s*1|4 位参与者|4位参与者|portrait-luo-di/);
assert.doesNotMatch(html, /三个按钮分别使用不同的原创量子芯片图/);
assert.ok(html.includes('href="https://github.com/JunkaiWang-TheoPhy/quantum-alpha-qecho-for-CSI300"'), "GitHub button must target the engineering repository");
for (const folder of ["ppt", "video", "demo"]) {
  assert.ok(html.includes(`/tree/main/${folder}`), `missing ${folder} folder`);
}
assert.equal((html.match(/data-material=/g) || []).length, 3);
assert.ok(html.includes('class="portrait-gallery"'), "missing portrait gallery");
assert.equal((html.match(/class="portrait-card/g) || []).length, 4, "gallery must contain four participant cards");
for (const asset of ["distant-mountains.jpg", "wanderer-snow-mountains.png", "chip-gold.png", "chip-silver.png", "chip-violet.png"]) {
  assert.ok(existsSync(new URL(`../assets/${asset}`, import.meta.url)), `missing ${asset}`);
}
for (const portrait of ["zhang-hongfei", "wu-zhenan", "fang-yice", "wang-junkai"]) {
  assert.ok(existsSync(new URL(`../assets/portrait-${portrait}-v2.png`, import.meta.url)), `missing portrait ${portrait}`);
}
console.log("Quantum Alpha Gate contract: pass");
