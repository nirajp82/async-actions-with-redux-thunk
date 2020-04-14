import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchUser } from '../actions';

class PostList extends React.Component {
    renderPostList = () => {
        return this.props.posts.map(item => {
            console.log(this.props.fetchUser(item.userId));
            return (
                <div key={item.id} className="item">
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    </div>
                    {this.props.userProfile ? <div>{this.props.userProfile.name}</div> : <div>Loading...</div>}
                </div>);
        });
    };

    componentDidMount() {
        this.props.fetchPosts();
    };

    render() {
        return <div className="ui relaxed divided list">{this.renderPostList()}</div>;
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        userProfile: state.userProfile
    };
};

export default connect(mapStateToProps, { fetchPosts, fetchUser })(PostList);