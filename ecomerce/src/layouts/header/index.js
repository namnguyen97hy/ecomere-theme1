import React from "react";
import {Grid, Box, Container} from "@material-ui/core"
import logoImg from "./../../assets/images/logo.png";
import Menu from "./Menu";
import "./index.scss"

const Header = (props) => {
    return (
        <Container maxWidth="xl">
            <Box padding={5}>
                <Grid container spacing={3} className="header">
                    <Grid item md={3} xs={6}>
                        <img src={logoImg} alt="Logo Image" />
                    </Grid>
                    <Grid item md={6} xs={0}> 
                        <Menu />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default Header