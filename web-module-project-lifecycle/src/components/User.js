import React from 'react';
import axios from 'axios';

class User extends React.Component {

    state = {
        followers: []
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/fernando817mm/followers')
            .then(res => {
                this.setState({
                ...this.state,
                followers: res.data
                })
            })
            .catch(err => {
                alert(err);
            })
        }
    
    render(){
        return (
            <div className='user-container'>
                <img src={this.props.user.avatar_url} alt={this.props.user.name} width={200} />
                <div className='follower-container'>
                    <h2>Followers:</h2>
                    {
                        this.state.followers.map((e, idx) => {
                            return (
                                <div className='follower' key={idx+3}>
                                    <img src={e.avatar_url} alt={e.login} width={150} key={idx}/>
                                    <h2 className='name' key={idx+1}>{e.login}</h2>
                                    <a href={e.html_url} target='_blank' rel='noreferrer' key={idx+2}><span>GitHub:</span> {e.html_url}</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    
}

export default User;