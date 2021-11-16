import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import "./Form.css";
import { useFormik, } from "formik";
import { savePersonalForm} from "../store/ducks/forms/actions";
import logoImg from '../assets/logo.png';
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
nomeCompleto: Yup.string().required(( "Campo obrigatório" )), 
idade: Yup.number().positive().integer().required(("Campo obrigatório" )),
email: Yup.string().email().required(("Campo obrigatório" )),
cpf: Yup.string().required(("Campo obrigatório" )),
telefone: Yup.string().required(("Campo obrigatório" )),
})


export default function Form() {
  const { nomeCompleto, idade, cpf, telefone, email } = useSelector(state => state.forms)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik=useFormik({
   initialValues:{
    nomeCompleto,
    idade,
    cpf,
    telefone,
    email,
},

});

return (

  <>
  <h1 id="titulo">Formulário de Adoção</h1>
  <div className="container">
    <form id="formulario" onSubmit={formik.handleSubmit}>
      <br/> <br/>
      <img  src={logoImg} alt="Be The Hero" />
      <div className="informacao">
        <ul className="criterios">
          <p >Para adotar um dos nossos gatinhos você deverá:</p>
          <br/> 
            
          <li>Ser maior de idade;</li>
          <li> Morar na região metropolitana do Recife; </li>
          <li>Ter condições financeiras para os custos da criação do gatinho.</li>
            <p>(custear vacinas,vermifugação,e veterinários sempre que necessário.); </p> 
          <li>preencher o formulário a seguir.</li>
        </ul>
      </div>
      <input className="espaco"
        id="nomeCompleto"
        name="nomeCompleto"
        type="text"
        placeholder="Nome Completo"
        value={formik.values.nomeCompleto}
        onChange={formik.handleChange}
      />
    
      <p className="erro">{formik.errors.nomeCompleto}</p>

      <input  className="espaco"
        id="idade"
        name="idade"
        type="text"
        placeholder="Idade"
        value={formik.values.idade}
        onChange={formik.handleChange}
      />
    
      <p className="erro">{formik.errors.idade} </p>
      <input  className="espaco"
        id="cpf"
        name="cpf"
        type="text"
        placeholder="CPF"
        onChange={formik.handleChange}
        value={formik.values.cpf}
      />
      <p className="erro">{formik.errors.cpf}</p>
        <input  className="espaco"
        id="email"
        name="email"
        type="text"
        placeholder="E-mail"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <p className="erro">{formik.errors.email}</p>
          <input  className="espaco"
          id="telefone"
          name="telefone"
          type="text"
          placeholder="Telefone"
          onChange={formik.handleChange}
          value={formik.values.telefone}
        />
        <p className="erro">{formik.errors.telefone}</p>


        <button className="button" type="submit">
            Finalizar
        </button>
        
        <section>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#0a4e9b" />
            Não quero me cadastrar agora
          </Link>

        </section>  
    </form>
  </div>

     </>
  );
}
