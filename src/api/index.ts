export default async function getAllUsers() {
  const res = await window.fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(!res.ok) {
    throw new Error("Something went wrong")
  }
  const data = await res.json();
  return data;
}
