# NYT Mongo Scrubber
[NYT Mongo Scrubber](https://warm-brook-13640.herokuapp.com/)

## Object

This scrubber lets users choose a topic, narrow the results with specified years, and save articles of interest. They can add notes to their saved articles or delete them too. 

## Technology used

This scrubber uses React for the V of its MVC; it will also have a Mongo database. Additional technologies include Axios for the form to talk with React; JavaScript, Express and Yarn for package management. 

## Code excerpts

I'm told React simplifies things, but I have to respectfully disagree. For example it takes all of this to get ONE form field functioning: 

### in the form component .js file (there's still the index and css files that aren't included here):
```
const Form = props => {

return (
<form>
<label htmlFor="topic">Topic</label>
<input 
placeholder="example topic"
type="text"
className="form-input"
id="topic"
required
onChange={ props.handleInputChange }
value={props.value}
></input>
</form>
)
}

export default Form;
```

### in the Pages/home file: 

```
class App extends Component {
constructor (props){
super(props)
}
state = {
topic: ""
}
handleInputChange=(e) =>{
console.log(e)
this.setState({
topic: e.target.value
})
}
handleSubmit=() =>{
console.log(this.state.topic)
axios.post(`/test`, { topic:this.state.topic })
.then(res => {
console.log(res);
console.log(res.data);
})
}
//invoked to load component data
componentDidMount() {
}
```

And don't forget this part in the wrapper: 
```
<Form 
handleInputChange={this.handleInputChange}
{...this.props}
value={this.state.topic}
/>
<Button 
className="search" 
onClick={this.handleSubmit}
>
```

## Conclusions

I didn't get as far as I wanted with this app yet. But I learned more about React and do plan to get it working; it just may not happen before July 12 :neckbeard:
