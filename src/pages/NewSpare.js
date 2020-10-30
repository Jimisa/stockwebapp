import React,{Component} from 'react';

class NewSpare extends Component {
    initialState = {
        name: '',
        type:'',
        interface:'empty',
        fonction:'',
        consommation:'',
        caracteristique:'',
        unite:''
    }

    state = this.initialState;

    handleChange = (event) => {
        const {name,value} = event.target;

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
             <select value={this.state.interface} onChange={this.handleChange}>
                 <option value="empty">empty</option>
                 <option value="I2C">I2C</option>
                 <option value="SPI">SPI</option>
                 <option value="Serial">Serial</option>
             </select>
         </label>
         <input type="button" value="Enregistrer" onClick={this.submitForm} />
     </form>
 )}
}
export default NewSpare;
