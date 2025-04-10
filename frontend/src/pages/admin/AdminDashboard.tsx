import { Card, Col, Row, Statistic } from "antd";
import { useGetUsersQuery } from "../../redux/features/admin/userManagementApi";

const AdminDashboard: React.FC = () => {
  // Fetching data from the API
  const { data: users, isLoading: usersLoading } = useGetUsersQuery(undefined);

  const cardData = [
    {
      title: "Total Users",
      value: usersLoading ? "Loading..." : users?.data?.length || 0,
    },
  ];


  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={16}>
        {cardData.map((card, index) => (
          <Col span={6} key={index}>
            <Card
              title={card.title}
              bordered={false}
              hoverable
              style={{ textAlign: "center" }}
            >
              <Statistic
                value={card.value}
              />
            </Card>
          </Col>
        ))}
      </Row>

   
    </div>
  );
};

export default AdminDashboard;
