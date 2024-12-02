import React from 'react'

import {container} from 'react-bootstrap'

const AUTHL_URL = "https://accounts.spotify.com/authorize?client_id=ffebdc2fbb6b4031a05a92337d9f798d&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login(){
  return <container>
    <a classname="btn btn-success btn-lg" href={AUTHL_URL}>Ingresar a KratosMusic</a>
  </container> 
    
  
}
