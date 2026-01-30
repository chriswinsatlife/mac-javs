#!/usr/bin/env bun
/**
 * Cleans up scraped Art of Delegation markdown files.
 * Removes video player UI noise and keeps only relevant content.
 */

import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const SCRAPED_DIR = "athena/scraped_pages";
const CLEAN_DIR = "athena/cleaned_pages";

async function cleanMarkdown(content: string): Promise<string> {
  const lines = content.split("\n");
  const cleanedLines: string[] = [];
  let inFrontmatter = false;
  let frontmatterCount = 0;
  const seenHeaders = new Set<string>();
  
  for (const line of lines) {
    // Handle frontmatter
    if (line.trim() === "---") {
      frontmatterCount++;
      if (frontmatterCount <= 2) {
        cleanedLines.push(line);
        inFrontmatter = frontmatterCount === 1;
        continue;
      }
    }
    
    if (inFrontmatter) {
      cleanedLines.push(line);
      continue;
    }
    
    // Skip video player UI elements and noise
    if (
      line.includes("Playing in picture-in-picture") ||
      line.includes("Add to Watch Later") ||
      line.includes("CC/subtitles") ||
      line.includes("QualityAuto") ||
      line.includes("SpeedNormal") ||
      line.includes("Copy link") ||
      line.includes("Picture-in-PictureFullscreen") ||
      line.match(/^\d{2}:\d{2}$/) ||
      line.trim() === "Like" ||
      line.trim() === "Share" ||
      line.trim() === "Play" ||
      line.trim() === "Chapters" ||
      line.trim() === "CH." ||
      line.trim() === "/" ||
      line.trim() === "·" ||
      line.includes("video thumbnail") ||
      line.includes("i.vimeocdn.com/player") ||
      line.includes("Art of Delegation](https://www.athena.com/art-of-delegation)") ||
      line.includes("from Athena on Vimeo") ||
      line.includes("cdn.prod.website-files.com")
    ) {
      continue;
    }
    
    // Skip "You Might Also Like" section and everything after
    if (line.includes("You Might Also Like")) {
      break;
    }
    
    // Skip duplicate name at start (appears before # header)
    if (cleanedLines.length <= 12 && !line.startsWith("#") && !line.startsWith("!")) {
      const nextH1 = lines.find(l => l.startsWith("# "));
      if (nextH1 && nextH1.includes(line.trim()) && line.trim().length > 3) {
        continue;
      }
    }
    
    // Track ### headers and skip non-header duplicates
    if (line.startsWith("### ")) {
      const headerText = line.replace("### ", "").trim();
      seenHeaders.add(headerText);
      // Only keep ### headers if there's content after them (these are empty chapter markers)
      continue; // Skip all ### headers - they're just chapter markers without content
    }
    
    // Skip standalone text that matches a ### header (chapter title duplicates)
    if (seenHeaders.has(line.trim())) {
      continue;
    }
    
    // Skip standalone chapter-like titles
    const trimmed = line.trim();
    // Common chapter title patterns
    const chapterPatterns = [
      /^[A-Z][a-z]+( and | & )[A-Z][a-z]+$/,  // "Focus and Support"
      /^[A-Z][a-z]+(, )[A-Z][a-z]+( and )[A-Z][a-z]+$/,  // "Procrastination, Strategies and Work"
      /^[A-Z][a-z]+ [A-Z][a-z]+( and | & )[A-Z][a-z]+$/,  // "Emergency Medicine and Global"
      /^[A-Z][a-z]+ [A-Z][a-z]+ and [A-Z][a-z]+ [A-Z][a-z]+$/,  // "Team Trust and Success"  
      /^[A-Z][\w-]+ [A-Z][\w-]+$/,  // "Global Health"
      /^Self-[A-Z][a-z]+ and [A-Z][a-z]+$/,  // "Self-Care and Resilience"
    ];
    if (trimmed.length > 0 && trimmed.length < 50 && !trimmed.includes(".") && !trimmed.startsWith("#")) {
      if (chapterPatterns.some(p => p.test(trimmed))) {
        continue;
      }
      // Also skip if it looks like a chapter title (all words capitalized, 2-6 words)
      const words = trimmed.split(" ");
      if (words.length >= 2 && words.length <= 6 && words.every(w => /^[A-Z]/.test(w) || w === "and" || w === "&")) {
        continue;
      }
    }
    
    // Skip empty ### headers (no content after them)
    if (line.startsWith("### ") && line.replace("### ", "").trim() === "") {
      continue;
    }
    
    // Keep content
    cleanedLines.push(line);
  }
  
  // Remove consecutive empty lines and empty headers at end
  let result = cleanedLines.join("\n");
  result = result.replace(/\n{3,}/g, "\n\n");
  result = result.replace(/\n### [^\n]+\n*$/g, "\n"); // Remove trailing empty headers
  
  return result.trim() + "\n";
}

async function main() {
  await Bun.$`mkdir -p ${CLEAN_DIR}`;
  
  const files = await readdir(SCRAPED_DIR);
  const mdFiles = files.filter(f => f.endsWith(".md"));
  
  for (const file of mdFiles) {
    const content = await readFile(join(SCRAPED_DIR, file), "utf-8");
    const cleaned = await cleanMarkdown(content);
    
    // Rename to simpler format
    const newName = file
      .replace("athena_com_art_of_delegation_", "")
      .replace(/_/g, "-");
    
    await writeFile(join(CLEAN_DIR, newName), cleaned);
    console.log(`Cleaned: ${file} -> ${newName}`);
  }
  
  console.log(`\nCleaned ${mdFiles.length} files to ${CLEAN_DIR}/`);
}

main().catch(console.error);
