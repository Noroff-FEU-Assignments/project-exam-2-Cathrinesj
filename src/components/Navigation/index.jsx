import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import People from '../../icons/People.svg';
import Posts from '../../icons/Posts.svg'
import Add from '../../icons/Add.svg';
import Search from '../../icons/Search.svg';

function Navigation() {
  return (
      <Navbar expand="lg opacity">
        <Container>
          <Navbar.Brand href="/people">React-Bootstrap</Navbar.Brand>
            <Nav className="me-auto d-none d-lg-block sticky-top">
              <Link to="/people"><img src={People} className="icons"/>People</Link>
              <Link to="/posts"><img src={Posts} className="icons"/>Posts</Link>
              <Link to="/newPost"><img src={Add} className="icons"/>New post</Link>     
            </Nav>
            <Form className="d-flex d-none d-lg-block">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />  
            </Form>
            <Link to="/userProfile"><img src={People} className="icons"/>Profile</Link>
            <Nav className="me-auto fixed-bottom d-block d-lg-none opacity">
              <Link to="/people"><img src={People} className="icons"/></Link>
              <Link to="/posts"><img src={Posts} className="icons"/></Link>
              <Link to="/newPost"><img src={Add} className="icons"/></Link>
              <Link to="/search"><img src={Search} className="icons"/></Link>
              <Link to="/userProfile"><img src={People} className="icons"/></Link>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;

