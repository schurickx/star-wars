import React, { Component } from 'react';
import ErrorButton from '../error-button/index';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-details.css';



export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId || 
            this.props.getData !== prevProps.getData || 
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.setState({
                item: null
            });
            this.updateItem();
        }        
    }
    
    

    updateItem = () => {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }
        this.setState({
            loading:true,
            error: false
        })
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading:false
                })
            })
            .catch(() => {
                this.setState({
                    loading:false,
                    error: true
                });
            })
    }

    render() {

        const { item, image, loading, error } = this.state;
        
        if (!item && !loading) {
            return <span>Select a person from a list</span>;
        }
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        } 

        const { name } = item;
        return (
            <div className="item-details card">
                <img className="item-image"
                    src={image}
                    alt="item" />
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item });
                        })
                        }
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
                
    }
}


const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {Record};