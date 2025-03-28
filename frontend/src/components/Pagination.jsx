function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Prev</button>

      {[...Array(totalPages).keys()].map((num) => {
        const page = num + 1;
        return (
          <button
            key={page}
            className={page === currentPage ? 'active' : ''}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
}

export default Pagination;
