var React = require('react');
var List = require('./List.jsx');
var InputBox = require('./InputBox.jsx');
var Button = require('./Button.jsx');

var TaskItem = React.createClass({
  getInitialState: function(){
    return {items:[], newItemText:'', showTask: true};
  },
  onChange: function(e){
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    if(this.state.newItemText.trim()){
      var currentItems = this.state.items;
      currentItems.push(this.state.newItemText);
      this.setState({items: currentItems, newItemText:'', showTask:true});
    }
  },
  removeTask: function(){
    this.setState({showTask:false});
  },
  render: function(){
      if(this.state.showTask){
        return(
          <div className="box">
            <span>
              <h3 className="task-title">{this.props.title} <span className="delete-task-item" onClick={this.removeTask}> x </span></h3>

            </span>
            <form onSubmit={this.handleSubmit}>
              <InputBox className="input-add-listitem" onChange={this.onChange} value={this.state.newItemText} placeholder="" />
              <Button className="btn-add-listitem" text="Add" />
            </form>

            <List items={this.state.items} />
          </div>
        );
      }
      else{
        return (<span></span>);
      }

  }
});

module.exports = TaskItem;
