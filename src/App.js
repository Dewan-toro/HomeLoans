import { Form, Button, Image, Header, Segment } from "semantic-ui-react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDmcO74Q05QZv5XQuAUn8uglR_fg4lc1gTg&usqp=CAU" size="medium" />
      <Segment size="medium" style={{ width: "30vw", marginTop: "50px" }} raised>
        <Header>Login</Header>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email address" type="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Button fluid primary>
            Login
          </Button>
        </Form>
      </Segment>
    </div>
  );
}

export default App;
