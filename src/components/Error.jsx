/* eslint-disable react/prop-types */
import "./Pokedex/styles/Loading.css"
const Error = ({ name }) => {
 

  return (

  <div className="error">
    <h1 className="error_title">The pokemon <span className="error_span">{name}</span> not exist! ❌</h1>
  </div>
   
  )
  
}

export default Error;
