import cors from 'cors';
 var Cors = cors();

const e = React.createElement;

class LikeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = { liked: false };
    }

    render(){
        if(this.state.liked){
            return 'You like this.';
        }
        return(
            <button onClick {...() => this.setState({ liked: true })}>
                Like
            </button>
        );
    }
}

const domContainer = document.querySelector('#like_button');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));