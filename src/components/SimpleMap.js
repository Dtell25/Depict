import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geosuggest from 'react-geosuggest';
import Search from './Search';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 21.583094,
      lng: -15.278345
    },
    zoom: 0.1
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <Search /> 
        <GoogleMapReact
          bootstrapURLKeys={{ key: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
