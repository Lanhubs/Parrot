import React from "react";
const NewsContext = React.createContext({
  newsState: "news",
  showBottomBar: true,
  news: [],
  params: {
    headline: "",
    url: "",
    time: "",
    category: "",
    image: "",
    
  },
});
export default ({ children }) => {
  const [newsState, setNewsState] = React.useState("news");
  const [news, setNews] = React.useState([]);
  const [showBottomBar, setShowBottomBar] = React.useState(true);
  const [params, setParams] = React.useState({
    url: "",
    image: "",
    category: "",
    headline: "",
    time: "",
    
  });
  return (
    <NewsContext.Provider
      value={{
        setNewsState,
        newsState,
        showBottomBar,
        setShowBottomBar,
        setNews,
        news,
        params,
        setParams,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
export const NewsState = () => React.useContext(NewsContext);
