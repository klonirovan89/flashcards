import React, {useState, useRef} from 'react';
import {SuperInput} from "../input/input";
import {ButtonWithIcon} from "../button-with-icon/buttonWithIcon";

export const FileUploader = (props: PropsType) => {
    const {iconId, text} = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <SuperInput
                type="file"
                ref={fileInputRef}
                style={{display: 'none'}}
                onChange={handleFileInputChange}
            />
            <ButtonWithIcon  onClick={handleButtonClick} iconId={iconId} text={text}/>
        </>
    );
}

type PropsType = {
    iconId?: string
    text?: string
}