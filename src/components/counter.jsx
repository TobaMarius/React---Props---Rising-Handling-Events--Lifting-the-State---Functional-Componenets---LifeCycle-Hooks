import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     // tags: ['tag1', 'tag2', 'tag3']
    // };

    styles = {
        fontSize: 60,
        fontWeight: 'bold'
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrmenet.bind(this);
    // }

    // handleIncrement() {
    //     console.log('Increment clicked!', this);
    // }

    render() {
        console.log('Counter - Render')
        return (
            <div>
                {/* {this.props.children} */}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} style={{ fontSize: 30 }} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="button btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }


    // render() {
    //     return (
    //         <React.Fragment>
    //             <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //             <button style={{ fontSize: 30 }} className="btn btn-secondary btn-sm">Increment</button>
    //             <ul>
    //                 return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    //                 {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    //             </ul>
    //         </React.Fragment>
    //     );
    // }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? "warning" : 'primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;