import React, {useState, useEffect} from 'react'
import AssetPrice from './AssetPrice'


const MarketTrading = () => {
    let intervalID = '';

    const [data, setData] = useState(0);
    const [asks, setAsks] = useState(0);
    const [bids, setBids] = useState(0);

    const getData = () => {
        fetch('http://37.148.211.184:8081/orderbook?asset=BTCUSDT')
          .then(response => response.json())
          .then(data => {
            setBids(data.bids);
            setAsks(data.asks);
            
            intervalID = setTimeout(getData.bind(this), 1000);
          });
    }

    useEffect(() => {
        getData();
        return () => {
            clearTimeout(this.intervalID);
        };
      }, []);
    
    if (asks[0] === undefined || bids[0] === undefined) {
        return <span>Yükleniyor...</span>;
    } else { 
        return (
            <div>
                <table className="tabledeneme" style={{fontSize:"10px"}}>
                    <thead>
                        <tr>
                            <th scope="col">Fiyat</th>
                            <th scope="col">Miktar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        React.Children.toArray(
                        asks.map((item, i) => 
                            <tr>
                                <td className="crypt-down">{item[0]}</td>
                                <td>{item[1]}</td>
                            </tr>
                        )
                        )
                    }
                    </tbody>
                </table>
                <div>
                
                    <table className="tablexxx" style={{fontSize:"10px",backgroundColor:"black"}}>
                    <tbody>
                            <tr>
                            {asks[3] ? <td><AssetPrice/></td> : <td className="crypt-down"><AssetPrice/></td>}
                                
                                <td>93845.00</td>
                            </tr>
                    </tbody>
                </table>
                </div>
                <table className="tabledeneme" style={{fontSize:"10px"}}>
                    <tbody>
                    {
                        React.Children.toArray(
                        bids.map((item, i) => 
                            <tr>
                                <td className="crypt-up">{item[0]}</td>
                                <td>{item[1]}</td>
                            </tr>
                        )
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MarketTrading;