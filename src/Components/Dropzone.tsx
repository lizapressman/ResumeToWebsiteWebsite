import React, { useMemo, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export const Dropzone: React.FunctionComponent = () => {
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

    const post = useMemo(() => {
        if (acceptedFiles[0]) {
            const formData = new FormData()
            formData.append('file', acceptedFiles[0])

            fetch('http://127.0.0.1:5000/upload', {
                method: 'POST',
                body: formData
              })
              .then(response => response.json())
              .then(data => {
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
                <p>Upload Resume</p>
                {/* <p>{acceptedFiles.map((file) => {return file.type})}</p> */}
            </div>
        </div>
    );
}

const baseStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '25vw',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
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



