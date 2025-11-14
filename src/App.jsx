import TopicSearch from "./topicSearch";
import TopicCard from "./topicCards";
import { useState } from "react";
import "./App.css";

function App() {
  let [topic, setTopic] = useState("");

  let Data = [
    { id: 1, name: "Thermodynamics", category: "Physics" },
    { id: 2, name: "algebra", category: "Maths" },
    { id: 3, name: "data Structure", category: "computer" },
    { id: 4, name: "french revolution", category: "history" },
    { id: 5, name: "Thermodynamics", category: "chemistry" },
  ];

  const filteredTopics = Data.filter((res) =>
    res.name.toLowerCase().includes(topic.toLowerCase())
  );

  return (
    <>
      <h1>Catalogue Management System</h1>
      <br />
      <br />
      <TopicSearch onSearch={setTopic} topic={topic} />

      <br />
      <div
        className="topics"
        style={{
          display: "flex",
          height: "50vh",
          gap: "1.5rem",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {filteredTopics.length>0 ?(
          filteredTopics.map(function (topic) {
            return <TopicCard topics={topic} key={topic.id} />;
          })
        ): (
          <TopicCard
            topics={{ name: "no data found", category: "Try another Keyword" }}
            key={0}
          />
        )}
      </div>
    </>
  );
}

export default App;
