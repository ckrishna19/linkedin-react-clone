import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ Component }) => {
  const navigte = useNavigate();
  const { login } = useSelector((s) => s.user);

  useEffect(() => {
    if (!login) {
      navigte("/login");
    }
  }, []);
  return <Component />;
};

export default PrivateRoute;
