import React from 'react';
import { camelCase, startCase } from 'lodash';
import tokens from '../../../tokens/tokens.json';
import { nestedTokenColors } from '../../../tokens/categories';

const Palette = () => {
  // eslint-disable-next-line no-underscore-dangle
  const entries = Object.entries(tokens._colors.color);

  return (
    <div className="palette__container">
      <div>
        Common
        <div className="palette__container">
          {entries.map(({ 0: key, 1: values }) => {
            if (
              ![
                ...nestedTokenColors,
                'medium',
                'border',
                'secondary',
                'lightest',
                'dark',
                'darkest',
              ].includes(key)
            ) {
              return (
                <div className="palette_wrapper" key={key}>
                  <p>{startCase(key)}</p>
                  <ul>
                    {Object.entries(values).map(
                      ({ 0: colorKey, 1: colorValue }) => (
                        <li key={`${key}_${colorKey}`}>
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
      <div className="palette__container">
        {entries.map(({ 0: key, 1: values }) => {
          const isExtendedObj = Object.values(values).every(
            v => typeof v === 'object'
          );

          if (isExtendedObj) {
            return (
              <div key={key}>
                <h3>{startCase(key)}</h3>
                <div className="palette__wrapper palette__innerWrapper">
                  {Object.entries(values).map(
                    ({ 0: extendedObjKey, 1: extendedObjValues }) => (
                      <div key={`${key}_${extendedObjKey}`}>
                        <p>{startCase(extendedObjKey)}</p>
                        <ul>
                          {Object.entries(extendedObjValues).map(
                            ({ 0: k, 1: v }) => (
                              <li key={`${key}_${extendedObjKey}_${k}`}>
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
