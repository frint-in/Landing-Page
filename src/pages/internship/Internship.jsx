import { useEffect, useState } from "react";
import "./internship.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/internship-card/Card";
import { getAllInterships } from "../../components/api/Student";
import dayjs from "dayjs";


const Internship = () => {
  const [internship, setInternship] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllInterships();
        setInternship(data); 
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchData();
  }, []);

  const colors = [
    "#FFDBB0",
    "#B6FFB0",
    "#EAB0FF",
    "#B0D9FF",
    "#FFB0B5",
    "#FFF7B0",
  ];

  return (
    <div className="Internship">
      <div className="header"></div>
      {/* <Filter /> */}
      <div className="headerdiv">
        <div className="headtext">Recommended Internships</div>
      </div>
      <div className="body">
        {internship?.map((int, index) => (
          <Card
            key={index}
            date={dayjs(int.createdAt).format("DD-MM-YYYY")}
            stipend={int.stipend || "not given"}
            company={int.companyName}
            title={int.name}
            tag={int.type}
            location={int.location}
            link="/auth"
            color={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default Internship;
