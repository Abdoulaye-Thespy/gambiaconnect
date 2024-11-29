import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const OrganizationMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 h-[500px] md:h-[600px] lg:h-[700px]">
      <MapContainer center={[13.4590, -15.3101]} zoom={7} style={{ height: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map(item => (
          <Marker key={item.id} position={[item.latitude, item.longitude]}>
            <Popup>
              <h3>{item.organizationName}</h3>
              <p>Address: {item.address}</p>
              <p>Phone: {item.phoneNumber}</p>
              <p>Email: {item.email}</p>
              <p>Website: {item.companyWebsite}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default OrganizationMap;