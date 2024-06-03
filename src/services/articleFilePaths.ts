import fs from 'fs';
import path from 'path';

const getArticleFilePaths = (dirPath: string) => {
  const filesAndDirs = fs.readdirSync(dirPath);
  filesAndDirs.forEach(name => {
    const fullPath = path.join(dirPath, name);
    const relativePath = path.relative(process.cwd(), fullPath);
    console.log(relativePath);
  });
};

export default getArticleFilePaths;
