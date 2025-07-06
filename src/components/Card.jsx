import { Button } from "./Button"
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';

export const Card = ({logo,name,description,isActive,handleToggle,handleRemove}) => {
    
  return (
    <div className="bg-Neutral-0 rounded-lg p-4 shadow-sm dark:bg-Neutral-800 ">
      <div className="flex gap-3 items-start mb-10">
      <img src={logo} alt="logo" />

        <div className="flex flex-col gap-2 ">
        <h2 className="font-bold text-[20px] dark:text-Neutral-0">{name}</h2>
        <p className="text-neutral-500 dark:text-Neutral-300">{description}</p> 
      </div>

      </div>

      <div className="flex justify-between items-center">
      <Button textSmall handleRemove={() => handleRemove(name)}>Remove</Button>
      <Toggle checked ={isActive} color="red" onClick={()=>handleToggle(name)}/>

      </div>

      </div>

    
  )
}


