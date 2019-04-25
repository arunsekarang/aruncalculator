import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, Row, Col } from 'reactstrap';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcValue: ''
    };
    
  }

  handleClick = (value) => {
    // access to e.target here
    this.setState({calcValue: this.state.calcValue + value})
  }




  render() {
    return (
      <div className="App">
        <Row className="calcHeader bg-primary">
          <Col className="col-12 px-0 py-3"><h1 className="mb-0 text-light">Simple Calculator</h1></Col>
        </Row>
        <Row className="calcPage mt-4">
          <Col className="col-12 px-0">
            <div className="calc w-100 mx-auto">
              <Table>
                <thead>

                  <tr><th className="py-2 font-weight-normal text-left" colSpan="4">Standard</th></tr>
                  <tr><th colSpan="4" className="border-0 text-right font-weight-normal resultTab">{this.state.calcValue}</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td onClick={((e) => {this.setState({calcValue:''})})}>CE</td>
                    <td onClick={((e) => {this.setState({calcValue:''})})}>C</td>
                    <td onClick={((e) => {this.handleClick('%')})}>%</td>
                    <td onClick={((e) => {this.handleClick('/')})}>/</td>
                  </tr>
                  <tr>
                    <td onClick={((e) => {this.handleClick('7')})}>7</td>
                    <td onClick={((e) => {this.handleClick('8')})}>8</td>
                    <td onClick={((e) => {this.handleClick('9')})}>9</td>
                    <td onClick={((e) => {this.handleClick('*')})}>*</td>
                  </tr>
                  <tr>
                    <td onClick={((e) => {this.handleClick('4')})}>4</td>
                    <td onClick={((e) => {this.handleClick('5')})}>5</td>
                    <td onClick={((e) => {this.handleClick('6')})}>6</td>
                    <td onClick={((e) => {this.handleClick('-')})}>-</td>
                  </tr>
                  <tr>
                    <td onClick={((e) => {this.handleClick('1')})}>1</td>
                    <td onClick={((e) => {this.handleClick('2')})}>2</td>
                    <td onClick={((e) => {this.handleClick('3')})}>3</td>
                    <td onClick={((e) => {this.handleClick('+')})}>+</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td onClick={((e) => {this.handleClick('0')})}>0</td>
                    <td onClick={((e) => {this.handleClick('.')})}>.</td>
                    <td onClick={((e) => {this.setState({calcValue: eval(this.state.calcValue)})})}>=</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;



