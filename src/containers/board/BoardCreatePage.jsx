import axios from "axios";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import BoardCreate from "../../components/board/BoardCreate";
import useInputs from "../../hooks/useInputs";


function BoardCreatePage() {

    const navigate = useNavigate();
    const [{title, detail} , onChange, reset] = useInputs({
        inputs: {
            title: '',
            detail: ''
        }
    })

    const addBoard = async () => {
        try {
            await axios.post(
                `http://localhost:8080/api/board/addBoard`,
                {
                    no: 0,
                    title,
                    author: '곽성상',
                    detail,
                    regDt: moment().format('YYYY-MM-DD HH:mm:ss'),
                    code: moment().format('x'),
                }
            );
            reset();
            navigate("/board/list");
        } catch (error) {
            alert('이미 존재하는 제목입니다.');
        }
    }    

    return (<BoardCreate title={title} onChange={onChange} detail={detail} onClick={addBoard}/>);
    
}

export default React.memo(BoardCreatePage);