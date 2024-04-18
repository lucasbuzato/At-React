import '../App.css'
import CartaoInstagram from "../Cartoes/Instagram.jsx"
import CartaoFacebook from "../Cartoes/Facebook.jsx"
import CartaoYoutube from "../Cartoes/Youtube.jsx"
import CartaoTiktok from "../Cartoes/Tiktok.jsx"
function Cartoes(){
    return(
        <> <div className="cartoes">
        <CartaoYoutube></CartaoYoutube>
        <CartaoTiktok></CartaoTiktok>
        <CartaoFacebook></CartaoFacebook>
        <CartaoInstagram></CartaoInstagram>
        </div> </>
    )
}
export default Cartoes