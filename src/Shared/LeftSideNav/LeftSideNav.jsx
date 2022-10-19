import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h2>All Categories: {category.length}</h2>
      {category.map((singleCategory) => (
        <p key={singleCategory.id}>
          <Link to={`/category/${singleCategory.id}`}>
            {singleCategory.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
