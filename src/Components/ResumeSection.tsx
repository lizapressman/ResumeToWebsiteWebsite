import React, { useState } from 'react'

interface InputProps {
    sectionTitle: string;
    value: any;
}

const ResumeSection: React.FunctionComponent<InputProps> = ({ sectionTitle, value }) => {
    const [inputValue, setInputValue] = useState<string>("");

    // console.log(sectionTitle, value)
    return (
        <>
            <h2>{sectionTitle}</h2>
            <textarea
                value={value}
                onChange={() => setInputValue(value)}
            />
        </>
    )
}



export default ResumeSection