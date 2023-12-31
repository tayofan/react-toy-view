import React from "react";
import { Link } from "react-router-dom";

//test

const Board = React.memo(function Board({board,disableBoard}) {
    console.log("board 리랜더")
    return (
        <tr>
            <td>{board.no}</td>
            <td>
                <Link to={`/board/detail?no=${board.no}`}>{board.title}</Link>
            </td>
            <td>{board.author}</td>
            <td>{board.regDt}</td>
            <td>
                <button onClick={disableBoard}>삭제</button>
            </td>
        </tr>
    );
});

function BoardList({boards,disableBoard}) { 
    return (
        <table className="table table-secondary table=striped">
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody>
            {boards && boards.map(board => <Board key={board.code} board={board} disableBoard={() => disableBoard(board.code)}/>)}
            {(!boards || boards.length < 1) && 
                <tr><td colSpan="5">게시글이 없습니다.</td></tr>
            }
            </tbody>
        </table>
    );
}

export default React.memo(BoardList);