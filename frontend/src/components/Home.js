import React from "react";
import useFetchData from "./UseFetchData"
import Search from "./SearchHotels";
import Map from "./Map";

const Home = () => {
    const {status, hostels} = useFetchData();
    if (status==='fetched')
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col"><h3>Who we are</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet sem in tortor vehicula ultrices ut in arcu. 
                Morbi metus arcu, convallis eu aliquam at, dignissim at est. Donec ac pellentesque mauris, nec pretium nisi. Sed ac dignissim ante, non sagittis neque. 
                Vestibulum accumsan mattis erat, sit amet tincidunt nulla. Nulla ullamcorper dapibus purus, a egestas dui scelerisque vel. 
                Morbi tempor nunc in erat lacinia commodo. Mauris vulputate tempus orci, in mattis ante blandit eget. 
                Ut placerat condimentum nibh, in elementum lorem dictum nec. Fusce quis rhoncus nibh. 
                Vivamus ultrices efficitur nulla eget cursus. Nulla eu sodales mauris, eu auctor ex. Donec ultricies iaculis velit. Praesent et vehicula magna. 
                Nunc interdum orci a eros suscipit, in aliquet ante aliquam.</p>

                <p>Donec nec suscipit est. Donec sit amet erat lectus. Nunc posuere libero aliquam mauris rutrum consectetur. 
                  Suspendisse ultricies consectetur faucibus. Suspendisse tempor varius libero, eu gravida augue suscipit in. 
                  Pellentesque accumsan nulla et quam lacinia varius. Sed sollicitudin ante vel tellus malesuada fermentum et vel nibh. 
                  Aenean et bibendum metus. Aliquam congue accumsan risus in faucibus. Donec eu laoreet lectus. Praesent vitae quam sit amet velit maximus pharetra. 
                  Fusce molestie libero dui, non ultricies sapien mollis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              
            </div>
            <div className="col"><h3>Find Hostels on the map</h3>
            <Map hostels={hostels}/> 
            </div>
              <div className="col">
              <h3>Explore Hostels</h3>
                <Search hostel={hostels} />
              </div> 
          </div>
        </div>
      );
  };
  
export default Home;
