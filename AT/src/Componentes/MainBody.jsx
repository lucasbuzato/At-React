import Cartoes from "../Componentes/Cartoes"
import Maintext from "./MainText"
import TextImage from '../img/Hero image.png'

function MainBody(){
    return(
        <>
        <div className="MainBody">
        <Maintext></Maintext>
        <img className="TextImg" src={TextImage} alt="" />
        </div>
        <Cartoes></Cartoes>
        </>
    )
}
export default MainBody