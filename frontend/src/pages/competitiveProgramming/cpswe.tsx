import { Card } from 'antd';

const { Meta } = Card;

const CpSWE = () => {
  return (
    <div style={{ marginTop: "15px", marginLeft:"70px", marginRight:"70px" }}>
      <h1 style={{ textAlign: "center" }}>Welcome to SWE Competitive Programming Community!</h1>

      <div style={{ marginTop: "50px" }}>
        <h3>Programmers of SWE CP Community</h3>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>
        <Card
          style={{ width: "100%" }}
          cover={
            <img
              alt="example"
              src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/448349181_7842239525819501_2674367771322303532_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGt5xWEr_427-aN2f86f38AZ4S0rQJBI5hnhLStAkEjmAg7AX2bjckFNwcTDOhzaNrLBAuJPU_Em6coXDHctixT&_nc_ohc=mGQn8oKcpRkQ7kNvgFCIHz2&_nc_oc=AdmrkDIaPrcvzRqvKH_0nTQKpQS6J-YzzrKdz5F-hYUpiE2HuwGzu9b0TJ8Yy_mBpNk&_nc_zt=23&_nc_ht=scontent.fdac22-1.fna&_nc_gid=Ic-ohMiTmz6sCOGBjZk1fQ&oh=00_AYE9LzPzM5cWQhrN0FXZU_k7Ya7BTMyzZRJIcaONAFr4dw&oe=67E211D6"
            />
          }
        >
          <Meta
            title="Aumit Hasan Bappy"
            description="This is the description"
          />
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a href="">View Details</a>
          </div>
        </Card>
        {/* Add more Card components here for additional programmers */}
        <Card
          style={{ width: "100%" }}
          cover={
            <img
              alt="example" src='https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/460806867_8320179108098501_425216698525279436_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHMj_3SzgjOmY_CTN4nnLg7L8lHOE34p5cvyUc4TfinlzKOtrzaSCclkaYlntPq6wiIhTCuji5LRqES7jWs9b0c&_nc_ohc=h_i0bO8THbUQ7kNvgFDxRQB&_nc_oc=Adl0SnyWTKzIau-XT7M4ILG4bon0Z8sxXA1z20WiyVeKqS5ZAblgv0fU3ZY9lQy_TaU&_nc_zt=23&_nc_ht=scontent.fdac22-1.fna&_nc_gid=WrAt9KYZC6uuPyOaAYKAww&oh=00_AYGGatt_wsc-rDFchvHVk85GLIdjoOKj0-NaB0l9CwAwDA&oe=67E22CF5'            />
          }
        >
          <Meta
            title="Ishrak Tawsif Nirob"
            description="This is the description"
          />
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a href="">View Details</a>
          </div>
        </Card>
        <Card
          style={{ width: "100%" }}
          cover={
            <img
              alt="example" src='https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/449308634_3798358160442308_3416744745710077351_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH46UMoPLG8F-sQDe9aUUzhDxh1Av8HyowPGHUC_wfKjOzeMnKOxteh6bPWwkhWiiTJ8tJaAkG9a-d8GEXDxGxB&_nc_ohc=7cBoWJbfu_oQ7kNvgHCtZGM&_nc_oc=AdkyPA4XltJfqKHc6QkLA2KiT6NhbFqmLvAfTJFPO0NE4QPsLij4AneR_0ZguRRiNwU&_nc_zt=23&_nc_ht=scontent.fdac22-1.fna&_nc_gid=BhpjZtBtZGJWzYvYVK4xFw&oh=00_AYHY-GE2FR0adGY_1JV3EKjRDPY1Hrhh9A_M5cMehQjorg&oe=67E227E3'            />
          }
        >
          <Meta
            title="Abu Naeem"
            description="This is the description"
          />
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a href="">View Details</a>
          </div>
        </Card>
        
      </div>
    </div>
  );
};

export default CpSWE;
