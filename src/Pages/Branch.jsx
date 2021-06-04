import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NavBar from '../Components/Organisms/NavBar'
import Breadcrumb from '../Components/Atoms/Breadcrumb'
import Main from '../Components/Atoms/Main'
import { apikey } from '../constant'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Footer from '../Components/Organisms/Footer'

import hg from '../Images/hg.png'


const Branch = () => {

    const dispatch = useDispatch()
    const [selected, setSelected] = useState({});
    const [currentPosition, setCurrentPosition] = useState({});

    const branches = useSelector(state => state.branch.branches);

    const success = position => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    const onSelect = item => {
        setSelected(item);
    }

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        currentPosition
    }

    return (
        <div className="container">
            <NavBar id="nav-general" />
            <Breadcrumb id="breadcrumb" />

            <Main id="main">
                <LoadScript
                    googleMapsApiKey={apikey}>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={14}
                        center={currentPosition}>
                        {
                            currentPosition.lat &&
                            (
                                <Marker position={currentPosition}
                                    title="Estoy aqui!"
                                />
                            )
                        }
                        {
                            branches.map(item => {
                                item.location = { lat: item.latitud, lng: item.longitud }
                                return (
                                    <Marker key={item.name} position={item.location}
                                        onClick={() => onSelect(item)}
                                        icon={hg}
                                    />
                                )
                            })
                        }
                        {
                            selected.location &&
                            (
                                <InfoWindow
                                    position={selected.location}
                                    clickable={true}
                                    onCloseClick={() => setSelected({})}
                                >
                                    <div>
                                        <p>{selected.name}</p>
                                        <p>{selected.address}</p>
                                        <p>{selected.atention}</p>
                                    </div>
                                </InfoWindow>
                            )
                        }
                    </GoogleMap>
                </LoadScript>
            </Main>
            
            <Footer />
        </div>
    )
}

export default Branch
