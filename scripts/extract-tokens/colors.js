import fs from 'fs';
import { TOKEN_CATEGORIES } from '../../tokens/categories';
import {
  scssFilePath,
  buildScssVariables,
  buildJsColors,
  jsFilePath,
} from '../utils';

buildScssVariables(TOKEN_CATEGORIES.COLORS)
  .then(values =>
    fs.writeFileSync(scssFilePath(TOKEN_CATEGORIES.COLORS), values)
  )
  .then(() => {
    buildJsColors(TOKEN_CATEGORIES.COLORS)
      .then(colors =>
        fs.writeFileSync(jsFilePath(TOKEN_CATEGORIES.COLORS), colors)
      )
      .catch(error => console.log(error));
  });
