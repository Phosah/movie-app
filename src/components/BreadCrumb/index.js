import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./BreadCrumb.styles";

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
        <span>|</span>
        <span>{movieTitle}</span>
      </Link>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};

export default BreadCrumb;
