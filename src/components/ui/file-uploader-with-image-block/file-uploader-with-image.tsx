import {useState, useRef} from 'react';
import {SuperInput} from "../input/input";
import {ButtonWithIcon} from "../button-with-icon/buttonWithIcon";
import s from "./file-uploader-with-image.module.scss"

export const FileUploaderWithImage = (props: PropsType) => {
    const {iconId, text} = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState('');

    const MAX_FILE_SIZE = 1048576; // 1MB in bytes
    const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];


    console.log(selectedFile)
    const handleFileInputChange = (event: any) => {
        const file = event.target.files && event.target.files[0];

        if (file) {
            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                alert('Only image/jpeg, image/png, image/gif formats are supported.');
                return;
            }

            if (file.size > MAX_FILE_SIZE) {
                alert('Max image size is 1 MB.');
                return;
            }

            setSelectedFile(file);
        }
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    setImageSrc(reader.result as string);
                }
            };
            reader.readAsDataURL(file);
        } else {
            setImageSrc('');
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const deleteImageSrc = () => {
        setImageSrc('')
    };

    return (
        <div className={s.container}>
            <img className={s.img}
                 src={imageSrc ? imageSrc : 'https://img.freepik.com/free-photo/red-prohibited-sign-no-icon-warning-or-stop-symbol-safety-danger-3d-illustration_56104-1991.jpg'}
                 alt={'No photo'}/>
            <SuperInput
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                onChange={handleFileInputChange}
            />
                {imageSrc ?
                    <div className={s.buttonBlock}>
                        <ButtonWithIcon onClick={handleButtonClick} iconId={iconId} text={text}/>
                        <ButtonWithIcon onClick={deleteImageSrc} iconId={"Delete"} text={"Delete file"}/>
                    </div>
                    :
                    <ButtonWithIcon className={s.buttonBlock} onClick={handleButtonClick} iconId={iconId} text={text} fullWidth={true}/>
                }
        </div>
    );
}

type PropsType = {
    iconId?: string
    text?: string
}