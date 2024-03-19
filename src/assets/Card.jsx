// Lecture 4th
import profile from './profilepic.jpg'
import PropTypes from 'prop-types'
function Card(props){
    return (
        <div className="card">
            <img className="profileimage" src={profile} alt="Profile image" />
            <h2 className='title'>{props.title} </h2>
            <p className='description'>{props.description}</p>
        </div>
    );
}
Card.propTypes = {
    title:PropTypes.string,
    description:PropTypes.string,
};
Card.defaultProps = {
    title : "Unknown",
    description :"I am a student from TSEC.",
}
export default Card