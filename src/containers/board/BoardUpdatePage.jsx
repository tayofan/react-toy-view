import axios from "axios";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BoardUpdate from "../../components/board/BoardUpdate";
import useInputs from "../../hooks/useInputs";


function BoardUpdatePage() {
    // const { grantType, accessToken, refreshToken, tokenExpiresIn } = localStorage.getItem('login-token');
    const navigate = useNavigate();
    const location = useLocation();
    const board = location.state;
    // eslint-disable-next-line
    const [{title, detail}, onChange, reset, dispatch] = useInputs({
        inputs: {
            title: '',
            detail: ''
        }
    })

    useEffect(() => {
        dispatch({type:'CHANGE',name: 'title', value: board.title});
        dispatch({type:'CHANGE',name: 'detail', value: board.detail});
        // eslint-disable-next-line
    },[]);

    const updateBoard = async () => {
        try {
            await axios.post(
                `http://localhost:8080/api/board/update`,
                {
                    updtDt: moment().format('YYYY-MM-DD HH:mm:ss'),
                    title,
                    detail,
                    no: board.no,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('login-token')}`,
                        RefreshToken: `Bearer ${localStorage.getItem('refresh-token')}`
                    }
                }
            );
            navigate("/board/list");
        } catch (error) {
            alert('이미 존재하는 제목입니다.');
        }
    }

    return (
        <BoardUpdate title={title} onChange={onChange} detail={detail} onClick={updateBoard}/>
    );
    
}

export default React.memo(BoardUpdatePage);