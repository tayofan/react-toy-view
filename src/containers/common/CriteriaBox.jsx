import axios from "axios";
import { useEffect } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import SelectBox from "../../components/common/SelectBox";
import SearchBox from "../../components/common/SearchBox";
import { changePageNum, changePerPageNum, changeTotalCount } from "../../modules/criteria";

const options = {
    perPageNum: [
        {value: 10, lable: '10'},
        {value: 30, lable: '30'},
        {value: 50, lable: '50'},
    ],

    type: [
        {value: 'title', lable: '제목'},
        {value: 'author', lable: '작성자'},
        {value: 'detail', lable: '내용'},
    ]
};

function CriteriaBox() {

    const {pagination: {pageNum,perPageNum,pageRange,totalCount}, search,inputs} = useSelector(state => state.criteria);

    const dispatch = useDispatch();
    
    const handlePerPageNum = e => dispatch(changePerPageNum(e.target.value));
    const handlePageNum = pageNum => dispatch(changePageNum(pageNum));
    const handleTotalCount = totalCount => dispatch(changeTotalCount(totalCount));
    const handleSearch = param => dispatch(changeTotalCount(param));
    const handleInputs = e => dispatch(changeTotalCount(e.target));
     
    const fetchTotalCount = async (cri) => {
        try {
            const res = await axios.post('http://localhost:8080/api/board/count',
                cri
            );
            handleTotalCount(res.data);
            // dispatch({type: 'CHANGE_TOTALCOUNT', value: res.data});
        } catch (e) {
            
        }
    };

    useEffect(() => {
        fetchTotalCount(search);
        // eslint-disable-next-line
    },[search]);

    return (
        <div>
            <SelectBox name={'perPageNum'} options={options.perPageNum} defaultValue={perPageNum} onChange={handlePerPageNum} />
            <Pagination
                activePage={pageNum}
                itemsCountPerPage={perPageNum}
                totalItemsCount={totalCount}
                pageRangeDisplayed={pageRange}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageNum}
            />
            <SearchBox 
                inputs={inputs} 
                options={options.type}
                onChange={handleInputs} 
                onSearch={handleSearch}
            />
        </div>
    );
}

export default CriteriaBox;