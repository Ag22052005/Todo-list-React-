import profilepic from './profilepic.jpg'

function ProfileImage(){
    const imgurl = profilepic
    const handleclick = (e)=>{
        e.target.style.display = 'none'
    }
    return (
    <>
        <img className= "profilepic"src = {imgurl} onClick={(e)=>handleclick(e)}/>
    </>)
}
export default ProfileImage
