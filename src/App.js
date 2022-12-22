import Profile from "./components/Profile";
import "./styles.css";

export default function App() {
  const userData = {
    name: "Quliyev Əlyar",
    email: "quliyev20@gmail.com",
    address: "Baku,Azerbaijan",
    photo:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg",
    info: "Developer"
  };
  return (
    <div>
      <Profile user={userData} />
    </div>
  );
}