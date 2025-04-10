import { Card, Col, Row, Input, Skeleton, Pagination,Button } from "antd";
import { useGetAllProductsQuery } from "../../redux/features/admin/eventManagementApi";
import { TEvent } from "../../types";
import { TQueryParam } from "../../types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export type TTableData = Pick<TEvent, "name" | "description" | "eventImg"> & {
  eventHost: string;
};


const AllEvent = () => {
  
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const queryParams: TQueryParam[] = [
      { name: "limit", value: 10 },
      { name: "page", value: page.toString() },
      { name: "sort", value: "id" },
    ];

    if (searchQuery) queryParams.push({ name: "name", value: searchQuery });

    setParams(queryParams);
  }, [page, searchQuery]);

  const { data: events, isLoading } = useGetAllProductsQuery(params);

  const metaData = events?.meta;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };



  if (isLoading) {
    return (
      <Row gutter={[16, 16]}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card>
              <Skeleton.Image
                style={{ width: "100%", height: 200, borderRadius: "8px" }}
                active
              />
              <Skeleton
                active
                title={{ width: "70%" }}
                paragraph={{ rows: 2, width: ["80%", "90%"] }}
                style={{ marginTop: "16px" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: "16px", marginTop: "50px",display: "flex", justifyContent: "center"}}>
        <Col span={8}>
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </Col>
      </Row>

      {isLoading ? (
        <Row gutter={[16, 16]} justify="center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card style={{ height: "100%" }}>
                <Skeleton.Image
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "8px",
                  }}
                  active
                />
                <Skeleton
                  active
                  title={{ width: "70%" }}
                  paragraph={{ rows: 2, width: ["80%", "90%"] }}
                  style={{ marginTop: "16px" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {events?.data?.slice(0, 6).map((event) => (
            <Col key={event._id} xs={24} sm={12} md={8}>
              <Card
                title={event.name}
                bordered={false}
                style={{ height: "100%" }}
                bodyStyle={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "8px",
                  }}
                  src={event.eventImg}
                  alt={event.name}
                />
                <p style={{ flexGrow: 1, fontSize: "14px", color: "#666" }}>
                  Hosted by: {event.eventHost}
                </p>
                <div style={{ textAlign: "center", marginTop: "8px" }}>
                  <Link to={`/event/${event._id}`}>
                    <Button type="link">View Details...</Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Pagination */}
      <Row justify="center" style={{ marginTop: "24px", marginBottom: "24px" }}>
        <Pagination
          current={page}
          onChange={(value) => setPage(value)}
          pageSize={metaData?.limit}
          total={metaData?.total}
        />
      </Row>
    </>
  );
};

export default AllEvent;
