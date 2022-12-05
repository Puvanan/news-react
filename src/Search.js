import { useState, useEffect } from "react";

function Search(props) {
    const [news, setNews] = useState();
    useEffect(() => {
      fetchNews();
    }, [props.searchTerm]);

    const GNEWS_API_KEY = process.env.REACT_APP_GNEWS_API_KEY;
    const fetchNews = () => {
      console.log(props.searchTerm);
      const url = `https://gnews.io/api/v4/${props.searchTerm}?token=${GNEWS_API_KEY}&lang=en`;
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
        <div>test</div>
    )
}
export default Search;
