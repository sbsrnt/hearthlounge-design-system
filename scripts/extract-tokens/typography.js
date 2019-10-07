import fs from 'fs';
import { TOKEN_CATEGORIES } from '../../tokens/categories';
import { filePath, buildScssVariables } from '../utils';

buildScssVariables(TOKEN_CATEGORIES.TYPOGRAPHY).then(values =>
  fs.writeFileSync(filePath(TOKEN_CATEGORIES.TYPOGRAPHY), values)
);
