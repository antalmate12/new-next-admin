import useAuth from "@/hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Home</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Home;
