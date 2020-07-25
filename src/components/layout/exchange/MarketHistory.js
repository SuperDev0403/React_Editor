import React, {useState, useEffect, useRef} from 'react'
//import axios from 'axios'

const MarketHistory = () => {
    let intervalID = '';

    const [data, setData] = useState(0);

    const getData = () => {
        fetch('http://37.148.211.184:8081/trades?asset=BTCUSDT')
          .then(response => response.json())
          .then(data => {
            setData(data.trades);
            intervalID = setTimeout(getData.bind(this), 1000);
          });
    }

    useEffect(() => {
        getData();
        return () => {
            clearTimeout(this.intervalID);
        };
      }, []);

    if (data[0] === undefined) {
        return <span>Yükleniyor...</span>;
    } else { 
        return (
            <div>
            <table className="tabledeneme" style={{fontSize:"10px"}}>
                <thead>
                    <tr>
                        <th scope="col">Tarih</th>
                        <th scope="col">Miktar</th>
                        <th scope="col">Fiyat</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        React.Children.toArray(
                        data.map((item, i) => 
                            <tr>
                                 <td>{new Intl.DateTimeFormat('tr', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(item[2])}</td> 
                                {item[3] ? <td className="crypt-up">{item[1]}</td> : <td className="crypt-down">{item[1]}</td>}
                                <td>{item[0]}</td>
                            </tr>
                        )
                        )
                    }
                   
                </tbody>
            </table>
            </div>
        )
    }

    
     /*

     <td>{new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(data[0][2])}</td>
        {data[0][3] ? <td className="crypt-up">{data[0][1]}</td> : <td className="crypt-down">{data[0][1]}</td>}
     <td>{data[0][0]}</td>


    const [delay, setDelay] = useState(1000);
    const [data, setData] = useState(0);
  
    // Increment the counter.
    useInterval(() => {
        const result = await axios(
            'http://37.148.211.184:8081/trades?asset=BTCUSDT',
        );

        setData(result);
    }, delay);
  
    function handleReset() {
      setDelay(1000);
    }

           

    const [data, setData] = useState('');

    useEffect(() => {
        const interval = setInterval(async () => {

            const result = await axios(
                'http://37.148.211.184:8081/trades?asset=BTCUSDT',
            );

            setData(result.data.data);

          await fetch("http://37.148.211.184:8081/trades?asset=BTCUSDT")
          .then(res => res.json())
          .then(res => console.log(res))
          .then(res => setAssetHistory(res))

          console.log(assetHistory);
         
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }, []);
 */
    
}

export default MarketHistory;


/*

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tarih</th>
                        <th scope="col">Miktar</th>
                        <th scope="col">Hacim</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000564</td>
                        <td>6.6768876</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.000056</td>
                        <td>5.3424984</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000564</td>
                        <td>6.6768876</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.000056</td>
                        <td>5.3424984</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000564</td>
                        <td>6.6768876</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.000056</td>
                        <td>5.3424984</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td>0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                </tbody>
            </table>




const MarketHistory = () => {
    
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Tarih</th>
                        <th scope="col">Fiyat</th>
                        <th scope="col">Hacim</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000564</td>
                        <td>6.6768876</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-down">0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                </tbody>
            </table>
            <h6 className="text-center pt-2 pt-2">29384798 <span className="pl-3">938475</span></h6>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.000056</td>
                        <td>5.3424984</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000564</td>
                        <td>6.6768876</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000564</td>
                        <td>6.6768876</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000234</td>
                        <td>4.3456600</td>
                    </tr>
                    <tr>
                        <td>22:35:59</td>
                        <td className="crypt-up">0.0000567</td>
                        <td>4.3456600</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MarketHistory;
*/