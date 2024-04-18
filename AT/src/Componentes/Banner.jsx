import {Link} from 'react-router-dom'; 

export default function Banner() {

    return(
        <div className='Banner'>
        
        <a><Link to='/'>Home</Link></a>
      
       
            <a><Link to='/Sobre'>Sobre</Link></a>
           
            
            <a><Link to='/Contato'>Contato</Link></a>
            
 
    </div>
    )
    }

