import {Button} from './Button'
export const Filter = ({handleFilterClick, selectedFilter}) => {

  

  return (
    <div className='mb-6 md:flex md:items-center md:justify-between'>
      <h2 className='dark:text-Neutral-0 text-center text-[34px] font-bold mb-6 md:mb-0'>Extensions List</h2>
      <div className='flex justify-around md:gap-4'>
        <Button handleFilterClick = {handleFilterClick} isActive={selectedFilter === "All"}>All</Button>
        <Button handleFilterClick = {handleFilterClick} isActive={selectedFilter === "Active"}>Active</Button>
        <Button handleFilterClick = {handleFilterClick} isActive={selectedFilter === "Inactive"}>Inactive</Button>
      </div>
    </div>
  )
}


