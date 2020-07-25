import React, {useState, useEffect, useRef} from 'react'
import {Dropdown} from 'react-bootstrap';

const AssetDropdown = () => {
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
            <div>
            <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:"#0e162d", fontSize: "10px", display:"inline-block",width:"85px"}} id="dropdown-basic">
                    BTC/USDT
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-dark text-light" style={{fontColor:"white"}}> 
                    <table className="table table-striped" style={{fontSize:"12px"}}>
                <thead>
                    <tr>
                        <td scope="col"><img src="images/ethereumLogo.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="ethereum"/></td>
                        <td scope="col">ETH</td>
                        <td scope="col">67.78</td>
                        <td scope="col">0.325</td>
                        <td scope="col">0.325</td>
                    </tr>
                    <tr>
                        <td scope="col"><img src="images/bitcoinLogo.png" style={{maxHeight:"20px", maxWidth:"20px", marginRight:"5%"}} alt="bitcoin"/></td>
                        <td scope="col">BTC</td>
                        <td scope="col">67.78</td>
                        <td scope="col">0.325</td>
                        <td scope="col">0.325</td>
                    </tr>
                
                </thead>
            </table>
                </Dropdown.Menu>
                </Dropdown>
        </div>
        )
    }

export default AssetDropdown;