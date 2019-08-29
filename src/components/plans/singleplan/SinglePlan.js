
import React, { Component } from 'react'
import { Consumer, AuthContext } from "../../context/Authcontext";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './AWSSlider.css'
import 'react-awesome-slider/dist/styles.css';
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import Map from "../../map/Maptest";
import CardMedia from "@material-ui/core/CardMedia";
import {plans} from "../EditPreviousPlan";
import Download from "./Download";
import moment from 'moment';


export default class SinglePlan extends Component {

    state = {
        data: '',
        isHidden: true,
        showButton: 'Show',
    };


    /*Toggle for hiding and showing the map component*/
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden,
            showButton: 'Hide',
        })
    };

    AuthContext = this.context;

    componentDidMount(props) {
        this.context.getData("plans/" + this.props.match.params.id).then(res => this.setState({data: res}))
        console.log( "componentDidMount: " + this.state.data)
    }
    /*Muutos method hides AwsomeSlider if ready pictures do not exist. If they do, then they are shown in a slider.*/

    muutos = () =>{
        return {
            display: this.state.data.readyPictures && this.state.data.readyPictures.length ===0? 'none':'visible'}}

    render() {
        const {id, date, description, header, location, notes, participants, latitude, longitude, referencePictures, readyPictures} = this.state.data;
        console.log(this.state);
        console.log(header);
        if (referencePictures) {
            // console.log(referencePictures[0].url);
        }


        return (
            <div>
                <Box style={boxWrapper}>
                    <div>

                        <Download id={id} date={date} header={header} description={description} participants={participants} location={location} notes={notes} latitude={latitude} longitude={longitude} referencePictures={referencePictures}/>


                        <CardContent>
                            <Card className="paper">
                                <Typography variant="h4">
                                    <CardContent>{header}</CardContent>
                                    {<h6 variant="h6"  style={textStyle}> Date & Time: {moment(date).format('LLLL')}</h6>}
                                </Typography>
                            </Card>
                        </CardContent>
                        {readyPictures && <Container maxWidth="lg"style={this.muutos()}>
                                <Paper className="root" style={sliderStyle}>
                                    <AwesomeSlider cssModule={AwsSliderStyles} >
                                        {readyPictures.map(picture => (
                                        <div data-src={"/"+picture.url}/>))}
                                    </AwesomeSlider>
                                </Paper>
                            </Container>}
                        <Grid>
                            <Grid container style={rootStyle} spacing={2}>
                                <Grid item xs>
                                    <CardContent>
                                        <Card className="paper" style={cardStyle}>
                                            <Typography variant="h5">
                                                <CardContent>Description</CardContent>
                                                <Typography component="p" style={textStyle}>{description}</Typography>
                                            </Typography>
                                        </Card>
                                    </CardContent>
                                    <CardContent>
                                        <Card className="paper" style={cardStyle}>
                                            <Typography variant="h5">
                                                <CardContent>Participants</CardContent>
                                                <Typography component="p" style={textStyle}>{participants}</Typography>
                                            </Typography>
                                        </Card>
                                    </CardContent>
                                    <CardContent>
                                        <Card className="paper" style={cardStyle}>
                                            <Typography variant="h5">
                                                <CardContent>Notes</CardContent>
                                                <Typography component="p" style={textStyle}>{notes}</Typography>
                                            </Typography>
                                        </Card>
                                    </CardContent>
                                    <CardContent>
                                        <Card className="paper" style={cardStyle}>
                                            <Typography variant="h5">
                                                <CardContent>Location</CardContent>
                                                <Typography component="p" style={textStyle}>{location}</Typography>
                                            </Typography>
                                        </Card>
                                    </CardContent>
                                </Grid>
                            </Grid>

                    <CardContent>
                        <Card>
                        <div>
                            <Button  style={buttonShow}  variant="outlined" size="small" onClick={this.toggleHidden.bind(this)}>{this.state.showButton}</Button>
                            <p style={textStyle}>Photoshoots location on map</p>
                        </div>
                            {!this.state.isHidden &&
                            <div  style={mapWrapper}>
                                <Map width={'65vw'} height={'50vh'}/>
                            </div>
                            }
                        </Card>

                    </CardContent>
                </Grid>
                        {referencePictures && <div>
                        {referencePictures.map(picture => (
                        <Grid container spacing={1}>

                        <Grid style={gridPic}>

                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Your reference picture"
                                    height="150"
                                    maxWidth="150px"
                                    image={"/pictures/"+picture.url}
                                    title="Your reference picture"
                               style={pic} />
                               
                            </CardActionArea>
                        </Grid>
                        </Grid>
                            ))}
                            </div>}
                    </div>
                </Box>
        </div>
        )
    }
}
const pic ={

    justify: 'center',
    alignItems: 'center'
}
const gridPic = {
    justify: 'center',
    alignItems: 'center',
    margin: '0 auto',
    paddingTop: '5%',
    borderRadius: 'borderRadius',
}

const rootStyle = {
    flexGrow: 1,
    direction: 'row',
    justify: 'space-evenly',
    alignItems:'flex-start',
};
const sliderStyle = {
    marginBottom: '30px',
    justify: 'center',
    alignItems: 'center',
    maxWidth: '50 %',
    height: 'auto'
};
const boxWrapper = {
    borderRadius: 'borderRadius',
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '75%',
};
const menuStyle = {
    width: '90%',
    paddingLeft: '15px',
    marginLeft: '10',
};
const textStyle = {
    marginLeft: '10',
    width: '90%',
    paddingLeft: '15px',
    paddingBottom:'10px',
};
const cardStyle = {
    // width: '50%',
};
const mapWrapper= {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '75%',
    padding: '30px',
};
const buttonShow = {
        alignItems: 'left',
        display: 'flex',
        margin:'10px',
    };
const refButtonArea = {
    padding: '10px',
    display: 'flex',
};
const refButton = {
    backgroundColor: 'ghostwhite',
    marginLeft:'10px',
};

    SinglePlan.contextType = AuthContext;
