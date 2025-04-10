import { Card, Row, Col, } from "antd";

import { Carousel } from "antd";

const AboutPage = () => {
  const galleryImages1: string[] = [
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/475441593_1059341419331738_4440879787236578690_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjpNUlk2e17kQ-RkSheEiFD0WMBYCYOZsPRYwFgJg5m62oJawVzlMelZc_ovrHFRijwnSzcbqotD7eI3CUdQfq&_nc_ohc=XrsiEcU8aAUQ7kNvgGvBpHu&_nc_oc=AdjXdeyat_r6WL3HSHEH9G82APUS4UbYX2rxSfQ28IvfPu0e-ii6c15fwhpyoKgBu2U&_nc_zt=23&se=-1&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AXK0L-hjc2NWnDazP01V-Li&oh=00_AYA5sM8WvBQbhx0XjniHIsZ5sOdthieglIa9F1pbFL95Hw&oe=67C4A7B1",
    "https://backendicpc.daffodilvarsity.edu.bd/uploads/thumbnails/event-03_uS3FjBb.png",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/475940506_1059934115939135_6234959698015188437_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEEazp9uypNiJoHTf-AlnJGnK6V7oUo8S6crpXuhSjxLpaYVVQXTl8TDjZe-zeWNiF1rVu4xag6N9wt0Jaa2fY9&_nc_ohc=KL5IowggPfUQ7kNvgG3xJZ_&_nc_oc=AdgFNKm5T3X1mdpWdLxbXKuxF6tsE5ezbThTIUVTsfUNKH3_WzGzuDwON2Z8bXd8cTE&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=A1LBoKWw2CM7Vc2rAMUflsu&oh=00_AYBbrpAdeTHXcNRzen9YjEwO11g5HA0mrlqgjWvi0_Bx7g&oe=67C49B13",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/475768165_1059342142664999_3614962688532779459_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEMh5ELAYygdNgkqlhN63lX9EUABYAsPaH0RQAFgCw9odmbXLDjUAt0-Exx0xYPLVqJ6mqiU6EkyH_HjoqcBz0C&_nc_ohc=at-Vid1nHw8Q7kNvgF6jcB5&_nc_oc=Adho4rFjwPrJjAM1Ac8nmavlz7WO9gqPBF-qM0XIU_zBccVav6LbXJC6SyppOmVTIgM&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Atw6VAUb6WgxQngWUw-vMvP&oh=00_AYA78qnPWEtEZGnIaFhjmyllroHERiilZkr6856QAzhmhQ&oe=67C49229",
  ];
  const galleryImages2: string[] = [
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/463792798_987344673198080_4068812820411359611_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMxuD_n0JnUDDKZsTmKHss2jZoOI3H94_aNmg4jcf3jxEFKUDfaMxc2a7BIfKijHQ3NnZdpe_Xk_CGFDL37tZY&_nc_ohc=kkaWGIn5OZgQ7kNvgG2Ccq1&_nc_oc=AdiGwCiqX4n-DEj-YgV44NwQApzNk43ShpX5HgrbqORCld07hjJTI0o73ZUNbXAYSqs&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Ai9q2hyJptlwGSpW7sUo2Lj&oh=00_AYBtuPyvSg4Inazqb4SI2m6Cuyfhsti0O-UaQRe9ZnCSZw&oe=67C4835C",
    "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/458407550_956724999593381_4254164444160955749_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFV64gihqCqwFz7scVAf9o-RjsVHD9vcw1GOxUcP29zDZVzsoEXXWTVJjk0W_44Ddfk9uberwsbRwhn1LOpfCft&_nc_ohc=-R9Q2oHXnoEQ7kNvgFH9pMJ&_nc_oc=AdgtJsdw0_ZTL-C3OFyR3UTjbGawMLObaA15FttxUjYo35In5jbRLcMP1nEkXBwzIWw&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=AiYxyWGdF5stWeYwl7Q-wq9&oh=00_AYBBcpuYHe7Vl_MTKPLSuDGFeaQTan0IsRHCNdhBHb0h-Q&oe=67C4832D",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/459577453_962016885730859_3506084654092871646_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2pXqh3TQWpHeDACSpclCUKEnfW4jzhzYoSd9biPOHNpwZ3oVjlhXpJRZcamiZ_unKkLoIUmssb1vaX_WyY2k-&_nc_ohc=GyX4tLhpA0AQ7kNvgE88T28&_nc_oc=AdgeSULdPDDPsU6gYkdmfJtQd9lMe1D11j8OVLwr-HbhH1gkpAfOuHL1hi5ZicWYrLs&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AEW10lbgJfdHzR6ebPlhiJM&oh=00_AYCN-4tB8vHpCw6X0TRsrJAMED7FQwtCHaqv4MsAJumq_A&oe=67C49692",
    "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/475438904_1059934292605784_3591949902574190453_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG-ttFjdQgmz6j21c_BpGchl6tB0ILhWqmXq0HQguFaqe3IwZP6XGrvvEXDf8a4boZXze2XxgT3Xh1mddOQBdD-&_nc_ohc=hMkkXIKbJnYQ7kNvgFX-Ots&_nc_oc=AdhpBgJV0pw4VRxKXxraSdgi7sk8S0gaS_oPjKM0eu0J3NFCt9TiLQq-InHzNEQcXr0&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=Ap2NXWb55Q0JDEfK4NPVI4e&oh=00_AYDgaLSLQzdF61DfHI5z9SqyKu0f-uRkhE7_DLxSYLE0rQ&oe=67C49503",
  ];

  return (
    <div>
      <Card
        style={{
          borderRadius: "8px",
          fontFamily: "inherit",
        }}
      >
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12}>
            <img
              alt="department_image"
              src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/475441593_1059341419331738_4440879787236578690_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjpNUlk2e17kQ-RkSheEiFD0WMBYCYOZsPRYwFgJg5m62oJawVzlMelZc_ovrHFRijwnSzcbqotD7eI3CUdQfq&_nc_ohc=XrsiEcU8aAUQ7kNvgGvBpHu&_nc_oc=AdjXdeyat_r6WL3HSHEH9G82APUS4UbYX2rxSfQ28IvfPu0e-ii6c15fwhpyoKgBu2U&_nc_zt=23&se=-1&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AXK0L-hjc2NWnDazP01V-Li&oh=00_AYA5sM8WvBQbhx0XjniHIsZ5sOdthieglIa9F1pbFL95Hw&oe=67C4A7B1"
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <h1>Welcome to the Department of Software Engineering!</h1>
            <h4 style={{ color: "gray" }}>
              The <strong>Software Engineering Department Hub</strong> at Daffodil International University serves as a central platform for students, faculty, and enthusiasts to explore department-related activities, resources, and events.
            </h4>
            <h4 style={{ color: "gray" }}>
              <strong>Our Mission:</strong> To foster innovation, collaboration, and knowledge sharing among students and professionals while ensuring access to vital academic and extracurricular resources.
            </h4>
          </Col>
        </Row>

        <Row style={{ marginTop: "24px", }}>
          <Col xs={24}>
            <h1>Why Choose Us?</h1>
            <ul style={{ paddingLeft: "20px", color: "gray" }}>
              <li>Central hub for all departmental clubs and activities.</li>
              <li>Access to important notices and academic resources.</li>
              <li>Stay updated with department events and contests.</li>
              <li>Collaboration opportunities for students and faculty.</li>
            </ul>
          </Col>
        </Row>

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12}>
            <Carousel autoplay autoplaySpeed={2000} effect="fade">
              {galleryImages1.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`gallery1-${index}`}
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Col>

          <Col xs={24} sm={12}>
            <Carousel autoplay autoplaySpeed={2000} effect="fade">
              {galleryImages2.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`gallery2-${index}`}
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row style={{ marginTop: "24px" }}>
          <Col xs={24}>
            <h1>Stay Connected!</h1>
            <h4 style={{ color: "#888", }}>
              Keep up with department news, club activities, contests, and events. Check out important academic links, notices, and opportunities for growth at the <strong>Software Engineering Department Hub</strong>!
            </h4>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AboutPage;
