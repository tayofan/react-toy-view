/* 액션 타입 */
const CHANGE_PERPAGENUM = 'board/CHANGE_PERPAGENUM';
const CHANGE_PAGENUM = 'board/CHANGE_PAGENUM';
const CHANGE_TOTALCOUNT = 'board/CHANGE_TOTALCOUNT';

/* 액션 생성함수 */
export const changePerPageNum = perPageNum => ({type: CHANGE_PERPAGENUM, perPageNum});
export const changePageNum = pageNum => ({type: CHANGE_PAGENUM, pageNum});
export const changeTotalCount = totalCount => ({type: CHANGE_TOTALCOUNT, totalCount});

// 초기값
const initalState = {
    pagination: {
        pageNum: 1, //현재 페이지 번호
        perPageNum: 10, // 한화면에 보여줄 게시글 수
        pageRange: 10, // pagination에 보며줄 버튼수
        totalCount: 10
    }
}

// 리듀서 함수
export default function reducer(state = initalState,action) {
    switch (action.type) {
        case CHANGE_PAGENUM:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    pageNum: parseInt(action.pageNum,10)
                }
            };
        case CHANGE_PERPAGENUM:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    perPageNum: parseInt(action.perPageNum,10)
                }
            };
        case CHANGE_TOTALCOUNT:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    totalCount: action.totalCount
                }
            };
        default:
            return state;
    }
}


