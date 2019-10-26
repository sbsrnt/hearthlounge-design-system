import fs from 'fs';
import { buildIcons, iconsFilePath } from './utils';
import { icons } from '../assets/icons';

buildIcons(icons).then(values => {
  fs.writeFileSync(iconsFilePath('icons'), values);
});
