import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Practice5 extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log("This is the props :",this.props)
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Hey there</h1>
            </div>
        );
    }
}

Practice5.propTypes = {

};

export default Practice5;