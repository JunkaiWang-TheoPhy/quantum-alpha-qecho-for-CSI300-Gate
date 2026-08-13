import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
for (const identity of ["Quantum Alpha", "张鸿飞", "吴哲楠", "方一策", "王俊凯", "罗迪", "指导老师", "参与者"]) {
  assert.ok(html.includes(identity), `missing identity ${identity}`);
}
assert.doesNotMatch(html, /旧版网页|evidence\/report\.html|evidence-first-landing|清华大学物理系|Q-ECHO/);
assert.doesNotMatch(html, /三个按钮分别使用不同的原创量子芯片图/);
assert.ok(html.includes('href="https://github.com/JunkaiWang-TheoPhy/quantum-alpha-qecho-for-CSI300"'), "GitHub button must target the engineering repository");
for (const folder of ["ppt", "video", "demo"]) {
  assert.ok(html.includes(`/tree/main/${folder}`), `missing ${folder} folder`);
}
assert.equal((html.match(/data-material=/g) || []).length, 3);
for (const asset of ["distant-mountains.jpg", "wanderer-snow-mountains.png", "chip-gold.png", "chip-silver.png", "chip-violet.png"]) {
  assert.ok(existsSync(new URL(`../assets/${asset}`, import.meta.url)), `missing ${asset}`);
}
for (const avatar of ["zhang-hongfei", "wu-zhenan", "fang-yice", "wang-junkai", "luo-di"]) {
  assert.ok(existsSync(new URL(`../assets/avatar-${avatar}.png`, import.meta.url)), `missing avatar ${avatar}`);
}
console.log("Quantum Alpha Gate contract: pass");
