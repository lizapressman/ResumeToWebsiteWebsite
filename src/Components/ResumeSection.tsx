import React, { useState, useEffect } from 'react'

interface InputProps {
    sectionTitle: string;
    value: any;
    updateResume: (key: string, value: any) => void;
}

const ResumeSection: React.FunctionComponent<InputProps> = ({ sectionTitle, value, updateResume }) => {
    const [inputValue, setInputValue] = useState<string>(value);

    useEffect(() => {
        updateResume(sectionTitle, inputValue)
    }, [inputValue])

    return (
        <>
            <h2>{sectionTitle}</h2>
            <textarea
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
        </>
    )
}



export default ResumeSection