import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// PostList取得
import PostList from '../containers/PostList';

const styles = theme => ({});

class Home extends React.Component {
    render(){
        const { actions } = this.props;
        const { classes } = this.props;
        return(
            <div>
                <Button
                    className={classes.button}
                    onClick={() => actions.getList()}
                >
                    リストを更新
                </Button>
                <PostList />
            </div>
        );
    }
}

// Material-ui関連
Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state, ownProps) => ({
});
function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
    withStyles(styles, { withTheme: true })(Home)
);