import React from "react";
import { Link } from "react-router-dom";

function BoardCreate({title,detail,onChange,onClick}) {

    return (
        <div>
            제목: <input name='title' placeholder='제목을 입력하세요' value={title} onChange={onChange} /><br/>
            파일: <input type="file" id="test"/><br/>
            본문:<br/><textarea name='detail' placeholder='내용을 입력하세요' value={detail} onChange={onChange} /><br/>
            <button onClick={onClick}>add</button><Link to="/board/list">back</Link>
        </div>
    );
};

export default React.memo(BoardCreate);