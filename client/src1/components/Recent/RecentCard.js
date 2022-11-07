import React, { useEffect, useState } from "react";
import API from "../../API";
import { getProperties, list } from "../Data/data";

const RecentCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProperties().then((data) => {
      console.log(`${API}/properties`);
      if (data.error) {
        alert(data.error);
      } else {
        setData(data);
      }
    });
  }, []);

  return (
    <>
      <div
        className="content grid3 mtop"
        style={{
          marginLeft: "-120px",
        }}
      >
        {data.map((val, index) => {
          const { category, name, price, type, _id, city } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={`${API}/property/image/${_id}`} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {city}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                  <label htmlFor="">/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
