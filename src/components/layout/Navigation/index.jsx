import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import People from '../../../icons/People.svg';
import Posts from '../../../icons/Posts.svg'
import Add from '../../../icons/Add.svg';
import Search from '../../../icons/Search.svg';
import Profile from '../../../icons/Profile.svg';
import Logout from '../../../icons/Logout.svg';

function Navigation() {
  
  const navigate = useNavigate();
  const [auth] = useContext(AuthContext);
  const user = auth.name;
  
  const logout = () => {
    localStorage.clear();
    navigate('/*')
  }  
  
  return (
    <Navbar expand="lg opacity">
    <Container>
    <Navbar.Brand href="/posts">Some</Navbar.Brand>
    <Nav className="me-auto d-none d-lg-block sticky-top opacity-75">
    <Link to="/profiles"><img src={People} className="icons"/></Link>
    <Link to="/posts"><img src={Posts} className="icons"/></Link>
    <Link to="/newPost"><img src={Add} className="icons"/></Link>
    <Link to={`/profile/${user}`}><img src={Profile} className="icons"/></Link>     
    </Nav>
    <Form className="d-flex d-none d-lg-block">
    <Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
    />  
    </Form>
    <div onClick={logout}><img src={Logout} className="icons"/></div>
    <Nav className="me-auto fixed-bottom d-lg-none d-block justify-content-center opacity">
    <Link to="/profiles"><img src={People} className="icons"/></Link>
    <Link to="/posts"><img src={Posts} className="icons"/></Link>
    <Link to="/newPost"><img src={Add} className="icons"/></Link>
    <Link to="/search"><img src={Search} className="icons"/></Link>
    <Link to={`/profile/${user}`}><img src={Profile} className="icons"/></Link>
    </Nav>
    </Container>
    </Navbar>
    );
  }
  
  export default Navigation;
  
  