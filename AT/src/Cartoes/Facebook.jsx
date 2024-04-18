import Facebook from './Facebook.png'


function cartaoFacebook(){
    return(
        <> 
        <div className="cartaoFacebook">

        <div className="NumImg">
        <h1 className="Numeros">03</h1>
        <img src={Facebook} alt="facebook" className="facebook"/>
        </div>

        <h1 className="Titulo">Facebook</h1>
        <p className="Texto">Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
        </div>
        </>
    )
}
export default cartaoFacebook