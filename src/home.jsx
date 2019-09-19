import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
 import NavigationBarHeader from './NavigationBar'
 import  Jobs from './jobs'

 class Home extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div >
            <div>
            <NavigationBarHeader/>
            <div>
            <Jobs/>
            </div>
            </div>
            
        </div>
      );
    }
  }
  export default Home;