import React, { Component } from 'react'

export class login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""

        }
    }
    login=(e)=>{
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(result=>{console.log(result);
        if(result.filter(user=>user.username===this.state.username).length>0){
            alert("Login Success");
        }else{
            alert("Login Failed");
        }
        });
        //if(this.state.username==="Admin" && this.state.password==="Admin"){
        //    alert("Login Success");
        //}
        //  else{
        //    alert("Login Failed");
        //}
    }
    onChangeUsername(username){
        this.setState({username})
    }
    onChangePassword(password){
        this.setState({password})
    }
  render() {
    return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={this.login}>
            <input type="text" value={this.state.username} onChange={(e)=>this.onChangeUsername(e.target.value)} placeholder="Username" >
            </input>
            <br/>
            <input type="password" value={this.state.password} onChange={(e)=>this.onChangePassword(e.target.value)} placeholder="Password">
            </input>
            <br/>
            <input type="submit" value="Login">
            </input>

        </form>
    </div>
    )
  }
}

export default login