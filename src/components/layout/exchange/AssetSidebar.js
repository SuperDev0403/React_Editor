import React, { useState, useEffect, useRef } from "react";
import AssetDropdown from './AssetDropdown';
import AssetPrice from './AssetPrice';

const AssetSidebar = () => {
  // let intervalID = '';

  // const [data, setData] = useState(0);

  // const getData = () => {
  //     fetch('http://37.148.211.184:8081/trades?asset=BTCUSDT')
  //       .then(response => response.json())
  //       .then(data => {
  //         setData(data.trades);
  //         intervalID = setTimeout(getData.bind(this), 1000);
  //       });
  // }

  // useEffect(() => {
  //     getData();
  //     return () => {
  //         clearTimeout(this.intervalID);
  //     };
  //   }, []);

  return (
    <div className="crypt-gross-market-cap mt-2">
      <div className="row">
        <div className="col-3 col-sm-6 col-md-6 col-lg-6">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-3">
              <AssetDropdown />
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Güncel BTC Fiyatı</p>
              <p>
                <AssetPrice />
              </p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-5">
              <p>Fark BTC</p>
              <p className="crypt-down">-0.0234230 -3.35%</p>
            </div>
          </div>
        </div>
        <div className="col-3 col-sm-2 col-md-3 col-lg-2">
          <p>En Yüksek BTC</p>
          <p className="crypt-up">0.435453</p>
        </div>
        <div className="col-3 col-sm-2 col-md-3 col-lg-2">
          <p>En Düşük BTC</p>
          <p className="crypt-up">0.09945</p>
        </div>
        <div className="col-3 col-sm-2 col-md-3 col-lg-2">
          <p>Hacim 24Hr</p>
          <p className="crypt-down">12.33445</p>
        </div>
      </div>
    </div>
  );
};

export default AssetSidebar;
