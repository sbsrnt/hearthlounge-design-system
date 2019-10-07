import fs from 'fs';
import { TOKEN_CATEGORIES } from '../../tokens/categories';
import { filePath, buildScssVariables } from '../utils';

const { COLORS, TYPOGRAPHY } = TOKEN_CATEGORIES;

buildScssVariables(COLORS).then(values =>
  fs.writeFileSync(filePath(COLORS), values)
);

buildScssVariables(TYPOGRAPHY).then(values =>
  fs.writeFileSync(filePath(TYPOGRAPHY), values)
);
