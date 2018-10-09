var React = require("react");
var actions = require("../actions/SchoolActions");
var createReactClass = require('create-react-class');

module.exports=createReactClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
        <div>



            <form className="" onSubmit={this.addSchool}>
            <div className="panel-heading"><h1>Add School names here</h1></div>

                <div className="form-group">
                    <label className="control-label" htmlFor="name">School Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="School Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary button" type="submit"><span class="glyphicon glyphicon-plus"></span> <strong>Add School</strong></button>
                </div>
            </form>
<img src="http://ekidooz.com/img/uploads/news_image/original/1307814691_1460013078.gif" alt=""/>
            </div>


        )
    }
})
