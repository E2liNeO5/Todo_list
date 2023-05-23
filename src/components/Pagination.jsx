import { useEffect, useState } from 'react'
import '../assets/css/pagination.css'
import TodoItemService from '../services/todo_item.service'

const Pagination = ({ page, setPage, todoItems }) => {
  const [maxPageNumber, setMaxPageNumber] = useState(1)

  useEffect(() => {
    async function getMaxPageNumber() {
      const data = await TodoItemService.getMaxPageNumber()
      setMaxPageNumber(data)
    }
    getMaxPageNumber()
  }, [todoItems])
  
  function pageChange(value) {
    setPage(prev => prev + value)
  }

  return (
    <div className="pagination-container">
      <button className="btn" onClick={ () => pageChange(-1) } disabled={ page === 1 }>&#9650;</button>
      <div className="pagination-page_number">{ page }</div>
      <button className="btn" onClick={ () => pageChange(1) } disabled={ !maxPageNumber || page === maxPageNumber }>&#9660;</button>
    </div>
  )
}

export default Pagination