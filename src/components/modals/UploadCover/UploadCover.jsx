import Button from '../../elements/Button/Button';
import InputFile from '../../elements/InputFile/InputFile';
import './UploadCover.scss';

const UploadCover = ({onClose}) => {

    return (
        <div className='upload-cover-modal'>
            <h2 className="upload-cover-modal__title">
                Upload cover
            </h2>
            <div className="upload-cover-modal__text">
                You can upload file, which format is JPG, GIF or PNG and which size is up to 10 MB.
            </div>
            <div className="upload-cover__input-wrapper">
                <InputFile />
            </div>
            <div className="upload-cover__button-wrapper">
                <Button
                    text="Submit"
                    style="dark w100"
                    action={onClose}
                />
            </div>
        </div>
    );
}

export default UploadCover;