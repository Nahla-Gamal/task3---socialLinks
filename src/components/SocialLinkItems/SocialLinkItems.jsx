import './SocialLinkItems.css'

function SocialLinkItems(props) {
    return(
     <button className='btn'>
      {props.SocialLinkName}
     </button>
    )
}

export default SocialLinkItems