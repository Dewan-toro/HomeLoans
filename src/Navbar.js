import { Menu, Container, Image, Button } from "semantic-ui-react";

function Navbar() {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              src="https://i.ibb.co/sRxB8VL/Cybercode.png"
              style={{ marginRight: "1.5em" }}
            />
            CyberCode
          </Menu.Item>
          <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{marginLeft: "1.5em"}}>
                    Sign Up
                  </Button>
                </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}

export default Navbar;
