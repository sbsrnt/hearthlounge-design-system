import React from 'react';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';
import { AnimatedList } from '../../AnimatedList';
import { Tooltip } from '../../Tooltip';

const toolbarPlugin = createToolbarPlugin();

const { Toolbar } = toolbarPlugin;

const AnimatedToolbar = s => {
  const items = [
    { value: BoldButton, label: 'Bold' },
    { value: ItalicButton, label: 'Italic' },
    { value: UnderlineButton, label: 'Underline' },
    { value: CodeButton, label: 'Bold' },
    { value: HeadlineOneButton, label: 'H1' },
    { value: HeadlineTwoButton, label: 'H2' },
    { value: HeadlineThreeButton, label: 'H3' },
    { value: UnorderedListButton, label: 'Unordered List' },
    { value: OrderedListButton, label: 'Ordered List' },
    { value: BlockquoteButton, label: 'Blockquote' },
    { value: CodeBlockButton, label: 'Code Block' },
  ];
  return (
    <Toolbar>
      {externalProps => (
        <AnimatedList name="toolbar" items={items} className="toolbar d-flex">
          {({ meta: { value: T, label } }) => (
            <Tooltip text={label}>
              <T {...externalProps} {...s} />
            </Tooltip>
          )}
        </AnimatedList>
      )}
    </Toolbar>
  );
};

export { toolbarPlugin };
export default AnimatedToolbar;
