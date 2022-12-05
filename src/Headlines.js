import { useState, useEffect } from "react";
function HeadLines(props) {
  const [news, setNews] = useState();
  useEffect(() => {
    fetchNews();
  }, [props.searchTerm]);

  const GNEWS_API_KEY = process.env.REACT_APP_GNEWS_API_KEY;
  const fetchNews = () => {
    console.log(props.searchTerm);
    const url = `/${props.searchTerm}?token=${GNEWS_API_KEY}&lang=en`;
    fetch(url).then((response) => {
      // console.log(response)
      if (response.ok) {
        response.json().then((data) => {
          setNews(data.articles);
        });
      }
    });
  };
  return (
    <div className="row justify-content-center mt-5 grid">
      {console.log(news)}

      {news?.map((item) => (
        <div className="col-4" key={item.title}>
          <div className="card mb-3 shadow-sm" style={{height: "650px"}} key={item.image}>
            <img style={{height: "250px"}} src={`${item.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-alt">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">
                <small className="text-muted">{item.publishedAt}</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default HeadLines;
