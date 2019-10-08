import fs from 'fs';
import { TOKEN_CATEGORIES } from '../../tokens/categories';
import { scssFilePath, buildScssVariables } from '../utils';

buildScssVariables(TOKEN_CATEGORIES.TYPOGRAPHY).then(values =>
  fs.writeFileSync(scssFilePath(TOKEN_CATEGORIES.TYPOGRAPHY), values)
);
