import React, { Component } from 'react';
import axios from 'axios'
class PostForm extends Component {


    state ={
        name: ''
    }
    
    handleChange =(e) =>{
        this.setState({
         name: e.target.value
        })
    }   

    handleSubmit = (e) =>{
        e.preventDefault();
        const user = {
            name: this.state.name
          };
      
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
              console.log(res);
              console.log(res.data);
         })
    }

    render() {
        return (
            <div>
             <form onSubmit={this.handleSubmit}>
                <label>
                    Person Post:
                    <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
           </form>
            </div>
        );
    }
}

export default PostForm;