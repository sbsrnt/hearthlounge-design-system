import fs from 'fs';
import { tokensFilePath, buildTokensObj } from '../utils';

buildTokensObj().then(values => {
  fs.writeFileSync(tokensFilePath, JSON.stringify(values));
});
