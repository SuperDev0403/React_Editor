import React, {useState, useEffect, Fragment} from 'react'

const AssetPrice = () => {
    let intervalID = '';

    const [data, setData] = useState(0);

    const getData = () => {
        fetch('http://37.148.211.184:8081/price?asset=BTCUSDT')
          .then(response => response.json())
          .then(data => {
            setData(data.price);
            intervalID = setTimeout(getData.bind(this), 1000);
          });
    }

    useEffect(() => {
        getData();
        return () => {
            clearTimeout(this.intervalID);
        };
      }, []);
    
    if (data === undefined) {
        return <span>Yükleniyor...</span>;
    } else { 
        return (
            <Fragment>
                {data}
            </Fragment>
        )
    }
}

/*
 <div>
                <h6 className="text-center pt-2 pt-2"> <span className="pl-3">938475</span></h6>
            </div>
*/

export default AssetPrice;
