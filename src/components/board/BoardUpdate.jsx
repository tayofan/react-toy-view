import React from "react";
import { Link } from "react-router-dom";

function BoardUpdate({title,detail,onChange,onClick}) {
    console.log(title);
    return (
        <div>
            제목: <input name='title'  value={title || ''} onChange={onChange} /><br/>
            내용: <input name='detail'  value={detail || ''} onChange={onChange} /><br/>
            파일: <input type="file" id="test"/>
            <button onClick={onClick}>수정</button><Link to="/board/list">back</Link>
        </div>
    );
};

export default React.memo(BoardUpdate);