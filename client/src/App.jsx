import React, { useContext, useState } from 'react'
import './style.css'
import Admin from './Admin'
import User from './User'
import Guest from './Guest'
import { GlobalContext } from './Context/context'
import { decodeToken } from 'react-jwt'

export const routePath = "/"


const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest']

export default function App() {
  const { state, dispatch } = useContext(GlobalContext)
 


  if (state.token == undefined)
  {
    state.user = undefined
  }
  else{
    let res = decodeToken(state.token)
    state.user = res?.role

  }

  
  
  return(
    <>
    {
      state?.user == "admin"? (<Admin />):(state?.user =="user"? (<User />):(<Guest />))
    }
    </>
  )

}
