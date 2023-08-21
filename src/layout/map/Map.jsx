import axios from 'axios';
import { Map as OlMap, Overlay, View } from 'ol'; //뷰 관리
import Feature from 'ol/Feature';
import point from 'ol/geom/Point';
import { Tile as TileLayer } from 'ol/layer'; //지도타일
import VecterLayer from 'ol/layer/Vector';
import 'ol/ol.css'; //스타일
import { fromLonLat, get as getProjection } from 'ol/proj'; //위경도
import { OSM, XYZ } from 'ol/source'; //지도정보
import Vector from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';

function Map() {
    const [mapObject, setMapObject] = useState(new OlMap());
    const [state, setState] = useState(false);

    // const handleClickEvent = () => {
    //     setState((state) => !state);
    // }
    // const [coordinates, setCoordinates] = useState([0,0]);

    // const test = document.getElementById('popup')
    let container = document.createElement('popup');
    // container.classList.add('ol-popup-custom');
    container.innerHTML = `<span>popup</span>`;

    const popup = new Overlay({
        className: 'card',
        element: container,
        autoPan: {
            animation: {
                duration: 250,

            }
        },

    });

    useEffect(() => {
        const map = new OlMap({
            layers: [
                new TileLayer({
                    // source: new OSM()
                    source: new XYZ({
                        url: 'http://xdworld.vworld.kr:8080/2d/Base/201802/{z}/{x}/{y}.png'
                    })
                })
            ],
            target: 'map',
            view: new View({
                projection: getProjection('EPSG:3857'),
                center: fromLonLat([127.3810094, 36.358949559], getProjection('EPSG:3857')),
                zoom: 14,
                minZoom: 2,
                maxZoom: 19,
                
            }),

        })

        map.on('click', e => {
            console.log(e.coordinate);

            // setCoordinates(e.coordinate);



            if (state) {
                console.log('test');
            }

            const container = document.createElement('popup');
            // container.classList.add('ol-popup-custom');
            map.forEachFeatureAtPixel(e.pixel, (param) => {
                console.log(param.values);
                container.innerHTML = createPopupHtml(param);
                setState(true);
                // `<span>${param.values_.data.locplc_rdnmadr}</span>`;
            });

            popup.setPosition(e.coordinate);
            // setMarkerLayer(markerLayer, e.coordinate)
            popup.setElement(container);

        })

        const getData = async () => {
            try {
                const res = await axios.get(
                    `/seoguAPI/3660000/getPbctltInfo?pageNo=1&numOfRows=100&type=json`
                );
                const items = res.data.response.body.items;
                const markerLayer = new VecterLayer();
                setMarkerLayer(markerLayer, items);
                map.addLayer(markerLayer);
            } catch (error) {
                console.log(error)
                alert('에러띠!!!!!');
            }
        }

        map.addOverlay(popup);
        setMapObject(map);

        getData();

    }, [])

    return (
        <>
            <div className='row m-0 h-100'>
                <div className='col-sm-1 bg-dark' style={{ width: '4.333333%' }}>
                    <div className='mt-3'>
                        <Link to='/'>
                            <img className='w-100 mt-10' src='./logo192.png' />
                        </Link>
                    </div>
                </div>
                <div className='col-sm-11 m-0 p-0' style={{ width: '95.666667%' }}>
                    <div id="map" value={mapObject} style={{ height: '100%' }}></div>
                </div>
            </div>
        </>
    );
}

export default Map;

const createPopupHtml = (param) => {
    return `
        <div calss='card-header'>${param.values_.data.locplc_rdnmadr}</div>
        <div calss='card-body'>${param.values_.data.locplc_rdnmadr}</div>
    `;
}

const point_feature = (coordinate) => new Feature({
    geometry: new point(coordinate)
});

function setMarkerLayer(markerLayer, data) {
    const markersource = new Vector();

    data.forEach(element => {
        const feature = point_feature(fromLonLat([element.lo, element.la], getProjection('EPSG:3857')));
        feature.set('data', element);
        markersource.addFeature(feature);
    });

    const markerstyle = new Style({
        image: new Icon({
            opacity: 20,
            scale: 0.1,
            src: './logo192.png'
        }),
        zIndex: 10
    });

    markerLayer.setSource(markersource);
    markerLayer.setStyle(markerstyle);
}