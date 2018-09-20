const fs = require('fs');

const mainFilePath = './dist/main.js';
const cliFilePath = './dist/cli.js';
const shebangContent = '#!/usr/bin/env node\n';
const mainContent = fs.readFileSync(mainFilePath);

fs.writeFileSync(cliFilePath, shebangContent + mainContent);
