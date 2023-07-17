/* 액션 타입 */
const CHANGE_PERPAGENUM = 'criteria/CHANGE_PERPAGENUM';
const CHANGE_PAGENUM = 'criteria/CHANGE_PAGENUM';
const CHANGE_TOTALCOUNT = 'criteria/CHANGE_TOTALCOUNT';
const CHANGE_INPUTS = 'criteria/CHANGE_INPUTS';
const SET_SEARCH = 'criteria/SEARCH';

/* 액션 생성함수 */
export const changePerPageNum = perPageNum => ({type: CHANGE_PERPAGENUM, perPageNum});
export const changePageNum = pageNum => ({type: CHANGE_PAGENUM, pageNum});
export const changeTotalCount = totalCount => ({type: CHANGE_TOTALCOUNT, totalCount});
export const changeInputs = ({name, value}) => ({type: CHANGE_INPUTS, name, value});
export const setSearch = ({keyword, type: types}) => ({type: SET_SEARCH, keyword, types});

// 초기값
const initalState = {
    pagination: {
        pageNum: 1, //현재 페이지 번호
        perPageNum: 10, // 한화면에 보여줄 게시글 수
        pageRange: 10, // pagination에 보며줄 버튼수
        totalCount: 10
    },
    search: {
        keyword: '',
        type: ''
    },
    inputs: {
        keyword: '',
        type: 'title'
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
        case CHANGE_INPUTS:
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: typeof action.value  === "number" ? parseInt(action.value,10) : action.value
                }
            };
        case SET_SEARCH:
            return {
                ...state,
                search: {
                    ...state.search,
                    keyword: action.keyword,
                    type: action.types
                }
            };
        default:
            return state;
    }
}


