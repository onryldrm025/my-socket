import React, { useEffect, useState } from 'react'
import { socket } from './Socketservice'

export const App = () => {

  const [user, setUser] = useState([])
  const [user2, setUser2] = useState([])
  const [one, setOne] = useState(false)

  useEffect(() => {
    socket.emit('sayHello','Web Girdi');
    socket.on('msg', (ds)=>{
      console.log(ds)
    });
    socket.on('message', (data) => {
      // setUser((msj)=> [...msj,data])
      setUser((datas)=>[...datas,data])
    })
  },[])





  return (
    <div>
      {user && user.map((data, i) => {
        return <p key={i} >{data}  </p>
      })}
    </div>
  )
}
