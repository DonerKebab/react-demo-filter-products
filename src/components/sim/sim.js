import React, { Component } from 'react'
import Filter from './filter'

export default class Sim extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            simList: []
        }

        this.defaultSimList =  [
            {
                "id": 123,
                "network": {
                    "id": 1,
                    "name": "Vodafone"
                },
                "data": 2000,
                "texts": 5000,
                "minutes": 3000,
                "contractLength": 12
            },
            {
                "id": 124,
                "network": {
                    "id": 2,
                    "name": "EE"
                },
                "data": 4000,
                "texts": 5000,
                "minutes": 1000,
                "contractLength": 1
            },
            {
                "id": 125,
                "network": {
                    "id": 3,
                    "name": "Three"
                },
                "data": 5000,
                "texts": 5000,
                "minutes": 6000,
                "contractLength": 1
            }
        ]
    }


    handleChangeFilter = (filters) => {
        const networkId = filters.network || -1
        const contractLengthValue = filters.contractLength || -1
        const dataValue = filters.data || -1
        const minute = filters.minute || -1
        let filteredSimList = [];

        for(const item of this.defaultSimList) {
            if (item.network.id === networkId && 
                item.contractLength === contractLengthValue 
                && item.data >= dataValue
                && item.minutes >= minute
                ) {
                    filteredSimList.push(item);
            }

        }

        this.setState({simList: filteredSimList});
    }


    componentDidMount() {
        this.setState({simList: this.defaultSimList});
    }


    renderSim = () => {
        return this.state.simList.map(sim => {
            return (
                <div key={sim.id} className="col-md-4">
                    <ul>
                        <li>Sim {sim.network.name}</li>
                        <li>Data allowanced: {sim.data}</li>
                        <li>Free minutes: {sim.minutes}</li>
                        <li>Free text: {sim.network.texts}</li>
                        <li>Contract length {sim.contractLength}</li>
                    </ul>
                </div>
            )
        })
    }


    render() {

        const simRenderResult = this.renderSim()

        return (
            <React.Fragment>
                <Filter handleChange={this.handleChangeFilter}></Filter>
                <div className="row">
                    {simRenderResult}
                </div>
            </React.Fragment>
            
        )
    }
}

