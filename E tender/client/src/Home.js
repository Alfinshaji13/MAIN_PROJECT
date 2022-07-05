import React, { Component } from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  async componentDidMount() {
    // let networkId = Object.keys(BidKaroNaContract.networks)[0]
  }
  render() {
    return (
      <div>
          <ThemeProvider theme={theme}>
            <Navbar
              history = {this.props.history}/>
            <br/>
            <div>
              <div style = {{'width' : '95%', 'background' : '#f5f5f5', 'margin' : '10px', 'borderRadius' : '20px', 'padding' : '20px', 'textAlign' :'left', 'color' : '#006064'}}>
                <h3>What is E Tender?</h3>
                <p>E Tender is a Blockchain based auction system</p>
                <p>This system will allow sellers to conduct online auction in a complete decentralized manner without relying on any central auction service</p>
                <p>With the very minimalistic and simple user interface of E Tender users can start their decentralized auctions almost immediately</p>
              </div>
            </div>
            <div style = {{'position' : 'absolute', 'bottom': '10px', 'width' : '100%'}}>
              <hr style = {{'width' : '70%'}}/>
              <p style = {{'display' : 'inline-block', 'marginLeft': '30px'}}> <a style = {{'color' : '#006064'}} href="https://github.com/Alfinshaji13/MAIN_PROJECT"><h2>Github</h2></a> </p>
            </div>
          </ThemeProvider>
      </div>
    );
  }
}
