import { Grid, Modal } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ImageBanner from "./../../../assets/images/banner_bottom_left.jpg";
import ImageVideo from "./../../../assets/images/thumbnail_video.jpg";

const BannerBottom = (props) => {
    const [isShowVideoModal, setShowVideoModal] = useState(false);

    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          top:'50%',
          left:'50%',
          transform:'translate(-50%,-50%)',
          outline:'none',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius:"3px",
          overflowX:"hidden",
          paddingBottom:"-10px"
        },
        icon: {
            display:"flex",
            justifyContent:"flex-end",
        }
    }));
    const classes = useStyles();
    return (
        <div className="banner_bottom" style={{overflow:"hidden"}}>
            <Grid container spacing={2}>
                <Grid item md={6} xs={12} sm={6}>
                    <div className="image">
                        <img src={ImageBanner} alt="left banner bottom" style={{width:"100%"}} />
                        <div className="text_content">
                            <p>Fresh Oraganic</p>
                            <h3>HEALTHY</h3>
                            <h3 className="name">FOODS</h3>
                            <ButtonPrimary content="Shop Now" />
                        </div>
                    </div>
                </Grid>
                <Grid item md={1} xs={12} sm={1}>
                    
                </Grid>
                <Grid item md={5} xs={12} sm={5}>
                    <div className="video">
                        <img src={ImageVideo} alt="imageVideo" />
                        <span className="play_icon" onClick={() => setShowVideoModal(true)}><PlayArrowIcon /></span>
                        <Modal
                            open={isShowVideoModal}
                            onClose={() => setShowVideoModal(false)}
                        >   
                            <div className={classes.paper} id="paperVideo">
                                <span className={classes.icon} onClick={() => setShowVideoModal(false)}>
                                    <ClearIcon style={{color:"white"}}/>
                                </span>
                                <iframe className="video_iframe" 
                                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                </iframe>
                            </div>
                        </Modal>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default BannerBottom