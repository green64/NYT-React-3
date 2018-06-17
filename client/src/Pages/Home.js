import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
import SearchBody from "../components/SearchBody";
import Form from "../components/Form";
import Button from "../components/Button";
import Footer from "../components/Footer";
import axios from "axios";

class App extends Component {
  constructor (props){
    super(props)
  }
  state = {
    topic: ""
  }
  handleInputChange=(e) =>{
    console.log(e)
    this.setState({
      topic: e.target.value
    })
  }
  handleSubmit=() =>{
    console.log(this.state.topic)
    axios.post(`/test`, { topic:this.state.topic })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  //invoked to load component data
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>New York Times Scrubber</h1>
          <h3>now YOU decide what gets scraped</h3>
        </Jumbotron>
        <Wrapper>
            <SearchBody>
              <h2>Search</h2>
              <Form 
                handleInputChange={this.handleInputChange}
                {...this.props}
                value={this.state.topic}
              />
              <Button 
                className="search" 
                onClick={this.handleSubmit}
              >
                Search
              </Button>
            </SearchBody>
          
        </Wrapper>
        <Footer>
        <h2>NYT Scrubber</h2>
        </Footer>
      </div>
    );
  }
}
  export default App;
