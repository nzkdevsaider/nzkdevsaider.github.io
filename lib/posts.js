import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { renderMarkdown } from "./markdownToHTML";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(limit = 3) {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((item, idx) => idx < limit)
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostsCount() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.length;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostContent(id) {
  const fileName = `${id}.md`;
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    id,
    ...data,
    content,
    contentHtml: await renderMarkdown(content),
  };
}
