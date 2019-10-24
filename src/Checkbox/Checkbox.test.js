import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Checkbox } from '.';

describe('Checkbox Component', () => {
  test('renders correctly', async () => {
    const { container } = render(<Checkbox />);

    expect(container).not.toBeNull();
  });

  test('has checked classes when checked prop is provided', async () => {
    const { getByTestId } = render(<Checkbox checked />);
    const checkboxContainer = getByTestId('checkbox-container');
    const checkmark = getByTestId('checkmark');

    expect(
      checkboxContainer.classList.contains('checkbox__container--checked')
    ).toBeTruthy();
    expect(
      checkmark.classList.contains('checkbox__checkmark--checked')
    ).toBeTruthy();
  });

  test('has disabled class when disabled prop is provided', async () => {
    const { getByTestId } = render(<Checkbox disabled />);
    const checkboxContainer = getByTestId('checkbox-container');

    expect(
      checkboxContainer.classList.contains('checkbox__container--disabled')
    ).toBeTruthy();
  });

  describe('handle onClick', () => {
    test('when checked is false', async done => {
      const handleClick = (name, value) => {
        expect(name).toEqual('foo');
        expect(value).toEqual(true);
        done();
      };

      const { getByTestId } = render(
        <Checkbox name="foo" onClick={handleClick} />
      );
      const checkboxContainer = getByTestId('checkbox-container');

      fireEvent.click(checkboxContainer);
    });

    test('when checked is true', async done => {
      const handleClick = (name, value) => {
        expect(name).toEqual('foo');
        expect(value).toEqual(false);
        done();
      };

      const { getByTestId } = render(
        <Checkbox name="foo" onClick={handleClick} checked />
      );
      const checkboxContainer = getByTestId('checkbox-container');

      fireEvent.click(checkboxContainer);
    });
  });

  describe('handle onKeyPress', () => {
    const spacebar = {
      key: 'Spacebar',
      keyCode: 32,
      charCode: 32,
    };

    test('when checked is false', async done => {
      const handleKeyPress = (name, value) => {
        expect(name).toEqual('foo');
        expect(value).toEqual(true);
        done();
      };

      const { getByTestId } = render(
        <Checkbox name="foo" onKeyPress={handleKeyPress} />
      );
      const checkboxContainer = getByTestId('checkbox-container');

      fireEvent.keyPress(checkboxContainer, spacebar);
    });

    test('when checked is true', async done => {
      const handleKeyPress = (name, value) => {
        expect(name).toEqual('foo');
        expect(value).toEqual(false);
        done();
      };

      const { getByTestId } = render(
        <Checkbox name="foo" onKeyPress={handleKeyPress} checked />
      );
      const checkboxContainer = getByTestId('checkbox-container');

      fireEvent.keyPress(checkboxContainer, spacebar);
    });
  });
});
