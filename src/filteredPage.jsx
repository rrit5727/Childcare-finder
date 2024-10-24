import { useState, useEffect } from 'react';
import PropertyCard from './ChildcareCard';
import Footer from './Footer';
// import MapView from '../../components/MapView/MapView';

const FilteredPage = ({
  fifteenMinute,
  thirtyMinute,
  fortyFiveMinute,
  sixtyMinute,
  seventyFiveMinute,
  ninetyMinute,
}) => {
  const [totalItems, setTotalItems] = useState(10);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  // const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 1109) {
      setTotalItems(10);
    } else if (screenSize > 1109 && screenSize < 2604) {
      setTotalItems(12);
    } else if (screenSize > 2604 && screenSize < 3127) {
      setTotalItems(15);
    } else if (screenSize > 3127) {
      setTotalItems(18);
    }
  }, [screenSize, totalItems]);

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="filterPage">
      <div className='view-toggle'>
        <button onClick={() => handleViewModeChange('list')}>List View</button>
        <button onClick={() => handleViewModeChange('map')}>Map View</button>
      </div>

      
          <>
            {/* List View */}
            <div>
              <div className="headerBlock">
                <h1>15min travel radius</h1>
                <h3>Properties sorted by Price</h3>
              </div>
              <div className="filterCard">
                {fifteenMinute.slice(0, totalItems).map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    childcareData={property.childcareData}
                    travelTime={property.properties[0].travel_time}
                    distance={property.properties[0].distance}
                    transportation={property.transportation}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="headerBlock">
                <h1>30min travel radius</h1>
                <h3>Properties sorted by Price</h3>
              </div>
              <div className="filterCard">
                {thirtyMinute.slice(0, totalItems).map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    childcareData={property.childcareData}
                    travelTime={property.properties[0].travel_time}
                    distance={property.properties[0].distance}
                    transportation={property.transportation}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="headerBlock">
                <h1>45min travel radius</h1>
                <h3>Properties sorted by Price</h3>
              </div>
              <div className="filterCard">
                {fortyFiveMinute.slice(0, totalItems).map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    childcareData={property.childcareData}
                    travelTime={property.properties[0].travel_time}
                    distance={property.properties[0].distance}
                    transportation={property.transportation}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="headerBlock">
                <h1>60min travel radius</h1>
                <h3>Properties sorted by Price</h3>
              </div>
              <div className="filterCard">
                {sixtyMinute.slice(0, totalItems).map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    childcareData={property.childcareData}
                    travelTime={property.properties[0].travel_time}
                    distance={property.properties[0].distance}
                    transportation={property.transportation}
                  />
                ))}
              </div>
            </div>
            <div>
            <div className="headerBlock">
              <h1>75min travel radius</h1>
              <h3>Properties sorted by Price</h3>
            </div>
            <div className="filterCard">
              {seventyFiveMinute.slice(0, totalItems).map((property, index) => (
                <PropertyCard
                  key={property.id}
                  childcareData={property.childcareData}
                  travelTime={property.properties[0].travel_time}
                  distance={property.properties[0].distance}
                  transportation={property.transportation}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="headerBlock">
              <h1>90min travel radius</h1>
              <h3>Properties sorted by Price</h3>
            </div>
            <div className="filterCard">
              {ninetyMinute.slice(0, totalItems).map((property, index) => (
                <PropertyCard
                  key={property.id}
                  childcareData={property.childcareData}
                  travelTime={property.properties[0].travel_time}
                  distance={property.properties[0].distance}
                  transportation={property.transportation}
                />
              ))}
            </div>
          </div>
          </>
         {/* : (
          // Map View
          <MapView
            fifteenMinute={fifteenMinute.slice(0, totalItems)}
            thirtyMinute={thirtyMinute.slice(0, totalItems)}
            fortyFiveMinute={fortyFiveMinute.slice(0, totalItems)}
            sixtyMinute={sixtyMinute.slice(0, totalItems)}
            seventyFiveMinute={seventyFiveMinute.slice(0, totalItems)}
            ninetyMinute={ninetyMinute.slice(0, totalItems)}
          />
        ) */}
        

      <Footer />
    </div>
  );
};

export default FilteredPage;