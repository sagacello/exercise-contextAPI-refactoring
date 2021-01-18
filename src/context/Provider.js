import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CarsContext from './CarsContext';

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }
  moveCar(car, side) {
    const { cars } = this.state
    this.setState({
      cars: {
        ...cars,
        [car]: side,
      },
    });
  }

  changeSignal(signalColor) {
    const { signal } = this.state
    this.setState({
      signal: {
        ...signal,
        color: signalColor,
      },
    });
  }
 render() {
   const { children } = this.props
   const context = {
       ...this.state,
       changeSignal: this.changeSignal,
       moveCar: this.moveCar
   }
   return(
     <CarsContext.Provider value={ context }>
         { children }
     </CarsContext.Provider>
   )
 }
}

export default Provider;