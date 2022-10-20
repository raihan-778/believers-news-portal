import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../../Shared/NewsSummeryCard/NewsSummeryCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h4>This is category has Five news {categoryNews.length}</h4>
      {categoryNews.map((news) => (
        <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Category;
