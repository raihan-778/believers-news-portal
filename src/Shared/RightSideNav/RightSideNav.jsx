import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaWhatsapp,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="my-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login via Google
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaGithub /> Login via GitHub
        </Button>
      </ButtonGroup>
      <h4>Find Us on</h4>
      <div>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> Whats App
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaDiscord /> Discord
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
