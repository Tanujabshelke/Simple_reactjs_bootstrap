import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Info from './Data'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
  
class App_1 extends React.Component {
   
    render(){
        const Info_1 = Info.map(data => <Main key={data.id} id={data.id} title={data.title} 
                        subtitle={data.subtitle} img={data.img} benefit={data.benefit} /> )
        return(
            <div>
                <Header />
                { Info_1}
                <Footer />
               
                
            </div>
        )
    }

}



export default App_1