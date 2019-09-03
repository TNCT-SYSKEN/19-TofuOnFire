import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import { CardContent } from "@material-ui/core";

const styles = {
    card: {
        width: 330,
        marginTop: 10,
        marginBottom: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    title: {
        fontsize: 12,
    },
    empty: {
        width: 330,
        height: 0,
        margin: 0,
        padding: 0,
    },
}

function ListItem(props) {
    const { empty, title, image_url, classes} = props;
    if (empty === "true") {
        return (
            <Card className={classes.empty}>
            </Card>
        );
    } else {
        return (
            <Card className={classes.card}>
                <CardContent>
                    <CardActions>
                        <CardMedia
                            className={classes.media}
                            image="image_url"
                            title={title}
                        />
                        <Typography className={classes.title}>
                            {title}
                        </Typography>
                    </CardActions>
                </CardContent>
            </Card>
        );
    }
}

ListItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItem);
