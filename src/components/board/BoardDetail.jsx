import React from "react";
import { Link } from "react-router-dom";

function BoardDetail({board, fileName='없음', updateBoard, auth}) { 
    return (
        <div>
            제목: {board.title} <br/>
            내용: {board.detail}<br/>
            첨부파일: {fileName}<br/>
            {auth && <button onClick={updateBoard}>수정</button>}
            <Link to="/board/list">back</Link>
        </div>
    );
}

export default React.memo(BoardDetail);
