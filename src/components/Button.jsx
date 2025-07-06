export const Button = ({children,textSmall,handleFilterClick,handleRemove}) => {
 
  return (
    <button className={`bg-Neutral-0 border border-Neutral-300 px-5 py-2 rounded-full hover:bg-Neutral-600 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 dark:bg-Neutral-800 dark:hover:bg-Red-500 ${textSmall ? 'text-[14px]': 'text-[20px]'} `} 
    onClick={() => {if (handleFilterClick) handleFilterClick(children); if (handleRemove) handleRemove()}}>

      {children}
    </button>
  )
}

