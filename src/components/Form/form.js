import axios from 'axios';
import React from 'react';
import './form.css'

class Form extends React.Component{
   /*  userNameInput = React.createRef();
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.userNameInput.current.value)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="GitHub UserName" required ref={this.userNameInput}/>
                <button>Add Card</button>
            </form>
        );
    } */
    // userNameInput = React.createRef();
    state = {userName : ''};
    handleSubmit = async  (event) =>{
        event.preventDefault();
       const response =await axios.get(`https://api.github.com/users/${this.state.userName}`);
       this.props.onSubmit(response.data);
       this.setState({userName:''})
       console.log(response);
        // console.log(this.userNameInput.current.value)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="GitHub UserName" required value={this.state.userName} onChange={event => this.setState({userName: event.target.value})}/>
                <button>Add Card</button>
            </form>
        );
    }
}

export default Form; 