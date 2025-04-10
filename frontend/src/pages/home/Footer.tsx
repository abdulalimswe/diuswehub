import { Row, Col} from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "50px",
      }}
    >
      <Row gutter={[16, 16]} justify="space-between" align="middle">

        <Col xs={24} sm={12} md={6} style={{ textAlign: "center" }}>
          <h4 style={{ color: "white" }}>Important Links</h4>
          <ul style={{ listStyle: "none", padding: 0, }}>
            <li>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                  color: "gray"
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/all-events"
                style={{
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                  color: "gray"
                }}
              >
                All Featured
              </a>
            </li>
            <li>
              <a
                href="/about"
                style={{
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                  color: "gray"
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "8px",
                  color: "gray"
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </Col>

        <Col xs={24} sm={12} md={6} style={{ textAlign: "center" }}>
          <h4 style={{}}>Follow Us</h4>
          <div style={{ fontSize: "24px", display: "flex", gap: "15px",  }}>
            <a href="#" style={{color: "gray"}}>
              <FacebookOutlined />
            </a>
            <a href="#" style={{color: "gray"}}>
              <TwitterOutlined />
            </a>
            <a href="#" style={{color: "gray"}}>
              <InstagramOutlined />
            </a>
            <a href="#" style={{color: "gray"}}>
              <LinkedinOutlined />
            </a>
          </div>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col span={24} style={{ textAlign: "center" }}>
          <p>
            © {new Date().getFullYear()} Department Of Software Engineering HUB. All rights reserved.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
