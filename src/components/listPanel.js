import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import { FriendBoxComponent } from './chatboxComponent/friendboxComponent.js'
// import { ChatBoxComponent } from './chatboxComponent/boxComp.js'

const useStyles = {
    card: {
        margin: '5%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};


export class ListPanel extends React.Component {

    constructor() {
        super();

        this.state = {
        }

    }

    render() {
  
        let entries = this.props.entries;

        const classes = useStyles;
        const bull = <span className={classes.bullet}>•</span>;

        if (Object.keys(entries).length==0){
            return  (<div className="col">
             <p >No Entries </p>
            </div>)
        } 
        return (
            <div className="col">
                {
                    Object.keys(entries).map(ele =>
                     
                            <Card style={classes.card}>
                                <div className="row">
                                    <div className="col-8">

                                        <CardContent>
                                            <Typography style={classes.title} color="textSecondary" gutterBottom>
                                                 {entries[ele].name}



                                            </Typography>

                                            <Typography style={classes.title} color="textSecondary">
                                                {ele} <br />
                                                Phno {entries[ele].phno}
                                            </Typography>
                                           

                                            <Typography style={classes.title} variant="body2" component="p">
                                                Hobbies are {(!entries[ele].hobbies || entries[ele].hobbies.length == 0) ? "none" : entries[ele].hobbies.join(", ")}

                                            </Typography>
                                        </CardContent>
                                    </div>

                                    <div className="col-2 m-3">
                                        <Button size="small" onClick={()=> this.props.deleteEntry(ele) }>Delete</Button>
                                    </div>
                                </div>
                            </Card>
                      
                    )
                }
            </div>
        )
    }


}
