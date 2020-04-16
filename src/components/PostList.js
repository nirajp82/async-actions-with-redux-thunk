import React from 'react';
import { connect } from 'react-redux';

import { fetchPostAndUsers } from '../actions';
import UserProfile from './UserProfile';

class PostList extends React.Component {
    renderPostList = () => {
        return this.props.posts.map(item => {
            return (
                <div key={item.id} className="item">
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    </div>
                    <UserProfile userId={item.userId} />
                </div>
            );
        });
    };

    componentDidMount() {
        this.props.fetchPostAndUsers();
    };

    render() {
        return <div className="ui relaxed divided list">{this.renderPostList()}</div>;
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, { fetchPostAndUsers })(PostList);