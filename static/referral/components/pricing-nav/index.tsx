import React, { forwardRef } from 'react'


import './price.css'

const PriceNav = forwardRef<HTMLElement>((props, developersRef) => (
	<section className='card' ref={developersRef}>
		<div className='mainActionsWrapper'>

			

			 <div className='mainActions'>
				<ul>
					<li><h5>Comece já</h5></li>
					<li><p>Checkout pré-integrado</p></li>
					<li><p>Bibliotecas e SDKs</p></li>
					<li><p>Plugins</p></li>
					<li><p>Amostras de código</p></li>
				</ul>

				<ul>
					<li><h5>Guias</h5></li>
					<li><p>Aceitar pagamentos online</p></li>
					<li><p>Gerenciar assinaturas</p></li>
					<li><p>Enviar pagamentos</p></li>
					<li><p>Configurar parametros presenciais</p></li>
				</ul>
			</div> 
		</div>

		
	</section>
))

export default PriceNav