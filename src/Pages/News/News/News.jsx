import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const newsData = useLoaderData();
  console.log(newsData);
  const { title, details, image_url, author, total_view } = newsData;
  return (
    <div>
      <Card style={{ width: "100%", padding: "10px" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}

            <p>
              Name: <span>{author.name}</span>
            </p>
            <p>
              Published Date: <span>{author.published_date}</span>
            </p>
            <p>
              Name: <span>{total_view}</span>
            </p>
          </Card.Text>
          <Button>
            <Link className="text-white" to="/">
              Return To Home
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
