import '@/components/pagination/index.css';
import type { FC, ReactElement } from 'react';

export type PaginationProps = {
  pageCount: number;
  actualPage: number;
  handlePageChange: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({ actualPage, pageCount, handlePageChange }) => {
  const firstElement = actualPage <= 4 ? 1 : actualPage + 4 > pageCount ? pageCount - 4 : actualPage - 2;
  const visiblePages = firstElement + 4 <= pageCount ? firstElement + 4 : pageCount;
  const paginationItems: ReactElement[] = [];

  for (let index = firstElement; index <= visiblePages; index++) {
    paginationItems.push(
      <div
        className={`pagination-item ${index === actualPage ? 'pagination-item-selected' : ''}`}
        key={`pagination-item-${index}`}
        onClick={() => handlePageChange(index)}
      >
        {index}
      </div>
    );
  }

  return (
    <div className="pagination">
      {actualPage > 1 && <div className="pagination-item pagination-prev" onClick={() => handlePageChange(actualPage - 1)} />}
      {paginationItems}
      {actualPage < pageCount && <div className="pagination-item pagination-next" onClick={() => handlePageChange(actualPage + 1)} />}
    </div>
  );
};
