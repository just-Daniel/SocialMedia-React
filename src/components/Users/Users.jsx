import React from 'react';
import style from './style.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/user.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => this.props.setUsers(res.data.items));
    
    } 
    render() {
        return (
            <div className={style.container}>
                {
                    this.props.users.map(u => <div key={ u.id }>
                        <span>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} className={style.userPhoto} alt='man'/>
                        </div>
                        <div>
                            {
                                u.followed 
                                ? <button className={`${style.btn_unfollow} ${style.btn}`} onClick={ ()=> {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button className={`${style.btn_follow} ${style.btn}`} onClick={ ()=> {
                                    this.props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{ u.fullName }</div>
                            <div>{ u.status }</div>
                        </span>
                        <span>
                            <div>{ 'u.location.country' }</div>
                            <div>{ 'u.location.city' }</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
};

export default Users;