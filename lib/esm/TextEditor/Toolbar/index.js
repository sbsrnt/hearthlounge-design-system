import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import { ItalicButton, BoldButton, UnderlineButton, CodeButton, HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton, UnorderedListButton, OrderedListButton, BlockquoteButton, CodeBlockButton } from 'draft-js-buttons';
import { AnimatedList } from '../../AnimatedList';
import { Tooltip } from '../../Tooltip';
var toolbarPlugin = createToolbarPlugin();
var Toolbar = toolbarPlugin.Toolbar;

var AnimatedToolbar = function AnimatedToolbar(s) {
  var items = [{
    value: BoldButton,
    label: 'Bold'
  }, {
    value: ItalicButton,
    label: 'Italic'
  }, {
    value: UnderlineButton,
    label: 'Underline'
  }, {
    value: CodeButton,
    label: 'Bold'
  }, {
    value: HeadlineOneButton,
    label: 'H1'
  }, {
    value: HeadlineTwoButton,
    label: 'H2'
  }, {
    value: HeadlineThreeButton,
    label: 'H3'
  }, {
    value: UnorderedListButton,
    label: 'Unordered List'
  }, {
    value: OrderedListButton,
    label: 'Ordered List'
  }, {
    value: BlockquoteButton,
    label: 'Blockquote'
  }, {
    value: CodeBlockButton,
    label: 'Code Block'
  }];
  return React.createElement(Toolbar, null, function (externalProps) {
    return React.createElement(AnimatedList, {
      name: "toolbar",
      items: items,
      className: "toolbar d-flex"
    }, function (_ref) {
      var _ref$meta = _ref.meta,
          T = _ref$meta.value,
          label = _ref$meta.label;
      return React.createElement(Tooltip, {
        text: label
      }, React.createElement(T, _extends({}, externalProps, s)));
    });
  });
};

export { toolbarPlugin };
export default AnimatedToolbar;