import React from 'react';
import GardenBed from './garden-bed';
import Plot from './plot';
require('./index.scss');

export default class Farm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPlants: 0,
      plantSelected: "Turnip"
    };
  };

  onSelectPlant(plant) {
    this.setState({ plantSelected: plant });
  }

  render() {
    return (
      <div className="farm-component">
        <div className="farm-container">
          <h1>Ye Ol' Farm</h1>
          <p>Select your seeds:&nbsp;
            <button
              className={ this.state.plantSelected === 'Turnip' ? 'active' : null }
              onClick={ () => this.onSelectPlant("Turnip") }>
              Turnip
            </button>
            <button
              className={ this.state.plantSelected === 'Potato' ? 'active' : null }
              onClick={ () => this.onSelectPlant("Potato") }>
              Potato
            </button>
          </p>
          <p>Click on a plot to plant a { this.state.plantSelected }</p>
          <div className="garden-container">
            <GardenBed plantSelected={ this.state.plantSelected } />
            <GardenBed plantSelected={ this.state.plantSelected } />
            <GardenBed plantSelected={ this.state.plantSelected } />
          </div>
        </div>
      </div>
    );
  }
};
