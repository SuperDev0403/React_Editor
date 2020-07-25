import React from 'react'

const MobileNavBar = () => {
  return (
    <div className="crypt-mobile-menu">
      <ul className="crypt-heading-menu">
        <li className="active">
          <a href="">Exchange</a>
        </li>
        <li>
          <a href="">Market Cap</a>
        </li>
        <li>
          <a href="">Treanding</a>
        </li>
        <li>
          <a href="">Tools</a>
        </li>
        <li className="crypt-box-menu menu-red">
          <a href="">register</a>
        </li>
        <li className="crypt-box-menu menu-green">
          <a href="">login</a>
        </li>
      </ul>
      <div className="crypt-gross-market-cap">
        <h5>
          $34.795.90 <span className="crypt-up pl-2">+3.435 %</span>
        </h5>
        <h6>
          0.7925.90 BTC <span className="crypt-down pl-2">+7.435 %</span>
        </h6>
      </div>
    </div>
  );
}

export default MobileNavBar