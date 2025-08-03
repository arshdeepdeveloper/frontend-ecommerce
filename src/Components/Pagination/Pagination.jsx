import React from "react";

const Pagination = ({ total, limit, skip , onPageChange }) => {

    const totalPages = Math.ceil(total / limit);
    const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1); 
    console.log(pagesArray);
    const handlePageChange = (page) => {
        // Logic to handle page change, e.g., update skip value
        onPageChange((page - 1) * limit);
        console.log(`Page changed to: ${page}`);
    };
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {pagesArray.map((page) => (
            <li className="page-item" key={page}>
              <a className="page-link" href="#" onClick={() => handlePageChange(page)}>
                {page}
              </a>
            </li>
          ))}
          
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
