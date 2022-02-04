import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './App.css';
import { Icon } from 'leaflet';

const toothIcon = new Icon({
  iconUrl: '/tooth.svg',
  iconSize: [50, 50]
});

//https://www.youtube.com/watch?v=290VgjkLong&ab_channel=LogRocket
function OpenStreetMap_Mapnik() {
  return <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
}
function CartoDB_Positron() {
  return <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
  />
}
function CartoDB_Voyager() {
  return <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  />
}
function Stadia_AlidadeSmooth() {
  return <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
  />
}
function Stadia_AlidadeSmoothDark() {
  return <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
  />
}


function App() {
  return (
    <div className="App">
      {/* <i class="fas fa-tooth test"></i> */}
      <MapContainer center={[52.237049, 21.017532]} zoom={12}>
        {OpenStreetMap_Mapnik()}
        <Marker position={[52.28160547266635, 20.936776706045876]}
          icon={toothIcon}
        >
          <Popup>
            <div>
              <h2>XD</h2>
              <p>xd</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <MapContainer center={[52.28160547266635, 20.936776706045876]} zoom={20}>
        {OpenStreetMap_Mapnik()}
        <Marker position={[52.28160547266635, 20.936776706045876]}
          icon={toothIcon}
        >
          <Popup>
            <div>
              <h2>XD</h2>
              <p>xd</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>


      <MapContainer center={[52.237049, 21.017532]} zoom={12}>
        {CartoDB_Positron()}
        <Marker position={[52.28160547266635, 20.936776706045876]}
          icon={toothIcon}
        >
          <Popup>
            <div>
              <h2>XD</h2>
              <p>xd</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <MapContainer center={[52.28160547266635, 20.936776706045876]} zoom={20}>
        {CartoDB_Positron()}
        <Marker position={[52.28160547266635, 20.936776706045876]}
          icon={toothIcon}
        >
          <Popup>
            <div>
              <h2>XD</h2>
              <p>xd</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>


      <MapContainer center={[52.237049, 21.017532]} zoom={12}>
        {CartoDB_Voyager()}
        <Marker position={[52.28160547266635, 20.936776706045876]}
          icon={toothIcon}
        >
          <Popup>
            <div>
              <h2>XD</h2>
              <p>xd</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <MapContainer center={[52.28160547266635, 20.936776706045876]} zoom={20}>
        {CartoDB_Voyager()}
        <Marker position={[52.28160547266635, 20.936776706045876]}
          icon={toothIcon}
        >
          <Popup>
            <div>
              <h2>XD</h2>
              <p>xd</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      <MapContainer center={[52.237049, 21.017532]} zoom={12}>
        {Stadia_AlidadeSmooth()}
        <Marker position={[52.28160547266635, 20.936776706045876]}
          icon={toothIcon}
        >
          <Popup>
            <div>
              <h2>XD</h2>
              <p>xd</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
      <MapContainer center={[52.28160547266635, 20.936776706045876]} zoom={20}>
        {Stadia_AlidadeSmooth()}
        <Marker position={[52.28160547266635, 20.936776706045876]}
          icon={toothIcon}
        >
          <Popup>
            <div>
              <h2>XD</h2>
              <p>xd</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;

{/* <Map  >
        

        {parkData.features.map(park => (
          
        ))}

        {activePark && (
          <Popup
            position={[
              activePark.geometry.coordinates[1],
              activePark.geometry.coordinates[0]
            ]}
            onClose={() => {
              setActivePark(null);
            }}
          >
            <div>
              <h2>{activePark.properties.NAME}</h2>
              <p>{activePark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        )}
      </Map> */}