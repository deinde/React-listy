var Note = React.createClass({
	       getInitialState:function(){
         return {editing:false}
	      },
	      edit: function(){
	      	this.setState({editing:true});
	      },
	      save: function(){
	      	var val = this.refs.nextText.getDOMNode().value;
	      	 this.setState({editing:false});
	      	 alert('TODO: Save note value:'+val)
	      },
	      remove: function(){
	      	alert('removing note');
	      },
	      renderDisplay: function(){
	      	    return(
                    <div className="note">
                    <p>{this.props.children}</p>
                      <span>
                        <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
                        <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
                      </span>
                    </div>

            	);

	      },
	      renderForm: function(){
	      	return(
             <div className="note">
               <textarea ref="nextText" defaultValue={this.props.children} className="form-control"></textarea>
               <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk">Submit</button>
             </div>

	      		);

	      },
        render: function(){
           if(this.state.editing){
           	return this.renderForm();
           }else{
           	return this.renderDisplay();
           }
                  
        }
     }); 

			var Board = React.createClass({
			    propTypes: {
			        count: function(props, propName) {
			            if (typeof props[propName] !== "number"){
			                return new Error('The count property must be a number');
			            }
			            if (props[propName] > 100) {
			                return new Error("Creating " + props[propName] + " notes is ridiculous");
			            }
			        }
			    },

			    render: function() {
			        return <div className="board">{this.props.count}</div>
			    }
			});


			React.render(<Board count={5}/>, 
			    document.getElementById('react-container'));
















