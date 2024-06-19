import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import UserProfile from "./UserProfile";

function User() {
  const { userId } = useParams();

  return (
    <>
      <UserProfile />
      <hr />
      <Link to={`/users/${userId}/posts`}>View All Posts</Link>
      ||
      <Link to={`/users/posts/1`}>View Post with ID 1</Link>
      <hr />
      <Outlet />
    </>
  );
}

export default User;
