import { NavLink, useParams, Outlet, Link } from 'react-router-dom'

function NewsArticles(props) {
  return (
    <div className="row justify-content-center mt-5 grid">
      {props.newsArticles?.map((item,index) => (
        <div className="col-4" key={index}>
          <div className="card mb-3 shadow-sm" key={item.image}>
            <img style={{height: "250px"}} src={`${item.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-alt" style={{height: "100px"}}>{item.title}</h5>
              <small className="text-muted">{item.publishedAt}</small>
              <p className="card-text mt-3" style={{height: "150px"}}>{item.description}</p>
              <button type="button" className="btn btn-link"><NavLink to={`/News/${item.title}`}>More Details</NavLink  ></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NewsArticles;