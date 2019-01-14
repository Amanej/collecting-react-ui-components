import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
import 'rc-slider/assets/index.css';
import moment from 'moment';


const now = new Date();
const month = new Date();
month.setDate(now.getDate() + 30);
const end = new Date();
end.setDate(end.getDate() + 90)

console.log('Now ',now, now.getTime())
console.log('Month ',month, month.getTime())

let d = Date.parse(month.getTime());
console.log("Parsed date ",d);

class MySlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: [now.getTime(),month.getTime()]
        }
    }

    
    parseDate(n) {
        console.log('n ',n);
        let d = new Date();
        d.setTime(n);
        console.log(d.getMonth())
        console.log('d ',d);
        //console.log(moment(d).format('MMM D YY'))
        //console.log(moment(d).format('dddd'))
        return moment(d).format('MMM D YY')
    }
    render () {
        return (
            <div>
                <p>Start {this.parseDate(this.state.date[0])}</p>
                <p>Slutt {this.parseDate(this.state.date[1])}</p>
            <Range 
                defaultValue={this.state.date}
                onChange={(e) => {
                    console.log("On change ",e);
                    this.setState({
                        date: e
                    });
                }}
                min={now.getTime()}
                max={end.getTime()}
                />
            </div>
        )
    }

}

export default MySlider