import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import "./Form.css";
import { useFormik, } from "formik";
import { saveaddressForm } from "../store/ducks/forms/actions";
import logoImg from '../assets/logo.png';
import * as Yup from 'yup'
import ibge from "../api/ibge"
import viaCep from "../api/viaCep"
import { useState, useEffect } from 'react';

const validationSchema = Yup.object().shape({
  endereco: Yup.string().required(("Campo obrigatório")),
  numero: Yup.number().required(("Campo obrigatório")),
  cep: Yup.number().required(("Campo obrigatório")),
  bairro: Yup.string().required(("Campo obrigatório")),
  cidade: Yup.string().required(("Campo obrigatório")),
  estado: Yup.string().required(("Campo obrigatório")),
}
)
export default function FormTwo() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const { endereco, numero, cep, bairro,cidade,estado } = useSelector(state => state.forms)
  const dispatch = useDispatch();

  useEffect(() => {
    ibge.get('estados').then((response) => {
      const ufInitials = response.data.map((uf) => uf.sigla);

        setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    ibge.get(`estados/${formik.values.estado}/municipios`).then((response) => {
     
    });
  }, []);

  useEffect(() => {

  alert ("to aqui")
   viaCep.get(`${formik.values.cep}/json`).then((response) => {
     if(response.data && !response.data.erro){
       let dados = JSON.stringify(response.data)
       dados= JSON.parse(dados)
       formik.values.cidade= dados.localidade
     }
    });
  }, []);

const navigate = useNavigate();
const formik=useFormik({
  initialValues:{
    endereco,
    numero,
    cep,
    bairro,
    cidade,
    estado,

},
validationSchema,
    onSubmit:(values) => {
        dispatch(saveaddressForm(values))
    }

});




  return (
    <>
    <h1 id="titulo">Coloque seu Endereço</h1>
    <img className="dois" src={logoImg} alt="Be The Hero" />

    <div className="container">
   


        <form id="form" onSubmit={formik.handleSubmit}>
          <input
          id="endereco"
          name="endereco"
          type="text"
          placeholder="Endereço"
           value={formik.values.endereco}
           onChange={formik.handleChange}
          />
          <p className="erro">{formik.errors.endereco}</p>
          <input
           id="numero"
           name="numero"
           type="text"
           placeholder="número"
            value={formik.values.numero}
            onChange={formik.handleChange}
          />
          <p className="erro">{formik.errors.numero}</p>
          <input
            id="cep"
            name="cep"
            type="text"
            placeholder="CEP"
            onChange={formik.handleChange}
            value={formik.values.cep}
          />
          <p className="erro">{formik.errors.cep}</p>
           <input
           id="bairro"
           name="Bairro"
           type="text"
           placeholder="Bairro"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <p className="erro">{formik.errors.bairro}</p>
          <div className="input-group">
            <input
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Cidade"
              onChange={formik.handleChange}
              value={formik.values.cidade}
            />
          
            <p className="erro">{formik.errors.cidade}</p>
            <select
              id="estado"
              name="estado"
              type="text"
              placeholder="Estado"
              onChange={formik.handleChange}
              value={formik.values.estado}
            >
              <option value="0">Selecione uma UF</option>
                                {ufs.map(uf =>(
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
            </select>
            
            <p className="erro">{formik.errors.estado}</p>
          </div>

          <button className="button" type="submit">
            Finalizar Cadastro
          </button>
          <section>
        
          
        

        <Link to="/" className="back-link">
          <FiArrowLeft size={16} color="#0a4e9b" />
          Não quero me cadastrar agora
        </Link>
      </section>
        </form>
      </div>
    </>
  );
}
