import React, { Component } from 'react'

export default class Filter extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            networks: [],
            contractLength : [],
            data : [],
            minute : []
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


    loadContractLength = () => {
        let contractLength =[
            {
                'value' : -1, 'name' : 'All'
            },
            {
                'value' : 1, 'name' : '1 month'
            },
            {
                'value' : 12, 'name' : '12 months'
            }
        ]
        this.setState({contractLength : contractLength})
    }


    loadDataNetwork = () => {
        let data = [
            {
                'value' : -1, 'name' : 'All'
            },
            {
                'value' : 2000, 'name' : '2GB+'
            },
            {
                'value' : 4000, 'name' : '4GB+'
            },
            {
                'value' : 5000, 'name' : '5GB+'
            }
        ]
        this.setState({data : data})
    }


    loadMinute = () => {
        let minute = [
            {
                'value' : -1, 'name' : 'All'
            },
            {
                'value' : 1000, 'name' : '1000 minutes'
            },
            {
                'value' : 3000, 'name' : '3000 minutes'
            },
            {
                'value' : 6000, 'name' : '6000 minutes'
            }
        ]
        this.setState({minute : minute})
    }
   

    componentDidMount() {
        this.loadNetwork();
        this.loadContractLength();
        this.loadDataNetwork();
        this.loadMinute();
    }

    changeFilter = () => {
        let filters = {};
        if (this.refs.network.value !== -1) {
            filters.network = parseInt(this.refs.network.value);
        }

        if (this.refs.contractLength.value !== -1) {
            filters.contractLength = parseInt(this.refs.contractLength.value);
        }

        if (this.refs.data.value !== -1) {
            filters.data = parseInt(this.refs.data.value);
        }

        if (this.refs.minute.value !== -1) {
            filters.minute = parseInt(this.refs.minute.value);
        }

        this.props.handleChange(filters); // ~ goi handleChangeFilter(filters)
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

                <div className="col-md-3">
                    <select ref="contractLength" onChange={this.changeFilter} name="contractLength" className="form-control">
                        {this.state.contractLength.map(item => {
                            return (
                                <option key={item.value} value={item.value}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div className='col-md-3'>
                    <select ref='data' onChange={this.changeFilter} name='data' className='form-control'>
                        {this.state.data.map(item => {
                            return(
                                <option key={item.value} value={item.value}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>

                <div className='col-md-3'>
                    <select ref='minute' onChange={this.changeFilter} name='minute' className='form-control'>
                        {this.state.minute.map(item => {
                            return (
                                <option key={item.value} value={item.value}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        )
    }
    





}