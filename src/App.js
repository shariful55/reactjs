import React from "react"
import Card from './Card'
import Data from './data.json'
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"

function App (){
   


    return <div>
        <h1 className="headingStyle"> Todo App </h1>
        {Data.map((item,index)=><Card key={index} title={item.title} desc={item.desc} />)}
        
      <h2 className="card">  <Card1 name="shariful" desc="This is whatever! "/> </h2>
      <Card2 />
      <Card3 />
        
    </div>
}

export default App;