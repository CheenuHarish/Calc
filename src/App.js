import React,{useState} from 'react'
import Title from './components/title'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Panel  from './components/panel'
import Display from './components/display'

function App(props) {
  const [dis,setDis]=useState(' ')
  const [Ans,setAns]=useState(' ')
  const getchild = e => setDis(e)
  const getAns = e => setAns(e)
  return(
    <div className="container-md justify-content-sm-center d-flex flex-column ">
      {props.input}
      <Title value='Harish - Calculator' addres='IND' className="d-flex justify-items-sm-center"/>
      <Display a={dis} b={Ans}/>
      <Panel Ans={getAns} Data={getchild} />
    </div>
  )
}
export default App;