import { Form, Input, Button, Row, Col, Card } from "antd";

const ContactPage = () => {
  return (
    <div style={{ margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "16px" }}>Contact Us</h1>
      <p style={{ textAlign: "center", marginBottom: "24px" }}>
        Have any questions? Feel free to reach out!
      </p>

      <Card
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Row gutter={16} justify="center">
          <Col xs={24} md={12}>
            <h3>Send a Message</h3>
            <Form layout="vertical" >
              <Form.Item label="Your Name">
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item label="Your Email">
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item label="Your Message">
                <Input.TextArea rows={4} placeholder="Write your message..." />
              </Form.Item>
              <Button color="default" variant="solid" style={{width: "50%"}} block>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>

     
      <h6 style={{ textAlign: "center", color: "gray" ,marginTop: "32px"}}>
        &copy; 2025 SWE HUB. All rights reserved.
      </h6>
    </div>
  );
};

export default ContactPage;
