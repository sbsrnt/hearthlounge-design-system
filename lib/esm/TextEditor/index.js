import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import AnimatedToolbar, { toolbarPlugin } from './Toolbar';

var TextEditor = function TextEditor(_ref) {
  var name = _ref.name,
      text = _ref.text,
      onChange = _ref.onChange;
  var initialEditorState = text ? EditorState.createWithContent(convertFromRaw(JSON.parse(text))) : EditorState.createEmpty();

  var _useState = useState(initialEditorState),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var editor;

  var focus = function focus() {
    editor.focus();
  };

  var handleChange = function handleChange(state) {
    var contentState = state.getCurrentContent();
    var stateToRaw = convertToRaw(contentState);
    if (onChange) onChange(name, stateToRaw);
    setEditorState(state);
  };

  return React.createElement("div", {
    className: "editor__Wrapper",
    onClick: focus,
    role: "presentation"
  }, React.createElement(AnimatedToolbar, {
    editorState: editorState
  }), React.createElement(Editor, {
    editorState: editorState,
    onChange: handleChange,
    plugins: [toolbarPlugin],
    placeholder: "Your text goes here...",
    ref: function ref(element) {
      editor = element;
    }
  }));
};

TextEditor.propTypes = {
  /** Name to identify and be provided through callback */
  name: string,

  /** Text editor value */
  text: string,

  /** Function callback to execute on change of the element -> (name, value) */
  onChange: func
};
TextEditor.defaultProps = {
  name: 'text editor',
  text: null,
  onChange: null
};
export { TextEditor };
export default TextEditor;