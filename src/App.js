import React from 'react';
import './index.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            zoom: 13,
            maptype: 'roadmap',
        }
    }

    componentDidMount() {
        let map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 47.836296, lng: 35.131263},
            zoom: 13,
            mapTypeId: 'roadmap',
        });
        map.addListener('zoom_changed', () => {
            this.setState({
                zoom: map.getZoom(),
            });
        });

        map.addListener('maptypeid_changed', () => {
            this.setState({
                maptype: map.getMapTypeId(),
            });
        });
        let marker = new window.google.maps.Marker({
            map: map,
            position: {lat: 47.836296, lng: 35.131263},
        });
    }

    render() {
        return (
            <div id='app'>
                <div id='state'>
                    <h1>State</h1>
                    <p>
                        Zoom level: {this.state.zoom}<br />
                        Map type: {this.state.maptype}
                    </p>
                </div>

                <div id='map' />
            </div>
        );
    }
};