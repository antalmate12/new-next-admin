import useAuth from "@/hooks/useAuth";
import MainLayout from "@/components/MainLayout/MainLayout";

const Home = () => {
  const {user} = useAuth();

  return (
    <MainLayout>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </MainLayout>
  );
};

export default Home;
