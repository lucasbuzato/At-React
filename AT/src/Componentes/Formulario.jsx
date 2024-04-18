function formulario(){
    return(
        <> 
            <form>


                <div className="inputForms">
                <label>Nome:</label>
                <input  type="text" name="Email" value="" className="Inputs"/>
                </div>


                <div className="inputForms">
                <label>Email:</label>
                <input  type="text" name="Mensagem" value=""className="Inputs"/>
                </div>

                <div className="textarea">
                <label>Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows="10" cols="54"></textarea>
                </div>
                <input type="button" value="Enviar mensagem" className="botao2"/>
            </form>
        </>
    )
}
export default formulario