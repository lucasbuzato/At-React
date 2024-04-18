import Tiktok from './Tiktok.png'

function cartaoTiktok(){
    return(
        <> <div className="cartaoTiktok">
            <div className="NumImg">
        <h1 className="Numeros">02</h1>
        <img src={Tiktok} alt="Tiktok" className="Tiktok"/>
        </div>
        
        <h1 className="Titulo">Tiktok</h1>
        <p className="Texto">Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
        </div>
        </>
    )
}
export default cartaoTiktok