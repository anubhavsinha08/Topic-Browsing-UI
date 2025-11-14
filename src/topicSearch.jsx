export default function TopicSearch({ onSearch, topic }) {

  function handleChange(event) {
    onSearch(event.target.value);   
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearch("");                  
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label><b>Search By Name: </b></label>

        <input
          type="text"
          placeholder="Search By Name"
          value={topic}             
          onChange={handleChange}   
          required
          style={{ padding: "6px 10px", borderRadius: "6px" }}
        />

        <button type="submit" style={{ marginLeft: "10px" }}>
          CLEAR
        </button>
      </form>
    </>
  );
}
