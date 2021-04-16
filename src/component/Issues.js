import React from "react";
function Issues({ data }) {
  console.log(data);
  return data.map((is) => <li>{is.title}</li>);
}
export default Issues;
