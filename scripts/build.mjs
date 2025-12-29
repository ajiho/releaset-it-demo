import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const outputFile = path.join(distDir, "index.js");

// 确保 dist 目录存在
fs.mkdirSync(distDir, { recursive: true });

// 当前时间戳（生成时）
const timestamp = Date.now();

const content =
  `
// Auto generated file
console.log(${timestamp});
`.trim() + "\n";

fs.writeFileSync(outputFile, content, "utf8");

console.log("dist/index.js generated");
