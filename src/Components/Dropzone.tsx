import React, { useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Input from './Input'

export const Dropzone: React.FunctionComponent = () => {
    const [parsedResume, setParsedResume] = useState<ParsedResume>()

    const baseStyle: React.CSSProperties = {
        width: '25vw',
        textAlign: 'center',
        padding: '0vh 20vw 0vh 20vw',
        margin: 'auto',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
    };

    const activeStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        acceptedFiles
    } = useDropzone({ accept: '.pdf' });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    useMemo(() => {
        if (acceptedFiles[0]) {
            const formData = new FormData()
            formData.append('file', acceptedFiles[0])

            fetch('http://127.0.0.1:5000/upload', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    setParsedResume(data)

                    console.log(data)
                    return data;
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }, [acceptedFiles]);

    return (
        <div className="container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>{acceptedFiles[0] ? acceptedFiles[0].name : "Upload Resume"}</p>
            </div>
            <Input parsedResume={parsedResume} />
        </div>
    );
}