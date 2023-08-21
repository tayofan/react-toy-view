import axios from "axios";
import moment from "moment";
import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BoardList from '../../components/board/BoardList';
import SearchBox from "../../components/common/SearchBox";
import SelectBox from "../../components/common/SelectBox";
import { changeBoards } from "../../modules/board";
import { changeInputs, changePageNum, changePerPageNum, changeTotalCount, setSearch } from "../../modules/criteria";
import instance from "../../utils/axios_interceptor";
import { resetTokens } from "../../utils/token";

const options = {
    perPageNum: [
        { value: 10, lable: '10' },
        { value: 30, lable: '30' },
        { value: 50, lable: '50' },
    ],

    type: [
        { value: 'title', lable: '제목' },
        { value: 'author', lable: '작성자' },
        { value: 'detail', lable: '내용' },
    ]
};

function BoardListPage() {
    const { boards, criteria } = useSelector(state => ({
        boards: state.board.boards,
        criteria: state.criteria
    }),shallowEqual);

    const { pagination: { pageNum, perPageNum, pageRange, totalCount }, search, inputs } = criteria;
    const dispatch = useDispatch();

    const handlePerPageNum = e => dispatch(changePerPageNum(e.target.value));
    const handlePageNum = pageNum => dispatch(changePageNum(pageNum));
    const handleTotalCount = totalCount => dispatch(changeTotalCount(totalCount));
    const handleSearch = param => {
        console.log(param);
        dispatch(setSearch(param))
    };
    const handleInputs = e => dispatch(changeInputs(e.target));
    const handleBoards = boards => dispatch(changeBoards(boards));
    const navigate = useNavigate();

    async function fetchBoards(cri) {
        try {
            const res = await instance.post(
                'http://localhost:8080/api/board/pagingList',
                cri,

            );
            handleBoards(res.data);
            // if(res.data.length <= 0){
            //     fetchTotalCount(search);
            //     handlePageNum(1);
            // } else {
            //     handleBoards(res.data);
            // }
            // dispatch({type: 'CHANGE_BOARDS', value: res.data});
        } catch (error) {
            // resetTokens();
            // return navigate("/loginPage");
        }
    }

    // async function refreshAccess() {
    //     try {
    //         const res = await axios.post(
    //             'http://localhost:8080/api/board/pagingList',
    //             cri,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem('login-token')}`,
    //                     RefreshToken: `Bearer ${localStorage.getItem('refresh-token')}`
    //                 }
    //             }
    //         );
    //     } catch (error) {

    //     }
    // }

    const disableBoard = async (code) => {
        try {
            await axios.post(
                `http://localhost:8080/api/board/disable`,
                {
                    code: code,
                    delDt: moment().format('YYYY-MM-DD HH:mm:ss')
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('login-token')}`,
                        RefreshToken: `Bearer ${localStorage.getItem('refresh-token')}`
                    }
                }
            );
            fetchBoards({
                ...search,
                recode: (pageNum - 1) * perPageNum,
                perPageNum: perPageNum
            });
        } catch (error) {
            alert('에러띠!!!!!');
        }
    }

    const fetchTotalCount = async (cri) => {
        try {
            const res = await instance.post('http://localhost:8080/api/board/count',
                cri
            );
            handleTotalCount(res.data);
            // dispatch({type: 'CHANGE_TOTALCOUNT', value: res.data});
        } catch (error) {
            // const e = error;
            console.log(error);
        }
    };


    useEffect(() => {
        fetchTotalCount(search);
        // eslint-disable-next-line
    }, [search]);

    useEffect(() => {
        fetchBoards({
            ...search,
            recode: (pageNum - 1) * perPageNum,
            perPageNum: perPageNum
        });
        // eslint-disable-next-line
    }, [search, pageNum, perPageNum]);

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
                <Link to="/board/write">글쓰기</Link>
                <SearchBox
                    inputs={inputs}
                    options={options.type}
                    onChange={handleInputs}
                    onSearch={handleSearch}
                >
                <SelectBox name={'perPageNum'} options={options.perPageNum} defaultValue={perPageNum} onChange={handlePerPageNum} />

                </SearchBox>
            </div>
            <div className="card-body">
                <BoardList boards={boards} disableBoard={disableBoard} />
                
                <Pagination
                    activePage={pageNum}
                    itemsCountPerPage={perPageNum}
                    totalItemsCount={totalCount}
                    pageRangeDisplayed={pageRange}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageNum}
                />
            </div>

        </div>
    );
}

export default React.memo(BoardListPage);