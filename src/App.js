import React from 'react';
import './style.css';
import Gallery from './component/Gallery';

const App = () => {
  return (
    <div className="color">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <p className="text mt-5">MARKETPLACE</p>
              <h3 className="text-color">Email Templates</h3>
              <h3 className="para">by the community, for the community.</h3>
              <p>100s of free templates to help you craft the perfect marketing journey.</p>
            </div>
            <div className="mt-5">
              <div className="fonts">
                <p className="para">Categories</p>
                <input type="checkbox" /> Announcement <br />
                <input type="checkbox" /> Educate & Inform <br />
                <input type="checkbox" /> Invitation <br />
                <input type="checkbox" /> Occasions <br />
              </div>
              <div className="content mt-3 d-flex flex-column flex-md-row">
                <div className="SearchBar mb-3 mb-md-0 mr-md-2">
                  <input type="text" placeholder="Search email templates" className="w-100" />
                </div>
                <div className="filter border d-flex flex-grow-1">
                  <p className="sort">Sort by:</p>
                  <select className="border-0 option flex-grow-1">
                    <option>Recent</option>
                    <option>Popular</option>
                    <option>Latest</option>
                    <option>Categories</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
