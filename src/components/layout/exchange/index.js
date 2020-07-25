import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { incNum, decNum } from "../../../redux/actions";
import Head from "./Head";
import Header from "../header/Header";
import HeaderUser from "../header/HeaderUser";
import Exchange from "./Exchange";
import ExchangeUserless from "./ExchangeUserless";
import Button from "react-bootstrap/Button";
import { TVChartContainer } from "../../TVChartContainer";

class index extends Component {
  constructor(props) {
    super(props);
  }

  addNum = () => {
    const payload = 1;
    this.props.incNum(payload);
  };

  subNum = () => {
    const payload = -1;
    this.props.decNum(payload);
  };

  render() {
    var user = [];
    let uservalue = 0;
    if (uservalue == 1) {
      user = (
        <Fragment>
          <Head />
          <body className="crypt-dark">
            <HeaderUser />
            <Exchange />
          </body>
          <footer></footer>
        </Fragment>
      );
    } else {
      user = (
        <Fragment>
          <Head />
          <body className="crypt-dark">
            <Header />
            <div className="d-flex">
              <Button variant="primary" onClick={this.addNum}>
                ADD NUM
              </Button>
              <Button variant="danger" className="ml-2" onClick={this.subNum}>
                SUB NUM
              </Button>
              <h1 className="ml-3">{this.props.number}</h1>
            </div>
            <ExchangeUserless />
          </body>
          <footer></footer>
        </Fragment>
      );
    }
    return <div>{user}</div>;
  }
}

// export default index;

const mapStateToProps = (state) => {
  return {
    number: state.testRedux.number,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incNum: (payload) => dispatch(incNum(payload)),
  decNum: (payload) => dispatch(decNum(payload)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(index));
