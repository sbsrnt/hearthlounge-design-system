import React from 'react';
import { camelCase, startCase } from 'lodash';
import cx from 'classnames';

import tokens from '../../../tokens/tokens.json';

import styles from './styles.module.scss';

const Palette = () => {
  // eslint-disable-next-line no-underscore-dangle
  const entries = Object.entries(tokens._colors.color);

  return (
    <div className={styles.container}>
      <div>
        Common
        <div className={styles.container}>
          {entries.map(({ 0: key, 1: values }) => {
            if (
              ![
                'medium',
                'border',
                'secondary',
                'lightest',
                'dark',
                'darkest',
                'classes',
                'media',
                'adventures',
                'expansions',
              ].includes(key)
            ) {
              return (
                <div className={styles.wrapper}>
                  <p>{startCase(key)}</p>
                  <ul>
                    {Object.entries(values).map(
                      ({ 0: colorKey, 1: colorValue }) => (
                        <li>
                          <span style={{ backgroundColor: colorValue }} />
                          <code>
                            {key}
                            {colorKey} | {colorValue}
                          </code>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
      <div className={styles.container}>
        {entries.map(({ 0: key, 1: values }) => {
          const isExtendedObj = Object.values(values).every(
            v => typeof v === 'object'
          );

          if (isExtendedObj) {
            return (
              <div>
                <h3>{startCase(key)}</h3>
                <div className={cx(styles.wrapper, styles.innerWrapper)}>
                  {Object.entries(values).map(
                    ({ 0: extendedObjKey, 1: extendedObjValues }) => (
                      <div>
                        <p>{startCase(extendedObjKey)}</p>
                        <ul>
                          {Object.entries(extendedObjValues).map(
                            ({ 0: k, 1: v }) => (
                              <li>
                                <span style={{ backgroundColor: v }} />
                                <code>
                                  {camelCase(extendedObjKey)}
                                  {k} | {v}
                                </code>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Palette;
