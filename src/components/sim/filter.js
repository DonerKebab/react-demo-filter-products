import React, { Component } from 'react'

export default class Filter extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            networks: [],
        }
    }

    loadNetwork = () => {
        let networks =  [
            {
                "id": -1, "name": "All"
            },
            {
                "id": 1, "name": "Vodafone"
            },
            {
                "id": 2, "name": "EE"
            },
            {
                "id": 3, "name": "Three"
            },
        ]

        this.setState({networks: networks})
        
    }
   

    componentDidMount() {
        this.loadNetwork();
    }

    changeFilter = () => {
        let filters = {};
        if (this.refs.network.value !== -1) {
            filters.network = parseInt(this.refs.network.value);
        }

        this.props.handleChange(filters);
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <select ref="network" onChange={this.changeFilter} name="network" className="form-control">
                        {this.state.networks.map(item => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })}
                    </select>
                </div>
            </div>
        )
    }
    





}