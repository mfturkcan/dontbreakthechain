const TestUser = (props: any) => {

  async function handleClick(event: any) {
    const response = await fetch("https://localhost:7034/api/User", { method: "GET" });
    console.log(response);
  }

  return (
    <div>
      <button onClick={handleClick}>TestUser</button>
    </div>
  );
}
export default TestUser;