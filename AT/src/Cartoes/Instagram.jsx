import Instagram from './Instagram.png'

function cartaoInstagram(){
    return(
        <> <div className="cartaoInstagram">
            <div className="NumImg">
        <h1 className="Numeros">04</h1>
        <img src={Instagram} alt="Instagram" className="Instagram"/>
        </div>
        
        <h1 className="Titulo">Instagram</h1>
        <p className="Texto">Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
        </div>
        </>
    )
}
export default cartaoInstagram