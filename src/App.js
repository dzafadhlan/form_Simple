import AddData  from "./component/addData";
import EditData from "./component/editData";
import ListData from "./component/listData";
import { BrowserRouter as Router, Routes,  Route  } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<ListData/>}/>
        <Route path="/add"element={<AddData/>}/>
        <Route path="/edit/:id"element={<EditData/>}/>
      </Routes>
    </Router>
  );
}

export default App;
