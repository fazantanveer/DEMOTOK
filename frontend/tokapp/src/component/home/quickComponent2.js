import React,{Component} from 'react';
import './quickComponent.css';
import QuickDisplay2 from './quickDisplay2';

const url = "https://restnodeapis.herokuapp.com/coffee";

class QuickSearch2 extends Component{
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <>
                <div id="recipe">
                    <QuickDisplay2 mealData={this.state.mealType}/>
                </div> 
            </>
        )
    }

    //apicalling
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }

}

export default QuickSearch2