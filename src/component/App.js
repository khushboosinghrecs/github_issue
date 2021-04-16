import React, { useState } from "react";
import axios from "axios";
import Issues from "./Issues";
function App() {
  let [owner, setOwner] = useState("");
  let [repo, setRepo] = useState("");
  let [show, setShow] = useState(false);
  let [allIssues, setAllIssues] = useState("");

  const fetchIssue = () => {
    // let issuesData;
    // try {
    //   issuesData = await axios.get(
    //     `https://api.github.com/repos/${owner}/${repo}/issues`
    //   );
    //   setShow(true);
    //   let newdata = Object.keys(issuesData.data);
    //   setAllIssues(newdata);
    //   console.log(newdata);
    // } catch (error) {
    //   console.log(error);
    //   setShow(false);
    // }
    fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
      .then((res) => res.json())
      .then((res) => {
        setAllIssues(res);
        setShow(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1>github issue</h1>
      <div className="container">
        <input
          placeholder="Owner"
          onChange={(e) => {
            setOwner(e.target.value);
          }}
          value={owner}
          type="text"
        />
        <input
          placeholder="Repository"
          onChange={(e) => {
            setRepo(e.target.value);
          }}
          value={repo}
          type="text"
        />
        <button onClick={fetchIssue}>Submit</button>
        {show ? <Issues data={allIssues} /> : "wrong repo"}
      </div>
    </>
  );
}
export default App;
