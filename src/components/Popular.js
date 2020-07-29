import React, { Component } from 'react';
import Box from './Box';

const API = 'https://api.themoviedb.org/3';
const DEFAULT_QUERY = '?api_key=347e5fe5f85757e218ff7a8184236af6';

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
        this.handleChanges = this.handleChanges.bind(this)
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.handleChanges()
        }

    }

    handleChanges() {
        fetch(API + this.props.location.pathname + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => {
                    return { ...prevState, data: data.results }
                })
            });

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { data } = this.state;
        // console.log("ojsaaa!#", data)
        return (
            <div>
                <ul>

                    {data.slice(0, 10).map(box =>
                        <Box box={box} key={box.id} />
                    )}
                </ul>
            </div>
        );
    }
}
export default Popular;



