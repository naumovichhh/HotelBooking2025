import { Button } from "react-bootstrap";

function Pagination({ page, pageNum, onPrevPage, onNextPage }) {
    return <>
        <Button disabled={page <= 1} onClick={onPrevPage} variant="secondary">{'<'}</Button>
        <span className="mx-3">{page}</span>
        <Button disabled={page >= pageNum} onClick={onNextPage} variant="secondary">{'>'}</Button></>;
}

export default Pagination;
const pageSize = 5;
export { pageSize };