import React, { useEffect, useState } from 'react'
import api from '../../services/api'

//URL DA API: /movie/now_playing?api_key=8c0bd34bf726b276d11bfb70a71ce3f0&language=pt-BR

export default function Home() {
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{

    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key:"8c0bd34bf726b276d11bfb70a71ce3f0",
          language: "pt-BR",
          page: 1,
        }
      })

      console.log(response.data.results)
    }

    loadFilmes()

  }, [])

  return (
    <div>
        <h1>Bem vindo a home</h1>
    </div>
  )
}
