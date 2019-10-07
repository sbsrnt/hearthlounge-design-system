import fs from 'fs';
import { TOKEN_CATEGORIES } from '../../tokens/categories';
import { filePath, buildScssVariables } from '../utils';

buildScssVariables(TOKEN_CATEGORIES.COLORS).then(values =>
  fs.writeFileSync(filePath(TOKEN_CATEGORIES.COLORS), values)
);
