import { useParams } from 'react-router-dom'

const dateFormatting = (date) => {
    var year = date.substring(4,0)
    var month = date.substring(5,7)
    var day = date.substring(8,10)
    console.log(month);
    return day+'/'+month+'/'+year
}
function News(props) {
    const params = useParams()
    var id = params.NewsTitle;
    var articles = props.newsArticles;
    var details = articles[articles.map(function (item) { return item.title; }).indexOf(id)];

    return (
        <div className="row justify-content-center mt-5 grid" >
            <div className='col-12' style={{width:"800px"}}>
                <h1>{details.title}</h1>
                <p>{dateFormatting(details.publishedAt)}</p>
                <img src={`${details.image}`} className="img-fluid w-100 mt-5" alt="..." />
                <p className='mt-5'>{details.description}</p>
                <p>{details.content}</p>
                <p>Source from : <a href={details.source.url} target='_blank'>{details.source.url}</a></p>
            </div>
        </div>
    );
}
export default News;