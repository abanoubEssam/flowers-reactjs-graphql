import React, { useState } from 'react';
import Dropzone from "react-dropzone";


export interface FileUploadsProps {
    field: { name: string },
    form: { setFieldValue: any }
}

const FileUploads: React.FC<FileUploadsProps> = (props: FileUploadsProps) => {

    const [fieldValue, setFieldValue] = useState<any>('')
    const newLocal: any = <p>try to drop </p>;

    return (
        <Dropzone
            multiple={false}
            accept={"image/jpeg , image/png"}
            onDrop={([file]) => {
                setFieldValue(file.name)
            }}
            {...props}
        >
            { newLocal}
        </Dropzone >
    );
}

export default FileUploads;