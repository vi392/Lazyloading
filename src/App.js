
import React, { Suspense } from 'react'
// import Lazyloading from './Lazyloading/Lazyloading'

const Lazy= React.lazy(()=>import('./lazylod/Lazyloading')) 

function App() {
  return (
    <>
    <h2>Hello ji lazy loading </h2> 
    <Suspense fallback= {<div><h2>loading..</h2></div>}>
    <Lazy/>
    </Suspense>
      
    </>
  )
}

export default App
