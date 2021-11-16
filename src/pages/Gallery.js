
import React from 'react';
import gato1 from '../assets/gato1.jpg';
import gato2 from '../assets/gato2.jpg';
import gato3 from '../assets/gato3.jpg';
import gato4 from '../assets/gato4.jpg';
import gato5 from '../assets/gato5.jpg';
import gato6 from '../assets/gato5.jpg';
import './Gallery.css';

function Gallery() {
  return (  
  <div className="container">
    <div className="grid-container">
      <div className="grid-iten">
        <div className="zoom">
         {/*} <img src="" alt="gato1" />*/}
          <img src={gato1} alt="gato1" /> 
        </div>
        
        <div className="legenda">
          <h2 className="titulo-galeria">Adote a Olenka</h2>

            Fêmea 
            <p className="descricao-galeria"> Sem raça definida </p>
            <p>1 Ano</p>
            No abrigo desde: 05/11/2020
        </div>
        <br />
        
          <div >
          <button className="button-galeria" type="button" >Conheça a minha história</button> 
            <button className="button-galeria" type="button" >Quero adotar</button> 
          </div>
        </div>
      </div>
      <div className="grid-iten">
        <div className="zoom">
         {/*} <img src="./Galeria/Gatos/Gato 2.jpg" alt />*/}
         <img src={gato2} alt="gato2" /> 
        </div>
        <div className="legenda">
          <h2 className="titulo-galeria">Adote a Deyse</h2>
          <p className="descricao-galeria">
            Fêmea
            <br />
            Sem raça definida
            <br />3 Anos
            <br />
            No abrigo desde: 03/01/2021
          </p>
        </div>
        <br /> 
        
          <div action="">
          <button className="button-galeria" type="button" >Conheça a minha história</button> 
            <button className="button-galeria" type="button" >Quero adotar</button> 
          </div>
        </div>
      
      <div className="grid-iten">
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato 3.jpg" alt />*/}
          <img src={gato3} alt="gato3" /> 
        </div>
        <div className="legenda">
          <h2 className="titulo-galeria">Adote a Sofia</h2>
          <p className="descricao-galeria">
            Fêmea
            <br />
            Sem raça definida
            <br />6 Meses
            <br />
            No abrigo desde: 01/06/2021
          </p>
        </div>
        <br />
       
          <div>
          <button className="button-galeria" type="button" >Conheça a minha história</button> 
            <button className="button-galeria" type="button" >Quero adotar</button> 
          </div>
        </div>
      
      <div className="grid-iten">
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato001.jpg" alt />*/}
          <img src={gato4} alt="gato3" /> 
        </div>
        <div className="legenda">
          <h2  className="titulo-galeria">Adote o Pantera</h2>
          <p className="descricao-galeria">
            Macho
            <br />
            Sem raça definida
            <br />2 Anos
            <br />
            No abrigo desde: 11/08/2019
          </p>
        </div>
        <br />
        
          <div >
          <button className="button-galeria" type="button" >Conheça a minha história</button> 
            <button className="button-galeria" type="button" >Quero adotar</button> 
          </div>
        </div>
      
      <div className="grid-iten">
        <div className="zoom">
        {/*}  <img src="./Galeria/Gatos/gato 5.jpg" alt />*/}
        <img src={gato5}  alt="gato5" /> 
        </div>
        <div className="legenda">
          <h2  className="titulo-galeria">Adote o Feliz</h2>
          <p className="descricao-galeria">
            Macho
            <br />
            Sem raça definida
            <br />8 Meses
            <br />
            No abrigo desde: 17/03/2021
          </p>
        </div>
        <br />
          <div >
          <button className="button-galeria" type="button" >Conheça a minha história</button> 
            <button className="button-galeria" type="button" >Quero adotar</button> 
          </div>
        </div>
      
      <div className="grid-iten" id>
        <div className="zoom">
          {/*<img src="./Galeria/Gatos/gato 6.jpg" alt />*/}
          <img src={gato6} alt="gato6" /> 
        </div>
        <div className="legenda">
          <h2  className="titulo-galeria">Adote o Pitter</h2>
          <p className="descricao-galeria">
            Macho
            <br />
            Sem raça definida
            <br />4 Anos
            <br />
            No abrigo desde: 04/03/2021
          </p>
        </div>
        
          <div>
            <button className="button-galeria" type="button" >Conheça a minha história</button> 
            <button className="button-galeria" type="button" >Quero adotar</button> 
    
         
          </div>
        </div>
      </div>
    
  
  
     
    

  );
}

export default Gallery;
