import React from "react";
import { Card, Avatar, Button, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface Programmer {
  id: number;
  name: string;
  description: string;
  photoUrl?: string;
  profileLink: string;
}

const programmers: Programmer[] = [
  {
    id: 1,
    name: "Aumit Hasan Bappy",
    description: "Senior Software Engineer at SELISE Digital Platforms",
    photoUrl: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/448349181_7842239525819501_2674367771322303532_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGt5xWEr_427-aN2f86f38AZ4S0rQJBI5hnhLStAkEjmAg7AX2bjckFNwcTDOhzaNrLBAuJPU_Em6coXDHctixT&_nc_ohc=3zYoVXVZbucQ7kNvwHccj2n&_nc_oc=AdnRifqq0bS3LnOXaoFEsK9SRQjU7WTV8DHIPx1nXajY40wqLhf6AcquTVLW8pd6Zlg&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=jlk2K1hHnqGGpiwf9_kPFQ&oh=00_AfHHrnFuPIm33GHPmvD8PqUah8x9QRrPR47MpBpaGuBtiA&oe=67FEDA96",
    profileLink: "https://www.facebook.com/aumithasan.bappy",
  },
  {
    id: 2,
    name: "Ishrak Tawsif Nirob",
    description: "Lead Engineer at Samsung R&D Institute Bangladesh Ltd.",
    photoUrl: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/460806867_8320179108098501_425216698525279436_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHMj_3SzgjOmY_CTN4nnLg7L8lHOE34p5cvyUc4TfinlzKOtrzaSCclkaYlntPq6wiIhTCuji5LRqES7jWs9b0c&_nc_ohc=joXqGwdTHFEQ7kNvwHu6WFX&_nc_oc=Adn4w8bMod7OSUSfd42CYEcPwW2J3Sw3WJ9w0hXrWfJ5F0jeNjqZ3EexvpHsDKOmgwc&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=-FZMly_zDDnyr7QFdEqEhw&oh=00_AfFsPOcdLdkf_3qZwtm0J4ZetlqbBoHmaD91A9QpczRw7A&oe=67FEBD75",
    profileLink: "https://www.facebook.com/ishraknirob",
  },
  {
    id: 3,
    name: "Abu Naeem",
    description: "Software Engineer at Samsung R&D Institute Bangladesh Ltd.",
    photoUrl: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/489851877_4070921179852670_7472027235033706940_n.jpg?stp=cp6_dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGfytBbUScXGhoX29TSnnmGLy-yxdkt0nQvL7LF2S3SdKLIOPdzfHucnRmtQ5cvTl5RNo4z1SIf6rhqUb2e4-Xx&_nc_ohc=j7mDb_nW0N0Q7kNvwFxkk9d&_nc_oc=AdlNsINkwUWWnvJ7AhpsmaaOT-lTcWuf_pQmz0Z22AZ5JiZzs5PabdRjcZ2m1m_XH8U&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=FUJxyDttlMtVIfoY_AFj5g&oh=00_AfGgSusrCZXMNsMI4REwDetoa_UzAZ_uROS5kz21XMY5tw&oe=67FEBE0B",
    profileLink: "https://www.facebook.com/mohammodabu.naeem",
  },
  {
    id: 4,
    name: "Sazid Nur Ratul",
    description: "Software Engineer at Keypro Oy | Former Software Engineer at Samsung",
    photoUrl: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/486517390_3721299991495095_4234512871122871749_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHU_qF5H-m0DeOFYIA6InM84K7-y0RoPkzgrv7LRGg-TFarYQ6iUr53KM3L14gGdKXLyPzhbjIFlXTfUhL3aT8J&_nc_ohc=zyRbF_wLIZoQ7kNvwEJtBWU&_nc_oc=AdneGxBLneWzqDK_ZZW6pDWN0wwGkWQyiBGfmJpn505U1ljBTr7o_yrPX3dCpY6Wb5M&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=KSzD_0490saii_k0yJrp8g&oh=00_AfHfudthEeqNqVOFXx53UGh3jzMKJVn9ctrsYkAxmKnvug&oe=67FECF98",
    profileLink: "https://www.facebook.com/sazidnur",
  },
  {
    id: 5,
    name: "Saiful Islam Ramim ",
    description: "Jr. Software Engineer at Kite Games Studio",
    photoUrl: "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/120192805_2773204466281863_9165295062396586463_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHo0lCl8pm5602omLeQYNUtF-JJlcTm25sX4kmVxObbm_eIftutQJ8T9sCEk0iMLGXnJFmVWJ0MGYcZC8ZI_o2X&_nc_ohc=gntaFRDiDpAQ7kNvwGBgkiG&_nc_oc=AdlvTx2yKhhhlG6Axb81XvbPad8lhVMlW8SRck8BQ8cEBqNEPlTgzCAEDGPCUi0MFTI&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=E9jPJgsd0HqKsO__EzCuiw&oh=00_AfGvyH7P2_4MuBmhcEkWnh9ppZSbKN_O4hI4Ft4HcvjkcA&oe=68209090",
    profileLink: "https://www.facebook.com/saifulislam.ramim.1",
  },
  {
    id: 6,
    name: "",
    description: "",
    photoUrl: "",
    profileLink: "",
  },
];

const ProgrammerList: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ textAlign: "center", marginBottom: 32 }}>
        Competitive Programmers
      </h1>
      <Row gutter={[24, 24]}>
        {programmers.map((programmer) => (
          <Col xs={24} sm={12} md={8} key={programmer.id}>
            <Card
              hoverable
              style={{ borderRadius: 16 }}
              cover={
                <Avatar
                  size={128}
                  icon={<UserOutlined />}
                  src={programmer.photoUrl}
                  style={{
                    margin: "24px auto 0",
                    display: "block",
                    border: "4px solid #f0f0f0",
                  }}
                />
              }
            >
              <Card.Meta
                title={programmer.name}
                description={programmer.description}
              />
              <Button
                type="primary"
                block
                style={{ marginTop: 16 }}
                href={programmer.profileLink}
                target="_blank"
              >
                View Profile
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProgrammerList;
