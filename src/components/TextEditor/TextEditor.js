import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function TextEditor({ content, onChangeInfo }) {
    const [text, setText] = useState(content);

    const onSaveShanges = (event, editor) => {
        const data = editor.getData()
        setText(data);
        onChangeInfo('info', text);
    }

    return (
        <div className="App">
            <div className="editor">
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    config={{
                        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'numberedList', 'bulletedList', 'insertTable',
                            'tableColumn', 'tableRow', 'mergeTableCells', '|', 'undo', 'redo'],
                        placeholder: 'Enter the product description'
                    }}
                    onChange={(event, editor) => {
                        onSaveShanges(event, editor);
                    }}
                    onBlur={(event, editor) => {
                        onSaveShanges(event, editor);
                    }}
                />
            </div>
        </div>
    );
}

export default TextEditor;
