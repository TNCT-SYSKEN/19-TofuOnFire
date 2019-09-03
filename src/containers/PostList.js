import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";
import ListItem from "../components/ListItem";
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    },
});

class PostList extends React.Component {
    render() {
        const { ListReducer } = this.props;

        const postItems = ListReducer.items;
        let renderCards = [];
        let postCards =[];
        let emptyCards =[];
        const postItemsLength = postItems.length;

        for (let index = 0; index < postItemsLength; index++) {
            postCards.push(<ListItem key={index} {...postItems[index]}/>);
            emptyCards.push(<ListItem key={postItemsLength + index} empty="true"/>);
        }
        renderCards.push(postCards);
        renderCards.push(emptyCards);

            // 読み込み中はロード画面にする
        if (ListReducer.isFetching === true){
            return (
                <div>
                    <CircularProgress size={50} />
                </div>
            );

        // カードを表示
        }
        else {
            return (
                <div>
                    {renderCards}
                </div>
            );
        }
    }
}

// Material-ui関連
PostList.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

  // Redux関連
const mapState = (state, ownProps) => ({
    AnimeListReducer: state.AnimeListReducer,
});
function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
    withStyles(styles, { withTheme: true })(PostList)
);