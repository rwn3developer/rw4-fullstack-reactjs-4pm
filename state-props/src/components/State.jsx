import { Component } from "react";
import Users from "./User";

class State extends Component {
    constructor() {
        super()
        this.state = {
            no: 1,
            users: [
                {
                    name: 'jay',
                    phone: 12355
                },
                {
                    name: 'ajay',
                    phone: 123556
                }
            ]
        }
    }

    Increment() {
        this.setState({ no: this.state.no + 1 })
    }

    Decrement() {
        this.setState({ no: this.state.no - 1 })
    }

    reset() {
        this.setState({ no: 1 })
    }

    squre() {
        this.setState({ no: this.state.no * 2 });
    }

    render() {
        return (
            <div align="center">
                <h1>Count :- {this.state.no}</h1>
                <button onClick={() => this.Increment()}>+</button>
                {
                    this.state.no == 0 ? <button disabled onClick={() => this.Decrement()}>-</button> : <button onClick={() => this.Decrement()}>-</button>
                }

                {
                    this.state.no == 0 ? <button disabled onClick={() => this.reset()}>Reset</button> : <button onClick={() => this.reset()}>Reset</button>
                }
                <button onClick={() => this.squre()}>Squre</button>

                <Users users={this.state.users}/>
                
            </div>
        )
    }
}

export default State