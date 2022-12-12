import { NavLink } from 'react-router-dom'

const dateFormatting = (date) => {
  var year = date.substring(4,0)
  var month = date.substring(5,7)
  var day = date.substring(8,10)
  console.log(month);
  return day+'/'+month+'/'+year
}

function NewsArticles(props) {
  return (
    <div className="row justify-content-center mt-5 grid">
      {props.newsArticles?.map((item,index) => (
        <div className="col-4" key={index}>
          <div className="card mb-3 shadow-sm" key={item.image}>
            <img style={{height: "250px"}} src={`${item.image}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title font-alt" style={{height: "70px"}}>{item.title}</h5>
              <small className="text-muted">{dateFormatting(item.publishedAt)}</small>
              <p className="card-text mt-3" style={{height: "150px"}}>{item.description}</p>
              <button type="button" className="btn btn-link"><NavLink to={`/News/${item.title}`}>More Details</NavLink></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NewsArticles;
