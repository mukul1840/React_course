
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap CSS
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Menus from './components/Menus';
import Home from './components/Home';
import Course from './components/Course';
import MyHeader from './components/MyHeader'
import AllCourse from './components/AllCourses';
import AddCourse from './components/AddCourse';
//import EulaDialog from './components/eulaDialog';

function App() {
  return (
    <div>
      
      <Router>
      <ToastContainer />
      <Container>
        <Row>
        <MyHeader/>
          <Col md={4}>
          <Menus/>
          </Col>
          <Col md={8}>
          <Routes>
          <Route path="/" Component={Home} exact/>
          <Route path= "/add-course" Component={AddCourse} exact/>
          <Route path="/view-courses" Component={AllCourse} exact/>
         
          </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
