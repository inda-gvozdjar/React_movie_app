import React, { Component } from 'react'


const API = 'https://api.themoviedb.org/3/';
const DEFAULT_QUERY = '?api_key=347e5fe5f85757e218ff7a8184236af6';


class Selected extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
        this.selected = this.selected.bind(this)
    }

    componentDidMount() {
        let path = window.location.pathname.split("/")
        if (path[3])
            this.selected(path[2] + '/' + path[3])
    }

    selected(match) {
        fetch(API + match + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
            })
    }

    render() {
        const infos = this.state.data;
        return (
            <div>
                <div className='details-main' >
                    <div >
                        <img className="detail-image" alt="box" src={"http://image.tmdb.org/t/p/w185/" + infos.poster_path} />
                    </div>
                    <div className="header-detail">

                        <h1>{infos.name ? infos.name : infos.title}</h1>
                    </div>
                    <div className="detail-info">

                        <h2> {infos.overview}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Selected;





