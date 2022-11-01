import React from 'react'
import logo from '../medicina.jpg'
import Login from './Login'

const Analisis = () => {
  const [estado, setEstado] = React.useState(true)
  const atras = ()=>{
    setEstado(false)
   }
  return (

    <div>{
      estado ?

<div class="container mt-3">
		<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
			<div class="container-fluid">
            
        <img src={logo} alt="logo" style={{width: '40px'}} class="rounded-pill"/>
   
				<div class="container-fluid">
          
					<ul class="navbar-nav">
						<li class="nav-item">
            <h5 style={{color:"white"}}>Medical Analysis</h5>
						</li>
						
					</ul>

				</div>
        <button type="button" class="btn btn-dark btn-rounded" onClick={atras}>
        <i class="fas fa-hand-point-left"></i>
</button>
			</div>
		</nav>
    <br /><br />
    <h1>Formulario para la lectura de los analisis</h1>		 
	    </div>

      :
    <Login/>

}
</div>

  )
}

export default Analisis