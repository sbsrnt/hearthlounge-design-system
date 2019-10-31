import React, { useState } from 'react';
import { func, string } from 'prop-types';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import AnimatedToolbar, { toolbarPlugin } from './Toolbar';

const TextEditor = ({ name, text, onChange }) => {
  const initialEditorState = text
    ? EditorState.createWithContent(convertFromRaw(JSON.parse(text)))
    : EditorState.createEmpty();

  const [editorState, setEditorState] = useState(initialEditorState);
  let editor;
  const focus = () => {
    editor.focus();
  };

  const handleChange = state => {
    const contentState = state.getCurrentContent();
    const stateToRaw = convertToRaw(contentState);
    if (onChange) onChange(name, stateToRaw);
    setEditorState(state);
  };

  return (
    <div className="editor__Wrapper" onClick={focus} role="presentation">
      <AnimatedToolbar editorState={editorState} />
      <Editor
        editorState={editorState}
        onChange={handleChange}
        plugins={[toolbarPlugin]}
        placeholder="Your text goes here..."
        ref={element => {
          editor = element;
        }}
      />
    </div>
  );
};

TextEditor.propTypes = {
  /** Name to identify and be provided through callback */
  name: string,
  /** Text editor value */
  text: string,
  /** Function callback to execute on change of the element -> (name, value) */
  onChange: func,
};
TextEditor.defaultProps = {
  name: 'text editor',
  text: null,
  onChange: null,
};

export { TextEditor };
export default TextEditor;
