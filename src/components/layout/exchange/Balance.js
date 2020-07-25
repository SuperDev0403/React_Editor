import React, {useState, useEffect, useRef} from 'react'
//import axios from 'axios'

const ClosedOrder = () => {
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
              <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Varlık</th>
                                        <th scope="col">Miktar</th>
                                        <th scope="col">Hacim</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>BTC</th>
                                        <td>0.0000564</td>
                                        <td>6.6768876</td>
                                    </tr>
                                    <tr>
                                        <th>ETC</th>
                                        <td>0.000056</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>LTC</th>
                                        <td>0.0000234</td>
                                        <td>4.3456600</td>
                                    </tr>
                                    <tr>
                                        <th>XMR</th>
                                        <td>0.0000234</td>
                                        <td>4.3456600</td>
                                    </tr>
                                    <tr>
                                        <th>BIT</th>
                                        <td>0.0000567</td>
                                        <td>4.3456600</td>
                                    </tr>
                                    <tr>
                                        <th>EGF</th>
                                        <td>0.0000234</td>
                                        <td>4.3456600</td>
                                    </tr>
                                    <tr>
                                        <th>EER</th>
                                        <td>0.0000567</td>
                                        <td>4.3456600</td>
                                    </tr>
                                </tbody>
                            </table>
            </div>
        )
    }

export default ClosedOrder;