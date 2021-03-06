import React, { Fragment} from 'react'

const Body = () => {
    return (
        <Fragment>
        <div class="container">
		<div class="row">
			<div class="col md-12 text-center">
				<h1 class="mt-5 mb-5 text-white">Top 100 Cryptocurrencies By Market Capitalization</h1>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="table-responsive">
					<table class="table table-striped crypt-table-market-cap">
					  <thead>
					    <tr>
					      <th scope="col">Rank</th>
					      <th scope="col" class="text-left pl-2">Name</th>
					      <th scope="col">Market Cap</th>
					      <th scope="col">Price</th>
					      <th scope="col">24 Hour Volume</th>
					      <th scope="col">Change</th>
					      <th scope="col">7 days</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th>1</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/btc.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">Bitcoin</a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-down"> -0.04%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
			      			data-bg = "fcbcb3"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>2</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/eth.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">Ethrium</a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-down"> -4.04%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[34,54,23,56,76,78,34,56,45]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>3</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/ltc.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">Litecoin</a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-up">3.04%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[55,40,80,90,65,59,81,81,56]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>4</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/btcc.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" />  <a href="index.html">
					      	BTCC
					      </a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-down">-0.45%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[89,23,67,45,23,45,78,34,56,67]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>5</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/xrp.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">
					      	XRP
					      </a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-up">6.04%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[34,45,56,67,65,45,34,23,45,56]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>6</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/tron.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">
					      	TRON
					      </a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-down">-6.7%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[45,34,45,56,67,45,56,67,78,67]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>7</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/stlr.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">
					      	Steller
					      </a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-up">2.04%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[56,45,67,45,34,45,56,67,56,45]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>8</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/tether.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">
					      	Tether
					      </a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-up">5.04%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>9</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/dash.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">
					      	Dash
					      </a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-up">2.04%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[65,59,81,81,56,55,40,80,90]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					    <tr>
					      <th>9</th>
					      <td class="text-left pl-2 font-weight-bold"><img src="images/coins/monero.png" width="20" class="pr-1 crypt-market-cap-logo" alt="coin" /> <a href="index.html">
					      	Monero
					      </a></td>
					      <td>$239048209</td>
					      <td>$4559</td>
					      <td>$2344234</td>
					      <td class="crypt-up">3.04%</td>
					      <td
			      			class ="crypt-marketcap-canvas"
			      			data-charts ="[65,81,40,80,56,59,81,55,90]" 
			      			data-bg = "d3f0df"
			      			data-border = "8cd8aa">
				      		<canvas></canvas>
				      	  </td>
					    </tr>
					  </tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="row mb-4 mt-2">
			<div class="col-md-6">
				<a href="" class="crypt-btn crypt-button-inline crypt-btn-green">Next 100 <i class="pe pe-7s-angle-right-circle"></i></a>
				<a href="" class="crypt-btn crypt-button-inline crypt-btn-red">View All</a>
			</div>
			<div class="col-md-6 mt-3">
				<p><i>*Coin Market Cap provides direct cryptocurrency market capitalization data</i></p>
			</div>
		</div>
		<hr />
		<div class="row">
			<div class="col-md-12">
				<div class="text-center">
					<h1 class="mt-5 mb-3"><b>Total Market Cap: <span class="crypt-up">$884,056,234,480</span></b></h1>
					<p class="mb-5">Last updated: Jan 20, 2019 3:00 PM UTC</p>
				</div>
			</div>
		</div>
	</div>
    </Fragment>
    )
}

export default Body;
