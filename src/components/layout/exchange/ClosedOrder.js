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
                                        <th scope="col">Tarih</th>
                                        <th scope="col">Al/sat</th>
                                        <th scope="col">BTC Fiyatı</th>
                                        <th scope="col">Toplam Baz puan</th>
                                        <th scope="col">Bitmiş Baz puan</th>
                                        <th scope="col">İşlem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-up">Al</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-down">Sat</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-down">Sat</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-up">Al</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-down">Sat</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-up">Al</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-down">Sat</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-up">Al</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-down">Sat</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.000056</td>
                                        <td className="crypt-down">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                    <tr>
                                        <th>22:35:59</th>
                                        <td className="crypt-up">Al</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.000056</td>
                                        <td className="crypt-up">0.0003456</td>
                                        <td>5.3424984</td>
                                    </tr>
                                </tbody>
                            </table>
            </div>
        )
    }

export default ClosedOrder;