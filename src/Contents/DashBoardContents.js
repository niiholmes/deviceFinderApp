import React, { useEffect } from 'react'
import '../css/DashBoardContents.css'
import {useState} from 'react'
import ReactMapGL, {GeolocateControl} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'





const DashBoardContents = () => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 7.6037,
        longitude: -25,
        zoom: 15

      });

     
      useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let newCoords = [position.coords.latitude, position.coords.longitude];
                const coordintates = newCoords.toString();
                console.log(coordintates);
            })
        }    
       
      },[])


    return(
        <>

<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <h4 className="navbar-brand col-md-3 col-lg-2 mr-0 px-7 mr-2" >Welcome firstname.... let's find your Device!</h4>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
</nav>

<div className='dashboard'>

<div className='vertical'>
    <h4>Device name</h4>
    <h4>Device model</h4>
    <h4>Device unique Number</h4>
    <h4>Owner</h4>
    <h4>Email</h4>
    

    <br></br>

    <h4>Current device location</h4>
    <h4>suburb/city</h4>
    <h4>country</h4>
    <h4>date</h4>
    <h4>time</h4>

    <br></br>

    <h4>Previous device location</h4>
    <h4>suburb/city</h4>
    <h4>country</h4>
    <h4>date</h4>
    <h4>time</h4>
</div>


<div className='second'>
<ReactMapGL
      {...viewport} mapboxApiAccessToken={'pk.eyJ1IjoibnBtMTAiLCJhIjoiY2tnOWUzd2pzMDBmMTJ0cGdhdWllZ2tuNCJ9.RootHaADay_ceb30kYJZTw'}
      mapStyle='mapbox://styles/npm10/ckg9gh4uk02sb19qqsngp79uk'
      onViewportChange={nextViewport => setViewport(nextViewport)}>

      <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          showAccuracyCircle={true}

        />
    </ReactMapGL>
</div>

</div>



        </>

 
     

            
    
    )
}

export default DashBoardContents


/*var geolocate = new mapboxgl.GeolocateControl();

map.addControl(geolocate);

geolocate.on('geolocate', function(e) {
      var lon = e.coords.longitude;
      var lat = e.coords.latitude
      var position = [lon, lat];
      console.log(position);
});
*/