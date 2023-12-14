import {Component} from "react";
import {PropsPost, PropsPostComponent} from "../../../../../redux/interfaces/profile/post/post";
import PostComponent from "./PostComponent";

class Post extends Component<PropsPostComponent, PropsPost> {
    componentDidMount() {
        // todo get
    }

    render() {
        return <PostComponent name={this.props.name}
                             nickname={this.props.nickname}
                             avatarUrl={this.props.avatarUrl}/>
    }
}

export default Post