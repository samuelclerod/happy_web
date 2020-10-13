import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapLocalMarker from '../images/local.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/OrphanagesMap.css'


const OrphanagesMap = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapLocalMarker} alt="" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Juazeiro do Nrote</strong>
                    <span>Ceará</span>
                </footer>



            </aside>

            <Map
                center={[-7.2823667, -39.310245]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;
