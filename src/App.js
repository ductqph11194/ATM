import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ListUser from './conponents/ListUser';
function App() {
  const [listAcc, setListAcc] = useState([]);

  useEffect(() => {
    fetch(`https://611c56aea18e850017deca5d.mockapi.io/accounts`).then((response) => response.json())
      .then((data) => {
        setListAcc(data)
        console.log(data);;
      })
      .catch((error) => console.error(error));
  }, [])
  // fetch(`https://611c56aea18e850017deca5d.mockapi.io/accounts`).then((response) => response.json())
  //   .then((data) => {
  //     setListAcc(data)
  //     console.log(data);;
  //   })
  //   .catch((error) => console.error(error));

  console.log('hello', listAcc.id);
  return (
    <>
      <ListUser users={listAcc} />
    </>
  );
}

export default App;
