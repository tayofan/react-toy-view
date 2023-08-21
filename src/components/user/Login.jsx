import React from "react";

function Login({ id, password, onChange}) {

    return (
        <div>
            id: <input name='id' placeholder='제목을 입력하세요' value={id || ''} onChange={onChange} /><br/>
            pswd: <input name='password' placeholder='제목을 입력하세요' value={password || ''} onChange={onChange} /><br/>
            
        </div>
    );
}

export default Login;