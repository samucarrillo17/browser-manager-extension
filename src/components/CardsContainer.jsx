import {Card} from './Card'
export const CardsContainer = ({filteredExtensions, handleToggle,handleRemove }) => {


  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-3'>
      {
        filteredExtensions.map(extension => 
          <Card
            key={extension.name}
            handleToggle={handleToggle}
            handleRemove={handleRemove}
            {...extension}
          />
        )
      }
      
    </div>
  )
}

