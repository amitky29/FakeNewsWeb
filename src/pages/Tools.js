import React from 'react'
import axios from 'axios';
import * as settings from '../settings';
import styled from "styled-components";
// import SubmitButton from './ContactButton';
import SubmitButton from '../components/Contact/ContactButton';
import Model from '../components/Tool/Model';
import Loader from '../shared/components/Loader/Loader';



export default class PersonList extends React.Component {
    state = {
      h1: '',
      h2: '',
      add: '',
      output: '',
      loading: false,
      start: true,
      disable: false
    }
  
    handleChange = event => {
    console.log(this.state.loading);
      this.setState({ h1: event.target.value });
    }
  
    handleChange1 = event => {
        this.setState({ h2: event.target.value });
    }

    handleChange2 = event => {
        // this.nameInput.focus();
        this.setState({ add: event.target.value });
    }

    handleSubmit = event => {
      if ( this.state.add == '') {
          this.nameInput.focus();
          alert('Please Enter IP Address of Host!');
          
      }
      else {

        this.setState({start: false, loading: true, disable:true});
        console.log(this.state.loading);
        const user = {
          h1: this.state.h1,
          h2: this.state.h2
        };
        event.preventDefault();
      
  
        axios.post(`${this.state.add}`, { user } )
      //   axios.post(`http://127.0.0.1:8000/api/classify/`, {user})
          .then(res => {
            // console.log(res);
            // console.log(res.data);
            this.setState({ output: res.data })
            return res
          })
          .then(res => {
              this.setState({loading: false, h1: '', h2: ''});
  
          })
        
      }
        
    }
  
    render() {
      return (
        <ToolWrapper>
        <div>
          <form onSubmit={this.handleSubmit} className='form_container'>
            <div className='form_title'>
                <h3>Enter Heading and Content</h3>
            </div>
            <div className='form_heading'>
                    <label for='ad'></label>
                    <input type='text' id='ad' name='add' onChange={this.handleChange2} placeholder=" Enter IP Address" requried
                    ref={(input) => { this.nameInput = input; }} 
                    disabled={this.state.disable}
                    />
            </div>
            <div className='input_area'>
                
                <div className='form_heading'>
                    <label for='heading'>Heading: </label>
                    <br></br>
                    <textarea id='heading' type="text" name="h1" onChange={this.handleChange} rows='5' cols='50' required
                    ref={(inputh1) => { this.nameInputh1 = inputh1; }} disabled={this.state.disable}/>
                </div>
                <div className='form_heading'>
                    <label for='content'>Content: </label>
                    <br></br>
                    <textarea id='content' type="text" name="h2" onChange={this.handleChange1} rows='5' cols='50' required disabled={this.state.disable}/>
                </div>
            </div>
            
            {/* <button type="submit">submit</button> */}
            <SubmitButton text='submit' disable={this.state.disable} />
          </form>
          <div className='result_container'>
            {
                this.state.start?
                <h1>Testing....</h1>
                :
                this.state.loading ?
                // <h2>Loading..</h2>
                <Loader />
                :
                <Model res={this.state.output} />
            }
          </div>
        </div>
        </ToolWrapper>
      )
    }
  }


const ToolWrapper = styled.div`
    margin-top: 3rem;
    padding: 30px;
    min-height: 86vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  .form_container {
      /* margin: auto 0; */
      padding: 20px;
      /* background: purple; */
      /* box-shadow: 19px 9px 7px 3px rgba(0,0,0,0.3); */
      /* color: whitesmoke; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  .form_title {
      font-size: 25px;
      /* font-weight: ; */
      color: rgb(114, 185, 232);
      letter-spacing: 3px;
      padding: 15px;
      text-transform: uppercase;
      /* text-decoration: underline; */
  }
  .form_heading {
      font-size: 18px;
      font-weight: lighter;
      letter-spacing: 2px;
      padding: 15px;
      text-transform: uppercase;
  }
  .input_area {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
  textarea {
      // border: 1px solid grey;
      // border-radius: 10px;
      // outline: none;
      // padding: 6px;
      // font-weight: bolder;
      // font-size: 16px;
      width: 100%;
      height: 150px;
      padding: 12px 20px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #f8f8f8;
      resize: none;
  }
  .result_section_container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      /* border: 1px solid black; */
      
  }
  .result_heading {
      /* background: red; */
      width: 100%;
      height: 100%;
      border: 1px solid black;
  }
  .result_content {
      /* background: green; */
      width: 100%;
      height: 100%;
      border: 1px solid black;

  }
  .result_heading, .result_content {
      padding: 10px;
      display: flex;
      /* justify-content: center; */
      align-items: center;
      flex-direction: column;
  }
  .result_container {
      /* padding: 20px; */
      margin-top: 20px;
      /* width: 700px; */
      /* height: 400px; */
      max-width: 700px;
  }
  .result_title {
      padding: 5px;
      margin-bottom: 20px;
  }
`;

// export default Tool;