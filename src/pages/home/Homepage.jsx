// import "./homepage.css";
import Seacrch from "../../assets/icon/search.svg";
import ButtonPrimarry from "../../component/button/Primarry";
import ButtonSecondary from "../../component/button/Secondary";
import SideBar from "../../component/side-bar/SideBar";
import TextLink from "../../component/button/TextLink";
import UserList from "../../component/user-list/UserList";
import PromoCard from "../../component/card/promo-card/PromoCard";
import CategoryCard from "../../component/card/category-card/CategoryCard";
import Category from "../../component/category/Category";

import { Container, Grid, GridCol, Image, Text, Title }from '@mantine/core';
import Promo from "../../component/promo/promo";

const Homepage = () => {
  return (
    <div className="container-content">
      <Grid>
        <SideBar />
      <Grid.Col span={8}>
        <div className="search-field">
          <form className="search-input" action="submit">
            <img src={Seacrch} alt="" />
            <p>Search items, collections, and users</p>
          </form>
        </div>
        <div className="main-content">
          <div className="layer-one">
            <div className="banner">
              <img src="" alt="" />
              <div className="banner-text">
                <h1>Welcome to dashboard</h1>
                <p>Easyway to manage your store</p>
              </div>
            </div>
            <div className="user-list">
              <div className="lable-user">
                <h1>User List</h1>
                <TextLink>See All</TextLink>
              </div>
              <div className="wrapper-userlist-card">
                <UserList />
                <UserList />
                <UserList />
              </div>
            </div>
          </div>
        </div>
        <Container>
            <Grid>
              <GridCol span={{span : "12", md: "12", lg:"12", sm: "12" }} >
                <Title size="h1">Promo</Title>
              </GridCol>

              <GridCol span={{span : "12", md: "12", lg:"12", sm: "12" }}  >
                    <Promo />
              </GridCol>
            </Grid>
        </Container>
              <Container>
                <Grid>
                  <GridCol span={{span : "12", md: "12", lg:"12", sm: "12" }} >
                    <Title size="h1">Activity ( Category )</Title>
                  </GridCol>

                  <GridCol span={{span : "12", md: "12", lg:"12", sm: "12" }}  >
                    <Category></Category>
                  </GridCol>
                </Grid>
              </Container>
         </Grid.Col>
        </Grid>
    </div>
      
  );
};

export default Homepage;
