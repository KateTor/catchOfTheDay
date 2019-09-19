import React from 'react';
import { getFunName } from '../helpers'; 

class StorePicker extends React.Component{
    myInput = React.createRef();

// Another way of binding this to a custom function is to change syntax to below...otherwise you have to create a constructor with super and add this.goToStore = this.goToStore.bind(this)
    goToStore = (event) => {
      // Stops form from submitting and reloading page
      event.preventDefault();
      // Gets value from input 
      const storeName = this.myInput.current.value;
      // Push is one way to use react router - won't refresh page, just changes url 
      this.props.history.push(`/store/${storeName}`)
    };


    render() {
        return (
            <form className="storeSelector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input 
                  type="text"
                  ref={this.myInput}s
                  required placeholder="Store Name" 
                  defaultValue={getFunName()}/>
                <button type="submit">Visit Store >></button>
            </form>
        )    
    }
}


export default StorePicker;