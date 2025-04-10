import { Button, Card, Carousel } from "antd";
import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const testimonials = [
  {
    id: 1,
    name: "Dr. Imran Mahmud",
    image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/e7d9a85a7be93c10b4c2de4fb9da9dbc.JPG",
    // feedback:
    //   "This is the best bicycle I have ever purchased. It's smooth, stylish, and worth every penny!",
    position: "Professor & Head",
  },
  {
    id: 2,
    name: "Dr. Md. Fazla Elahe",
    image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/1738ce3b335a313417ce83e916e02f0a.jpg",
    position: "Assistant Professor & Associate Head",
  },
  {
    id: 3,
    name: "Professor Dr. Engr. Abdul Kadar Muhammad Masum",
    image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/95b450b2b422fd7fe03b1c4a9d38b7b3.png",
    position: "Professor",
  },
];

const Testimonials = () => {
  const carouselRef = useRef<any>(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div style={{ marginTop: "60px", padding: "50px 20px" }}>
      <h1
        style={{ textAlign: "center", marginBottom: "40px", fontSize: "28px" }}
      >
        Our Faculty Member
      </h1>

      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <Carousel
          ref={carouselRef}
          slidesToShow={3}
          slidesToScroll={1}
          dots={false}
          arrows={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              style={{
                padding: "0 10px",
                boxSizing: "border-box",
              }}
            >
              <Card
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  height: "300px",
                  width: "90%",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                    }}
                  />
                  <h3 style={{ margin: "0 0 5px 0" }}>{testimonial.name}</h3>
                  <p style={{ fontStyle: "italic", color: "#555" }}>
                    {testimonial.position}
                  </p>
                </div>
                {/* <p
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    marginTop: "15px",
                    padding: "0 10px",
                  }}
                >
                  "{testimonial.feedback}"
                </p> */}
              </Card>
            </div>
          ))}
        </Carousel>

        <Button
          color="default"
          variant="solid"
          shape="circle"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "-30px",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        />
        <Button
          color="default"
          variant="solid"
          shape="circle"
          icon={<RightOutlined />}
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "-30px",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};

export default Testimonials;
