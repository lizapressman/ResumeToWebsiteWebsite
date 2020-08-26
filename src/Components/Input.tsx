import React, { useState } from 'react'
import ResumeSection from './ResumeSection'

interface InputProps {
    parsedResume: ParsedResume;
    setParsedResume: (parsedResume?: ParsedResume) => void;
}

const Input: React.FunctionComponent<InputProps> = ({ parsedResume, setParsedResume }) => {
    const updateResume = (key: string, value: any) => {
        (parsedResume as any)[key] = value
        setParsedResume(parsedResume)
    }
    if (parsedResume) {
        return (
            <div> {
                Object.entries(parsedResume).map(([key, value]) => {
                    return <ResumeSection sectionTitle={key} value={value} updateResume={updateResume} />
                })}
                <button onClick={() => console.log({ parsedResume })}>Submit</button>
            </div>
        )
    }
    else {
        return <></>
    }
}



export default Input