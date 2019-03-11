import * as fs from 'fs';
import * as path from 'path';

const fetchFilesInDirectoryForFileExtension = (dir: string, matchPattern: string): Array<any> => {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files: Array<any> = fs.readdirSync(dir);
  const matches: Array<string> = [];

  for (let i = 0; i < files.length; i++) {
    const filePath: string = path.join(dir, files[i]);
    const isDirectory: boolean = fs.lstatSync(filePath).isDirectory();

    if (isDirectory) {
      const children = fetchFilesInDirectoryForFileExtension(filePath, matchPattern);
      matches.push(...children);
    } else if (filePath.indexOf(matchPattern) >= 0) {
      matches.push(filePath);
    }
  }

  return matches;
};

export class FileFinder {
  public static getMatchingFiles(rootDir: string, matchPattern: string): Array<string> {
    return fetchFilesInDirectoryForFileExtension(rootDir, matchPattern);
  }
}
