import fs from 'fs';
import { TOKEN_CATEGORIES } from '../../tokens/categories';
import { scssFilePath, buildScssVariables } from '../utils';

const { COLORS, TYPOGRAPHY } = TOKEN_CATEGORIES;

buildScssVariables(COLORS).then(values =>
  fs.writeFileSync(scssFilePath(COLORS), values)
);

buildScssVariables(TYPOGRAPHY).then(values =>
  fs.writeFileSync(scssFilePath(TYPOGRAPHY), values)
);
