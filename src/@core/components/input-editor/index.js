import 'react-quill/dist/quill.snow.css';
import './index.scss';

import React from 'react';

/* Components*/
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize';

/*Api*/
import uploadImage from '@utility/uploadFiles';

let setLoadingGlobal = false;

Quill.register('modules/ImageResize', ImageResize);

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
      [{ color: [] }, { background: [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      [{ font: [] }],
      [{ align: [] }],
      ['link', 'image'],
      ['clean'],
    ],
    handlers: {
      image: imageHandler,
    },
  },
  ImageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize', 'Toolbar'],
    handleStyles: {
      backgroundColor: 'black',
      border: 'none',
      color: 'white',
    },
    displayStyles: {
      backgroundColor: 'black',
      border: 'none',
      color: 'white',
    },
  },
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code-block',
  'color',
  'background',
  'list',
  'indent',
  'align',
  'link',
  'image',
  'clean',
  'code',
  'script',
  'size',
  'width',
];

function imageHandler() {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();
  input.onchange = async function () {
    setLoadingGlobal(true);
    const file = input.files[0];
    const image = await uploadImage(file, `/image-editor`, file.name);
    const range = this.quill.getSelection();

    this.quill.insertEmbed(range.index, 'image', image);
    setLoadingGlobal(false);
  }.bind(this);
}

const InputEditor = ({ setUpLoading, className, ...rest }) => {
  setLoadingGlobal = setUpLoading;

  return (
    <ReactQuill
      modules={modules}
      formats={formats}
      className={`${className ? className : ''} quill__editor-custom`}
      {...rest}
    />
  );
};

InputEditor.defaultProps = {
  required: true,
  setUpLoading: () => {},
};

export default InputEditor;
