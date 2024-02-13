import {useState, useRef} from 'react';
import {SuperInput} from "../input/input";
import {ButtonWithIcon} from "../button-with-icon/buttonWithIcon";

export const FileUploader = (props: PropsType) => {
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

    console.log(selectedFile !== null ? selectedFile : 'deded')

    return (
        <>
            <SuperInput
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                onChange={handleFileInputChange}
            />
            <ButtonWithIcon onClick={handleButtonClick} iconId={iconId} text={text}/>
            <img src={imageSrc} alt={'fdfdfd'}/>
        </>
    );
}

type PropsType = {
    iconId?: string
    text?: string
}