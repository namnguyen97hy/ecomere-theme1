import React from "react";
import BannerTop from "./components/BannerTop";
import Service from "./components/Service"
import ListCateFood from "./components/ListCateFood";
import BannerBottom from "./components/BannerBottom";
import ClientReview from "./components/ClientReview";
import RecentNew from "./components/RecentNew";
import ListBrand from "./components/ListBrand";
import {Container,Box} from "@material-ui/core"
import "./index.scss"
import DiscoverProducts from "./components/DiscoverProduct";

const Home = (props) => {
    return (
        <div className="home">
            <BannerTop />
            <Container maxWidth="xl">
                <Box className="box_container">
                    <ListCateFood />
                    <Service />
                    <DiscoverProducts />
                </Box>
            </Container>
            <BannerBottom />
            <ClientReview />
            <Container maxWidth="xl">
                <Box className="box_container">
                    <RecentNew />
                    <ListBrand />
                </Box>
            </Container>
        </div>

    )
}
export default Home