import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { loading, data, error } = useFetch(
    "/hotels/countByCity?cities=Ha_Noi,Ho_Chi_Minh,Da_Nang"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading"
      ) : (
        <>
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
              src="https://hnm.1cdn.vn/2023/12/12/a355.jpg"
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
        </>
      )}
    </div>
  );
};

export default Featured;
