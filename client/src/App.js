/** @format */

import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RoleAdmin from './pages/RoleAdmin';
import Roles from './pages/Roles';
import Manufacture from './pages/manufacture/Manufacture';
import Navbar from './component/Navbar';
import { useState } from 'react';
import React, { Component } from 'react';
import SupplyChainContract from './contracts/SupplyChain.json';
import { RoleDataContextProvider } from './context/RoleDataContext';
// import history from "./history";
// import { createBrowserHistory } from 'history';
import getWeb3 from './getWeb3';

// import AllManufacture from './pages/Manufacturer/AllManufacture';
// import ShipManufacture from './pages/Manufacturer/ShipManufacture';

// import './App.css';
// import ReceiveThirdParty from './pages/ThirdParty/ReceiveThirdParty';
// import PurchaseCustomer from './pages/Customer/PurchaseCustomer';
// import ShipThirdParty from './pages/ThirdParty/ShipThirdParty';
// import ReceiveDeliveryHub from './pages/DeliveryHub/ReceiveDeliveryHub';
// import ShipDeliveryHub from './pages/DeliveryHub/ShipDeliveryHub';
// import ReceiveCustomer from './pages/Customer/ReceiveCustomer';
// import ReceivedByCustomer from './pages/Customer/ReceivedByCustomer';
// import PurchaseThirdParty from './pages/ThirdParty/PurshaseThirdParty';

// import Explorer from './pages/Explorer';

class App extends Component {
  state = {
    web3: null,
    accounts: null,
    contract: null,
    mRole: null,
    tpRole: null,
    dhRole: null,
    cRole: null,
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SupplyChainContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SupplyChainContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      const mRole = localStorage.getItem('mRole');
      const tpRole = localStorage.getItem('tpRole');
      const dhRole = localStorage.getItem('dhRole');
      const cRole = localStorage.getItem('cRole');

      this.setState(
        {
          web3,
          accounts,
          contract: instance,
          mRole: mRole,
          tpRole: tpRole,
          dhRole: dhRole,
          cRole: cRole,
        },
        this.runExample
      );
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { contract } = this.state;
    console.log(contract);
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <h1 className="font-baskerville">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route
              path="/roleAdmin"
              element={
                <RoleAdmin
                  accounts={this.state.accounts}
                  supplyChainContract={this.state.contract}
                />
              }
            />
            <Route
              path="/roles"
              element={<Roles />}
            />
            <Route
              path="/manufacture/Manufacture"
              element={<Manufacture />}
            />
            {/* <RoleAdmin /> */}
            {/* <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </h1>
    );
  }
}
export default App;