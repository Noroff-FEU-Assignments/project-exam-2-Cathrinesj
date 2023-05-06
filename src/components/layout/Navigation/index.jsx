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
import { Stack } from 'react-bootstrap';

function Navigation() {
  
  const navigate = useNavigate();
  const [auth] = useContext(AuthContext);
  const user = auth.name;
  
  const logout = () => {
    localStorage.clear();
    navigate('/*')
  }  
  
  return (
    <Navbar expand="lg mb-2">
      <Container>
        <Navbar.Brand href="/posts">Some</Navbar.Brand>
        <Nav className="me-auto d-none d-md-block sticky-top">
          <Link to="/profiles"><img src={People} alt="Icon for profiles" className="icons"/></Link>
          <Link to="/posts"><img src={Posts} alt="Icon for posts" className="icons"/></Link>
          <Link to="/newPost"><img src={Add} alt="Icon for adding new post" className="icons"/></Link>
          <Link to={`/profile/${user}`}><img src={Profile} alt="Icon for profile" className="icons"/></Link>     
        </Nav>
        <Link to="/search">
          <Form className="d-flex d-none d-lg-block">
            <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />  
          </Form>
        </Link>
        <div onClick={logout}><img src={Logout} alt="Icon for logout" className="icons"/></div>
        <Nav className="navbar fixed-bottom d-md-none">
          <Stack direction="horizontal" gap={4} className='mx-auto'>
          <Link to="/profiles"><img src={People} alt="Icon for profiles" className="icons"/></Link>
          <Link to="/posts"><img src={Posts} alt="Icon for posts" className="icons"/></Link>
          <Link to="/newPost"><img src={Add} alt="Icon for adding new post" className="icons"/></Link>
          <Link to="/search"><img src={Search} alt="Icon for search" className="icons"/></Link>
          <Link to={`/profile/${user}`}><img src={Profile} alt="Icon for profile" className="icons"/></Link>
          </Stack>
        </Nav>
       </Container>
    </Navbar>
    );
  }
  
  export default Navigation;
  
  