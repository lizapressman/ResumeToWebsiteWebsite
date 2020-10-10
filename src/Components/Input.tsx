import React, { useState } from 'react'
import ResumeSection from './ResumeSection'

interface InputProps {
    parsedResume: ParsedResume;
    setParsedResume: (parsedResume?: ParsedResume) => void;
}

const Input: React.FunctionComponent<InputProps> = ({ parsedResume, setParsedResume }) => {
    const [html, setHTML] = useState("")

    const getHTML = (parsedResume: any) => {
        fetch('http://127.0.0.1:5000/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parsedResume.parsedResume)
        })
            .then(response => response.text())
            .then(data => {
                setHTML(data)
                console.log(data)
                return data;
            })
            .catch(error => {
                console.error(error)
            })
    }

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
                <button onClick={() =>
                    // console.log({ parsedResume })
                    getHTML({ parsedResume })
                }>Submit</button>
                <p>{html}</p>
            </div>
        )
    }
    else {
        return <></>
    }
}



export default Input