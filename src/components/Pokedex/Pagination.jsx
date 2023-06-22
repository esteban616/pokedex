/* eslint-disable react/prop-types */
import "./styles/Pagination.css"
const Pagination = ({ postPerPage, totalPost,paginate }) => {
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    PageNumbers.push(i);
  }
//   console.log(PageNumbers)
//   console.log(totalPost)
//   console.log(postPerPage)

  return (
  <ul className="pagination">
    
    {
        PageNumbers.map(number=>(
            <li key={number}>
               <button 
               className="pagination_btn" 
               onClick={()=>paginate(number)}>
                {number}
               </button>
            </li>
        ))
    }
  </ul>
  )
};

export default Pagination;
