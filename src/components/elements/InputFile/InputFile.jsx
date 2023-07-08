import './InputFile.scss';
import { useState } from 'react';

const InputFile = () => {
    const [text, setText] = useState('Select file');

    return (
        <div className="input-file">
            <label className="input-file__label">
                <input
                    className="input-file__hidden visually-hidden"
                    name="file"
                    type="file"
                    onChange={(event) => {
                        if (event.target.files.length === 0) {
                            setText('Select file')
                        } else if (event.target.files.length === 1) {
                            setText(`Uploaded 1 file`)
                        } else {
                            setText(`Uploaded ${event.target.files.length} files`)
                        }
                    }}
                    multiple
                />
                <div className="input-file__custom">
                    <svg width="24" height="24">
                        <use href="#upload-icon" />
                    </svg>
                </div>
                <div className="input-file__text">
                    {text}
                </div>
            </label>
        </div>
    );
}

export default InputFile;