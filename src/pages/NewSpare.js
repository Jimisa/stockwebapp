import React,{Component} from 'react';

class NewSpare extends Component {
    initialState = {
        name: '',
        type:'',
        interface:'0',
        fonction:'',
        consommation:'',
        caracteristique:'',
        unite:''
    }

    state = this.initialState;

    handleChange = (event) => {
        const {name,value} = event.target;
        console.log(name, value)
        this.setState({
            [name]:value
        })
    }

    submitForm = (event) => {
        console.log(this.state.name, this.state.type,this.state.interface)
        this.setState(this.initialState)
        event.preventDefault();

     }

     componentDidUpdate() {
         //console.log(this.state)
     }
render () {

  return (
     <form>
         <label>Nom:
             <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
         </label>
         <label>Type:
             <input type="text" name="type" id="type" value={this.state.type} onChange={this.handleChange} />
         </label>
         <label>Interface:
             <select name="interface" value={this.state.interface} onChange={this.handleChange}>
                 <option value="0">empty</option>
                 <option value="1">I2C</option>
                 <option value="2">SPI</option>
                 <option value="3">Serial</option>
             </select>
         </label>
         <input type="button" value="Enregistrer" onClick={this.submitForm} />
     </form>
 )}
}
export default NewSpare;
