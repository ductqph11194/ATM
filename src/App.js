import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Account from './conponents/Account';
import { axiosClient } from './axiosClient';
import AddAccount from './conponents/AddAccount';
function App() {
  const [listAcc, setListAcc] = useState([]);

  const AccApi = {
    getAll() {
      const url = `/accounts`;
      return axiosClient.get(url);
    }
  }

  useEffect(() => {
    const getAcc = async () => {
      try {
        const { data } = await AccApi.getAll();
        setListAcc(data);
        console.log(data);
      }
      catch (error) {
        console.log(error);
      }
    }
    getAcc();
  }, [])


  return (
    <>
      <Account users={listAcc} />
    </>
  );
}

export default App;
