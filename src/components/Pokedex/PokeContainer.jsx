/* eslint-disable react/prop-types */
import { useState } from "react"
import PokeCard from "./PokeCard"
import "./styles/Pokecard.css"
import Pagination from "./Pagination"

const PokeContainer = ({pokemons}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(12)


  const indexOfLastPost=currentPage * postPerPage;
  const indexOfFirstPost=indexOfLastPost - postPerPage;
  const currentPost = pokemons?.slice(indexOfFirstPost,indexOfLastPost)

  const paginate =(PageNumber)=>setCurrentPage(PageNumber)

  return (
    <>
    <Pagination postPerPage={postPerPage} totalPost={pokemons?.length} paginate={paginate} />
    <div className="pokeontainer">
      
        {
            currentPost?.map(pokemon =>(
                <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
                />
            ))
        }
    </div></>
  )
}

export default PokeContainer