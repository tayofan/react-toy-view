import axios from "axios";
import React ,{ useState } from "react";

function FileUpload() {

    const [file, setFile] = useState(null);

    const handleChangeFile = (e) => {
        setFile(e.target.files);
    }

    const upload = () => {

        const fd = new FormData();
        Object.values(file).forEach((file)=>fd.append("file",file));

        try {
            axios.post('/api/board/fileupload',fd,{
                headers: {'Content-Type' : 'mulitpart/form-data'},
                baseURL: 'http://localhost:8080'
            })
        } catch (error) {
            
        }
    };
    return (
        <div>
            파일: <input type="file" id="test" onChange={handleChangeFile} multiple="multiple"/><br/>
            <button onClick={upload}>upload</button>
        </div>
    );
}

export default FileUpload;