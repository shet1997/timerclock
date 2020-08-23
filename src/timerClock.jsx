import React from 'react';
import TimerForm from './components/timerForm';

class TimerComponent extends TimerForm {

    render() { 

        const {timerTime} = this.state;

        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return ( 
            <React.Fragment>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.renderInputButton("button", "start")}</td>
                            <td>{this.renderInputButton("button", "stop")}</td>
                            <td>{this.renderInputButton("button", "reset")}</td>
                        </tr>
                        <tr>
                            <td colSpan="3">
                                <h6> {hours} : {minutes} : {seconds} </h6>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default TimerComponent;