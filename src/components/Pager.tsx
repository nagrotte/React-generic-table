import React from 'react';
import './Pager.css';
interface PagerProps {
  numberOfPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pager: React.FC<PagerProps> = ({ numberOfPages, currentPage, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="pager">
      {[...Array(numberOfPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={index + 1 === currentPage ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pager;
