import React from "react";
import { Dropdown, Option } from "./Dropdown";

class ActorLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
  }

<<<<<<< HEAD
  render() {
    return (
      <div>
        <h1>Which actor do you want to look up?</h1>
        <Dropdown
          formLabel="Choose an actor"
          buttonText="Send form"
          onChange={this.handleSelect}          action=""
        >
          <Option value="Click to see options" />
          <Option value="Actor 1" />
          <Option value="Actor 2" />
          <Option value="Actor 3" />
        </Dropdown>
        <p>You selected {this.state.value} </p>
=======


  return (

      <div className="actor">
      <div className="actor-form">
        <Paper style={styles.paperContainer}>
        <Grid container spacing={0} position= 'fixed' direction='column' alignItems='center' justifyContent='left' style={{ minHeight: '100%', backdropFilter: 'blur(10px)',  fontFamily: 'Trebuchet MS', fontSize: '4vh', color: 'white', textShadow: "2px 2px #6e6666", opacity:"0.90"}}>
        <h1>Search a movie with actor name!</h1>
        <form>  
        <b> Choose the actor: </b>  
        <select id = "Actorname" onchange = "ListActors()" > 
        <option> ---Choose Actor--- </option>  
        <option> a </option>  
        <option> b </option>  
        <option> c </option>  
        <option> d </option>  
        </select> 
         
        {isSubmitted ? <div>Actor Looked Up!</div> : renderForm}
        </form> 
        </Grid>
      </Paper>
>>>>>>> 92376fc79ce183819cd26eb8cb3d8eb073ceefc7
      </div>
    );
  }
}

export default ActorLookup;
