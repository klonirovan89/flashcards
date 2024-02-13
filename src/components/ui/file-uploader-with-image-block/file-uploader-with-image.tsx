import {useState, useRef} from 'react';
import {SuperInput} from "../input/input";
import {ButtonWithIcon} from "../button-with-icon/buttonWithIcon";

export const FileUploaderWithImage = (props: PropsType) => {
    const {iconId, text} = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState('');

    const handleFileInputChange = (event: any) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);

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


    console.log(selectedFile !== null ? selectedFile : 'deded')

    return (
        <div >
            <img src={imageSrc ? imageSrc : 'https://img.freepik.com/free-photo/red-prohibited-sign-no-icon-warning-or-stop-symbol-safety-danger-3d-illustration_56104-1991.jpg'}
                 alt={'No photo'} style={{maxWidth: '100%', maxHeight: '100%'}}/>
            <SuperInput
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                onChange={handleFileInputChange}
            />
            <ButtonWithIcon onClick={handleButtonClick} iconId={iconId} text={text}/>
            {imageSrc && <ButtonWithIcon onClick={deleteImageSrc} iconId={"Delete"} text={"Delete file"}/>}
        </div>
    );
}

type PropsType = {
    iconId?: string
    text?: string
}