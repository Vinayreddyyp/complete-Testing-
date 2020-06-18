import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';


const cookies_key = 'NOTES';
 
class App extends Component {
  state = {
      text: '',
      notes: [],
  }

  componentDidMount() {

      this.setState({ notes: read_cookie(cookies_key)});
  }

  onDeleteHandler = () => {
      this.setState({notes: []})
  }

  onSubmitHandler = () => {
      const {  notes, text } = this.state;
    
      notes.push({text});

      this.setState({ notes});

      bake_cookie(cookies_key, this.state.notes);
  }
    render() {
        const { text } = this.state;
        return (
            <div>
                 <h2>my name is not self</h2>
                 <Form inline>
                     <FormControl onChange={(event) => this.setState({text: event.target.value})}/>
                     {' '}
                     <Button onClick={this.onSubmitHandler}>Submit</Button>
                     
                 </Form>
                 {this.state.notes.map((note, id) => {
                     return (
                         <Note key={id} note={note}/>
                     )
                 })}
                 <Button onClick={this.onDeleteHandler}>Clear</Button>
                 <div className="vinay"></div>
            </div>
        )
    }
}

export default App;
