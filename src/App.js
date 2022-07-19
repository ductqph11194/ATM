import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const listUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(listUsers);
  return (
    <div className="App">
      {listUsers.map(user =>
        <div>
          <h2>{user.id}</h2>
          <h2>{user.card}</h2></div>
      )}
    </div>
  );
}

export default App;
