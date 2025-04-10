import { useParams, useNavigate } from "react-router-dom";
import { Card, Skeleton, Row, Col, Button, Divider } from "antd";
import { useGetProductByIdQuery } from "../../redux/features/admin/eventManagementApi";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: event, isLoading } = useGetProductByIdQuery(id as string);
  console.log("Fetched event data:", event);


  const handlePlaceOrder = () => {
    navigate(`/event/checkout/${id}`);
  };

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <Card style={{ width: "100%", marginTop: "16px" }}>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={12}>
          <img
            alt="event_img"
            src={event?.data?.eventImg}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Col>
        <Col xs={24} sm={12} md={12}>
          <div style={{ paddingLeft: "20px" }}>
            <h1>{event?.data?.name}</h1>
            
            <Divider />
            <p>
              <strong>Description:</strong>
            </p>
            <p>{event?.data?.description}</p>
            <Divider />

            <Button
              color="default" variant="solid"
              style={{ width: "50%", margin: "20px 0px" }}
              onClick={handlePlaceOrder}
            >
              Register
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default EventDetails;
