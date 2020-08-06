import React from 'react'

interface InputProps {
    parsedResume: string;
}

const Input: React.FunctionComponent<InputProps> = ({ parsedResume }) => {
    return (
        <p>{parsedResume}</p>
    )
}

export default Input