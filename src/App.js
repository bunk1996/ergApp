import React from 'react';
// import ImageUploader from 'react-images-upload';
//import logo from './logo.svg';
import logo from './rowers2.jpg'
import './app.scss'
//import $ from 'jquery';
import axios from 'axios'
//import { render } from '@testing-library/react';

class App extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = { user : ''};
      this.state = { pictures: [] };
      this.state = {base64TextString : ''}
  }

  _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result
    this.setState({
      base64TextString: btoa(binaryString)
    })
    if (this.state.base64TextString.length === 0) {
      this.setState({
        base64TextString: btoa(binaryString)
      })
    }
  }

  onChange=(e)=> {

    console.log("file to upload", e.target.files[0]);
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }

    
  }
 

  handleChange=(e)=> { 
    this.setState(
      {user: e.target.value},
      );  
  }

  onClickHandler=(e)=>{
    var url = '/api/' + String(this.state.user)
    axios.post('/api', {
      imageb64string: this.state.base64TextString
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(this.state.user)
  }

  title=()=>{
    return(
      <div>
        <header>
          This is another style
        </header>
        <h1>
          Welcome to ErgVision
        </h1>
        {/* <img src={logo} alt="Logo"/>; */}
        <h3>
          This is a new way to trace and track your training alongside your teammates. 
        </h3>
      </div>
    )
  }

  buttons=()=>{
    
    return (
    <div>
      <div>
      <input value={this.state.user} placeholder="User Name" onChange={this.handleChange}></input>
      </div>
      <div>
        <button onClick={this.onClickHandler}>Upload</button>
        
      </div>
      </div>
    
    )
  }

  imageUpload=()=>{
    return(
    <form onChange={(e) => this.onChange(e)}>
      <input
      type = "file"
      name = "image"
      id = "file"
      accept = ".jpeg,. png, .jpg"
      />
    </form>
    )
  }  
  render(){
    return(
      <div>
        <this.title/>
        <this.imageUpload/>
        <this.buttons/>
      </div>
    );
  }
}

export default App;
