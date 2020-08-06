import React from 'react'
import ResumeSection from './ResumeSection'

interface InputProps {
    parsedResume?: ParsedResume;
}

const Input: React.FunctionComponent<InputProps> = ({ parsedResume }) => {
    if (parsedResume) {
        return (
            <div> {
                Object.entries(parsedResume).map(([key, value]) => {
                    return <ResumeSection sectionTitle={key} value={value} />
                })}
            </div>
        )
    }
    else {
        return <></>
    }
}



export default Input