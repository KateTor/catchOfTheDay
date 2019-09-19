import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {


    state = {
        fishes: {},
        order: {}
    }

    static propTypes = {
        match: PropTypes.object
    }

    addFish = fish => {
        //take a copy of the existing state - never mutate state directly
        const fishes = {...this.state.fishes}
        //add new fish to the new fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //set new fishes to state
        this.setState({
            fishes: fishes
        })
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes})
    }

    addToOrder = (key) => {
        //Take a copy of state
        const order = { ...this.state.order };
        //Either add or update order
        order[key] = order[key] + 1 || 1;
        //Call setState to update state
        this.setState({ order: order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key}details={this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} addToOrder={this.addToOrder}/>
            </div>
        )
    }
}

export default App;