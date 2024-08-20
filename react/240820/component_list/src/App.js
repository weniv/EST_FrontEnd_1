
import UserList from "./UserList";
import Counter from "./Counter";

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
  { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
];

function App() {
  return (
    <div>
      <Counter />
      <h1>유저 정보 목록</h1>
      <UserList users={users} />
    </div>
  );
}

<img src="" alt="" />

export default App;