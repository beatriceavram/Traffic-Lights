import React, {Component} from 'react';


class TrafficLight extends Component {
        state = {
            activeLight: 0,
        };

        handleLightChange = () => {
            const circles = document.querySelectorAll('.circle');
            let {activeLight} = this.state;

            circles[activeLight].className ='circle';
            activeLight++;

            if(activeLight > 2) {
                activeLight = 0;
            }

            const currentLight = circles[activeLight];
            currentLight.classList.add(currentLight.getAttribute('color'));

            this.setState({activeLight});
        };

    componentDidMount() {
    this.intervalId = setInterval(() => {
                    this.handleLightChange();
    }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="container">
                <div className="circle red" color="red"></div>
                <div className="circle" color="yellow"></div>
                <div className="circle" color="green"></div>
            </div>
        );
    }
}

export default TrafficLight;