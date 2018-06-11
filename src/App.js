import React from 'react';
import ContactList from "./components/contact";

class App extends React.Component{
   render(){
        const data1= this.props.data.map((data2)=>{
            return(
                <ContactList key={data2.id} name={data2.name} roll={data2.roll} />
            )
        });
       return(
           <div>
                <ul>
                    {data1}
                </ul>
           </div>
       )
   }
}
export default App;