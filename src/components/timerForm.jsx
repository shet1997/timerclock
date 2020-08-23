import React, { Component } from 'react';
import Input from '../common/input';

class TimerForm extends Component {
    state = { 
        timerOn : false,
        timerStart : 0,
        timerTime : 0
     }


     startTimer = () => {
        this.setState({
            timerOn : true,
            timerTime : this.state.timerTime,
            timerStart : Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime : Date.now() - this.state.timerStart
            });
        }, 10);
            
     }

     resetTimer = () => {
        this.setState({
            timerStart : 0,
            timerTime : 0
        });
        clearInterval(this.timer);
     }

     stopTimer = () => {
         this.setState({
             timerOn : false
         });

         clearInterval(this.timer);
     }


     buttonClick = (e) => {
        let values = e.target.value;
        switch(values) {
            case 'start' : this.startTimer()
            break;
            case 'stop' : this.stopTimer()
            break;
            case 'reset' : this.resetTimer()
            break;
        }
     }
    
    renderInputButton(type, value) {
        return(
            <Input 
                type={type}
                value={value}
                onClick={this.buttonClick}
            />
        );
    }
}
 
export default TimerForm;