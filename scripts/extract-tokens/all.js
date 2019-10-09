import fs from 'fs';
import { TOKEN_CATEGORIES } from '../../tokens/categories';
import {
  scssFilePath,
  buildScssVariables,
  buildTokensObj,
  tokensFilePath,
  buildJsColors,
  jsFilePath,
} from '../utils';

const { COLORS, TYPOGRAPHY } = TOKEN_CATEGORIES;

buildScssVariables(COLORS)
  .then(values => fs.writeFileSync(scssFilePath(COLORS), values))
  .then(() => {
    buildJsColors(COLORS)
      .then(colors => fs.writeFileSync(jsFilePath(COLORS), colors))
      .catch(error => console.log(error));
  });

buildScssVariables(TYPOGRAPHY).then(values =>
  fs.writeFileSync(scssFilePath(TYPOGRAPHY), values)
);

buildTokensObj().then(values => {
  fs.writeFileSync(tokensFilePath, JSON.stringify(values));
});
