import { useRef } from "react"
import { setTrainerNameG } from "../store/slices/TrainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./styles/Home.css"

const Home = () => {
const nameRef= useRef()
const navigate = useNavigate()
const dispatch = useDispatch()



const handelSubmit =(e)=>{
    e.preventDefault()
    dispatch(setTrainerNameG(nameRef.current.value.trim()))
    nameRef.current.value=""
    navigate("/pokedex")
}

  return (
    <div className="home_card">
        <div className="home_img">
            <img src="/img/Pokedex.png" alt="" />
        </div>
        <h2 className="home_hi">¡Hi Trainer!</h2>
        <p className="home_indications">To start in this application please, give me your trainer name</p>
        <form className="home_form" onSubmit={handelSubmit}>
            <input className="home_input"ref={nameRef} type="text" placeholder="Your trainer name.."/>
            <button className="home_btn">Catch them all!</button>
        </form>
        <div className="home_footer">
            <div className="home_red"></div>
            <div className="pokeball">
                <img src="/img/PokeBall.png" alt="" />
            </div>
            <div className="home_black"></div>
        </div>
    </div>
  )
}

export default Home