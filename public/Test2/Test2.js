


//this is my code fir the second assignment




    state = {
      userInput: ""
    }
  
    inputChangedHandler = (event) => {
      this.setState ({userInput:event.target.value});
    }
  
  render (){
    const charList= this.state.userInput.split(" ").map ((ch,index)=>{
      return<Char character={ch} key={index} />;
     
        });
  
    
  
    return(
  <div>
    <h1>this is me animesh</h1>
    <input type="text" 
    onChange={this.inputChangedHandler} 
    value={this.state.userInput}
     ></input>
     <p>your input: {this.state.userInput}</p>
     <p > length of the text:{this.state.userInput.length}</p>
    <Validation inputLength={this.state.userInput.length}/>
    {charList}
  </div>
      
    );
  }  
  
  