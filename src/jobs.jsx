import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const textValueData=[
    {
        job:"Python dev",
        text:"In this guide, I will explain how to cluster a set of documents using Python. My motivating example is to identify the latent structures within the synopses of the top 100 films of all time (per an IMDB list). See the original post for a more detailed discussion on the example. This guide covers:"
    },
    {
        job:"Android",
        text:"Javascript Array Find Example | Array.prototype.find() Tutorial is today’s leading topic. The Javascript Array find() method returns a value of the first item in an array that satisfies a provided testing function. Otherwise undefined will be returned. The Javascript Array find() method returns the value of the first element in an array that passes a test of provided function. If it finds an item "
    }
]

class Jobs extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        jobs:"Python dev",
        textvalue:''
      }
     
    }
   componentDidMount =()=>{
    this.setState({
        textvalue:textValueData.find(value =>value.job==this.state.jobs).text
    })
   }
    handleChange =(event)=>{
    this.setState({
        jobs:event.target.value
    })

    this.setState({
        textvalue:textValueData.find(value =>value.job==event.target.value).text
    })
    console.log (event)
    }
  
    render() {
      return (
        <div >
            <div class="card">
                <div style={{marginLeft:"15px", marginTop:"10px",textAlign:"left"}} class="form-group">
                    <select  value={this.state.jobs} onChange={this.handleChange} >
                        <option value="Python dev">Python dev</option>
                        <option value="Android">Android</option>
                    </select>
                </div>
                <div class="card-body">
                   {

                   } <p class="card-text">
                     {this.state.textvalue}    
                    </p>
                </div>
            </div>
        </div>
      );
    }
  }
export default Jobs;
