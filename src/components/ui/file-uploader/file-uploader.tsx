import {useState, useRef} from 'react';
import {SuperInput} from "../input/input";
import {ButtonWithIcon} from "../button-with-icon/buttonWithIcon";

export const FileUploader = (props: PropsType) => {
    const {iconId, text} = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    console.log(selectedFile)

    const handleFileInputChange = (event: any) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <SuperInput
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                onChange={handleFileInputChange}
            />
            <ButtonWithIcon onClick={handleButtonClick} iconId={iconId} text={text} variant={'secondary'}/>
        </>
    );
}

type PropsType = {
    iconId?: string
    text?: string
}