import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'

export default function Filme() {

  const { id } = useParams()

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key:"8c0bd34bf726b276d11bfb70a71ce3f0",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        console.log(response)
      })
      .catch(()=>{
        console.log("Filme não encontrado")
      })
    }

    loadFilme()
  }, [])

  return (
    <div>
      <h2>Bem vindo ao filme {id}</h2>
    </div>
  )
}
