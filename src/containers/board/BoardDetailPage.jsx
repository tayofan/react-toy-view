import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BoardDetail from "../../components/board/BoardDetail";

function BaordDetailPage() {

    // eslint-disable-next-line
    const [searchParams, setSsearchParams] = useSearchParams();
    const navigate = useNavigate();

    const no = searchParams.get("no");
    const [board,setBoard] = useState({});

    async function getBoard(no) {
        try {
            const res = await axios.get(
                `http://localhost:8080/api/board/detail?no=${no}`
            );
            setBoard(res.data);
        } catch (error) {
            
        }
    }

    const updateBoard = () => {
        navigate("/board/update",{
            state: board
        });
    };

    useEffect(() => {
        getBoard(no);
        // eslint-disable-next-line
    },[]);

    return(
        <BoardDetail board={board} auth={true} updateBoard={updateBoard}/>
    );

}

export default React.memo(BaordDetailPage);