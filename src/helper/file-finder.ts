import * as fs from 'fs';
import * as path from 'path';

const fetchFilesInDirectoryForFileExtension = (dir: string, fileEnding: string): Array<any> => {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const matches: Array<string> = [];

  fs.readdirSync(dir)
    .forEach((file: string) => {
      const filePath: string = path.join(dir, file);
      const isDirectory: boolean = fs.lstatSync(filePath).isDirectory();

      if (isDirectory) {
        const children = fetchFilesInDirectoryForFileExtension(filePath, fileEnding);
        matches.push(...children);
      } else if (filePath.endsWith(fileEnding)) {
        matches.push(filePath);
      }
    });

  return matches;
};

export class FileFinder {
  public static getMatchingFiles(rootDir: string, fileEnding: string): Array<string> {
    return fetchFilesInDirectoryForFileExtension(rootDir, fileEnding);
  }
}
