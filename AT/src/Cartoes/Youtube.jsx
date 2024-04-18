import Youtube from './Youtube.png'

function cartaoYoutube(){
    return(
        <> <div className="cartaoYoutube">
            <div className="NumImg">
        <h1 className="Numeros">01</h1>
        <img src={Youtube} alt="Youtube" className="Youtube"/>
        </div>
        
        <h1 className="Titulo">Youtube</h1>
        <p className="Texto">Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
        </div> </>
    )
}
export default cartaoYoutube