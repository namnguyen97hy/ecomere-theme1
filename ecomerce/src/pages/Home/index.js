import React from "react";
import Banner from "./Banner";
import Service from "./Service"
import ListCateFood from "./ListCateFood";
import {Container,Box} from "@material-ui/core"
import "./index.scss"
import DiscoverProducts from "./DiscoverProduct";

const Home = (props) => {
    return (
        <div className="home">
            <Banner />
            <Container maxWidth="xl">
                <Box className="box_container">
                    <ListCateFood />
                    <Service />
                    <DiscoverProducts />
                </Box>
            </Container>
        </div>

    )
}
export default Home