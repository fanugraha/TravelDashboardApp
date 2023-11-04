import { Button } from "@mantine/core";
import "../../pages/home/homepage.css";
import { Link } from "react-router-dom";

const SidebarData = [
  {
    title: "Homepage",
    path: "/"  
  },
  {
    title: "User",
    path: "/user",
  },
  {
    title: "Promo",
    path: "/promo",
  },
  {
    title: "Activity",
    path: "/activity",
  },
];

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="profile">
        <img src="src\assets\img\sample-img.png" alt="" />
        <div className="label-profile">
          <h1 className="name">Kevin Cranel</h1>
          <p className="email-profile">@email</p>
        </div>
      </div>
      <div className="navigation-sidebar">
       {SidebarData.map((item, index) => (
            <Link to={item.path} key={item.title}>
              <Button key={index} className="button-sidebar">{item.title}</Button>
            </Link>
       ))}
      </div>
    </div>
  );
};

export default Sidebar;
