import { FaSmile, FaTrophy, FaClock, FaThumbsUp } from "react-icons/fa";

const statsData = [
  { icon: <FaSmile size={25} />, label: "HAPPY CUSTOMERS", target: 2169 },
  { icon: <FaTrophy size={25} />, label: "SYSTEM INSTALLED", target: 545 },
  { icon: <FaClock size={25} />, label: "TIME WORK", target: 8766 },
  { icon: <FaThumbsUp size={25} />, label: "COMPLETE PROJECTS", target: 7863 },
];

const StatsRow = () => {
  return (
    <div className="container-fluid">
      <div className="row text-center border-top">
        {statsData.map((stat, index) => (
          <div className="col-lg-3 col-md-6 col-sm-6  d-flex align-items-center gap-2 p-3 justify-content-center" key={index}>
              <div style={{ color: "#FFA610" }}>{stat.icon} </div>
              <div>
                <p className="fw-bold m-0 p-0 boder-start"> {stat.target} {stat.label}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsRow;
