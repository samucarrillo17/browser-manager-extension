import  {Header}  from "./components/Header"
import {Filter} from "./components/Filter"
import { CardsContainer } from "./components/CardsContainer"
import { useState } from "react"
import data from './data.json'
function App() {

  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("All");

  function handleFilterClick(selectedFilter) {
    setFilter(selectedFilter);
  }

  function handleToggle(name) {
    setExtensions(
      extensions.map(ext =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  }


  function handleRemove(name) {
    setExtensions(
      extensions.filter(ext => ext.name !== name)
    );
  }


  const filteredExtensions = extensions.filter(ext => {
    if (filter === "All") return true;
    if (filter === "Active") return ext.isActive;
    if (filter === "Inactive") return !ext.isActive;
    return true;
  });


  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px] ">
        
      <Header />
        <Filter handleFilterClick={handleFilterClick} selectedFilter={filter} />
        <CardsContainer
          filteredExtensions={filteredExtensions}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      </section>
    </main>
  )
}  

export default App
