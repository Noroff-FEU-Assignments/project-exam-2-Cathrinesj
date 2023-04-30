import { Link } from 'react-router-dom';
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
  return (
      <Navbar expand="lg opacity">
        <Container>
          <Navbar.Brand href="/">Some</Navbar.Brand>
            <Nav className="me-auto d-none d-lg-block sticky-top opacity-75">
              <Link to="/profiles"><img src={People} className="icons"/></Link>
              <Link to="/"><img src={Posts} className="icons"/></Link>
              <Link to="/newPost"><img src={Add} className="icons"/></Link>
              <Link to="/userProfile"><img src={Profile} className="icons"/></Link>     
            </Nav>
            <Form className="d-flex d-none d-lg-block">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />  
            </Form>
            <Link to="/login"><img src={Logout} className="icons"/></Link>
            <Nav className="me-auto fixed-bottom d-lg-none d-block justify-content-center opacity">
              <Link to="/profiles"><img src={People} className="icons"/></Link>
              <Link to="/"><img src={Posts} className="icons"/></Link>
              <Link to="/newPost"><img src={Add} className="icons"/></Link>
              <Link to="/search"><img src={Search} className="icons"/></Link>
              <Link to="/userProfile"><img src={Profile} className="icons"/></Link>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;

