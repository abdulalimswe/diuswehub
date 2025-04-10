// import { Card, Col, Row, Button, Skeleton } from "antd";
// import { Link } from "react-router-dom";
// import { useGetAllProductsQuery } from "../../redux/features/admin/eventManagementApi";

// const FeaturedEvents = () => {
//   const { data: events, isLoading } = useGetAllProductsQuery(undefined);

//   return (
//     <div style={{ marginTop: "50px" }}>
//       <div style={{ textAlign: "center", marginBottom: "24px" }}>
//         <h1>All Events</h1>
//       </div>

//       {isLoading ? (
//         <Row gutter={[16, 16]} justify="center">
//           {Array.from({ length: 6 }).map((_, index) => (
//             <Col key={index} xs={24} sm={12} md={8}>
//               <Card style={{ height: "100%" }}>
//                 <Skeleton.Image
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     borderRadius: "8px",
//                   }}
//                   active
//                 />
//                 <Skeleton
//                   active
//                   title={{ width: "70%" }}
//                   paragraph={{ rows: 2, width: ["80%", "90%"] }}
//                   style={{ marginTop: "16px" }}
//                 />
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       ) : (
//         <Row gutter={[16, 16]} justify="center">
//           {events?.data?.slice(0, 6).map((event) => (
//             <Col key={event._id} xs={24} sm={12} md={8}>
//               <Card
//                 title={event.name}
//                 bordered={false}
//                 style={{ height: "100%" }}
//                 bodyStyle={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <img
//                   style={{
//                     width: "100%",
//                     height: "200px",
//                     objectFit: "cover",
//                     marginBottom: "8px",
//                   }}
//                   src={event.eventImg}
//                   alt={event.name}
//                 />
//                 <p style={{ flexGrow: 1, fontSize: "14px", color: "#666" }}>
//                   Hosted by: {event.createdAt}
//                 </p>
//                 <div style={{ textAlign: "center", marginTop: "8px" }}>
//                   <Link to={`/event/${event._id}`}>
//                     <Button type="link">View Details...</Button>
//                   </Link>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}

//       <div style={{ textAlign: "center", marginTop: "16px" }}>
//         <Link to={"/all-events"}>
//           <Button color="default" variant="solid">
//             View All
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FeaturedEvents;