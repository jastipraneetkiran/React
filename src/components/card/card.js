import React from 'react';
// import plogo from '../../images/plogo.png'
// import './card.css'
class Card extends React.Component{
    render(){
        const profile = this.props;
        return( 
            <div style = {{ margin: '1rem' }}>
                <img src={profile.avatar_url} alt="logo" style={{ width: 75,height: 75}} />
                <div style={{  marginLeft : 10,display: 'inline-block'}} >
                    <div style={{fontSize: '1.25rem',fontWeight: 'bold'}} >{profile.name}</div>
                    <div style={{fontSize: '0.75rem',fontWeight: 'italic'}}>{profile.company}</div>
                </div>
            </div>

        );
    }
}

export default Card;