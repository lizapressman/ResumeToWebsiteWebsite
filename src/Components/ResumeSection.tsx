import React, { useState, useEffect } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

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
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text>{sectionTitle}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </InputGroup>
    )
}



export default ResumeSection