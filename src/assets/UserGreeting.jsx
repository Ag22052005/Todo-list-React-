// Lecture 5th
import propTypes from 'prop-types'
function UserGreeting(props){
    const welcomemsg = <h2 className='welcomemsg'>Welcome {props.username}</h2>
    const loginprompt = <h2 className='loginmsg'>Please Login to Continue.....</h2>
    return props.islogin?welcomemsg:loginprompt;
}
UserGreeting.PropType ={
    islogin:propTypes.bool,
    username: propTypes.string,
}
UserGreeting.PropType = {
    islogin:false,
    username:"Guest"
}
export default UserGreeting 