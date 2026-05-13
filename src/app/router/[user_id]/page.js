import React from "react";

export default async function Page({ params }) {
  const { user_id } = await params;

  return <div>User ID is: {user_id}</div>;
}
