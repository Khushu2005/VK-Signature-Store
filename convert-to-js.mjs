import fs from "fs";
import path from "path";

const projectDir = "./"; // Root folder of your project

function convertFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      convertFiles(fullPath);
    } else {
      if (item.endsWith(".ts") || item.endsWith(".tsx")) {
        let content = fs.readFileSync(fullPath, "utf8");

        // Remove TypeScript annotations and interfaces
        content = content
          .replace(/:\s*\w+(\[\])?/g, "")
          .replace(/interface\s+\w+\s+\{[^}]*\}/g, "")
          .replace(/type\s+\w+\s*=\s*[^;]+;/g, "");

        const newExt = item.endsWith(".tsx") ? ".jsx" : ".js";
        const newPath = fullPath.replace(/\.tsx?$/, newExt);

        fs.writeFileSync(newPath, content);
        fs.unlinkSync(fullPath);

        console.log(`✅ Converted: ${item} → ${path.basename(newPath)}`);
      }
    }
  }
}

convertFiles(projectDir);
console.log("🎉 Conversion complete! All .ts/.tsx → .js/.jsx");
