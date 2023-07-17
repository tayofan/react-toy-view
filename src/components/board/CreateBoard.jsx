import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useInputs from "../../hooks/useInputs";

function CreateBoard() {
    useEffect(() => {
        console.log('create 리렌더링');
    });
    const navigate = useNavigate();
    const [{title, detail} , onChange, reset] = useInputs({
        inputs: {
            title: '',
            detail: ''
        }
    })
    
    const nextId = useRef(4);
    const addBoard = async () => {
        try {
            await axios.post(
                `http://localhost:8080/api/board/addBoard`,
                {
                    no: nextId.current,
                    title,
                    author: '곽성상',
                    detail,
                    regDt: moment().format('YYYY-MM-DD HH:mm:ss'),
                    code: moment().format('x'),
                }
            );
            reset();
            nextId.current += 1;
            navigate("/board/list");
        } catch (error) {
            alert('이미 존재하는 제목입니다.');
        }
    }

    return (
        <div>
            제목: <input name='title' placeholder='제목을 입력하세요' value={title} onChange={onChange} /><br/>
            내용: <input name='detail' placeholder='내용을 입력하세요' value={detail} onChange={onChange} /><br/>
            파일: <input type="file" id="test"/>
            <button onClick={addBoard}>add</button><Link to="/board/list">back</Link>
        </div>
    );
};

export default React.memo(CreateBoard);