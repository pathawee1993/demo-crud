import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap'

class Read extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }
    componentDidMount(){
        fetch("http://localhost:3001/read")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result.rows);
            this.setState({
              isLoaded: true,
              items: result.rows
            });

            
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          })
    }
    render() {
        if (this.state.isLoaded){
            var rows = []
            for (var i  = 0; i < this.state.items.length; i++){
                rows.push(<ListGroup.Item> {this.state.items[i].firstName}, {this.state.items[i].lastName}</ListGroup.Item>)
            }
            return <ListGroup>{rows}</ListGroup>;
        }else{
            return <h1>Read :</h1>;
        }
    }
}

export default Read;