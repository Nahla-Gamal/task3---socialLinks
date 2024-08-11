import './PersonalInformation.css'
import avatar from '../../assets/avatar.jpeg'

function PersonalInformation() {
    return(
    <div className='profile-data'>
        <div id='profile-img'>
            <img src={avatar} />
        </div>
        <div className='personal-info'>
           <p className='name'>Jessica Randall</p>
           <p className='location'>London,United Kingdom </p>
        </div>
        <p className='description'><q>Front-end developer and avid reader.</q></p>
    </div>
    )
}

export default  PersonalInformation