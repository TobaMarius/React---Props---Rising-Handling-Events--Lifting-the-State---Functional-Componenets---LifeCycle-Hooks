import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps)
        console.log("prevStates", prevState)
        // if (prevProps.counter.value !== this.props.counter.value) {
        //     Ajax call and get new data from the server
        // }
    }

    componentWillUnmount() {
        console.log("Counter - unmount")
    }

    render() {
        console.log("Counters - Rendered")
        const { onReset, counters, onDelete, onIncrement } = this.props;

        return (<div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter =>
                <Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} >
                    {/* <h4>Counter #{counter.id}</h4> */}
                </Counter>)}
        </div>);
    }
}

export default Counters;