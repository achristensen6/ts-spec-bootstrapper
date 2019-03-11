import { generateTestsForFile } from './generator';
import { CONFIG } from './globals/config';
import { STATS } from './globals/stats';
import { FileFinder } from './helper/file-finder';
import { Renderer } from './helper/renderer';

Renderer.renderWelcomeBanner(CONFIG);

FileFinder.getMatchingFiles(CONFIG.rootPath, '.ts')
  .filter((filePath: string) => !filePath.includes('.spec.ts'))
  .forEach((filePath: string) => generateTestsForFile(filePath));

Renderer.renderStats(STATS);
