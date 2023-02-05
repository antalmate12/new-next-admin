import useAuth from "@/hooks/useAuth";

const ListPage = ({data}: { data: any[] }) => {
  const {user} = useAuth();

  return (
    <div>
      <h2>Welcome {user?.firstName}</h2>
      <h1>List</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>

          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default ListPage;