const Profile = (name, occupation, location, bio) => {

    // console.log(props)

return (
    <div className="profile-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvOwqeS0L5ypI3Lmf9OC6uPFg9xSwAc4hlpzaoSBT-w&s=10" alt="Profile" width={80} /> 
        <h2>{name}</h2>
        <p>{occupation}</p>
        <p>{location}</p>
        <p>{bio}</p>
      
    </div>
  )

}
export default Profile