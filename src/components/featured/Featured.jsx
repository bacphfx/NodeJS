import { useState, useEffect } from "react";
import axios from "../../util/axios";
import "./featured.css";

const Featured = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "hotels/countByCity?cities=Ha_Noi,Ho_Chi_Minh,Da_Nang"
      );
      console.log(res);
      setData(res.data);
      return res;
    }
    fetchData();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://motogo.vn/wp-content/uploads/2020/02/69ace9f7-33e5-47e0-884f-044f6bbd4c15-768x1091.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ha Noi</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://dulichmte.vn/wp-content/uploads/2021/01/MTE.hochiminhcity.3.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ho Chi Minh</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://danangprivatecar.com/wp-content/uploads/2022/07/DHC-Marina.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Da Nang</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
