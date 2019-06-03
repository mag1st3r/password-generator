import React from 'react';
import generate from 'nanoid/generate';
import dictionaryUpperCase from 'nanoid-dictionary/uppercase'
import dictionaryLowerCase from 'nanoid-dictionary/lowercase'
import noLookLike from 'nanoid-dictionary/nolookalikes'

const Numbers = '1234567890';
const Symbol = '_-_-_-';


class  App  extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            value: ``,
            rangeValue: 6,
            lowerCase: false,
            upperCase: false,
            symbol: false

        }

        this.generatePassword = this.generatePassword.bind(this);
        this.rangeValue = this.rangeValue.bind(this);
    }
    rangeValue(props) {
        let value  = props;
        this.setState({
            rangeValue: value
        });
    }



    generatePassword () {
        const  {value, rangeValue, lowerCase, upperCase, symbol} = this.state
        if(!lowerCase && !upperCase && !symbol) {
            const RandomString = generate(`${Numbers}`, rangeValue  );
            this.setState({
                value: `${RandomString}`
            });
        }

        if(lowerCase && !upperCase && !symbol){

            const LowercaseRandomString = generate(`${Numbers}${dictionaryLowerCase}`, rangeValue  );
            this.setState({
                value: `${LowercaseRandomString}`
            });

        }else if(upperCase && !lowerCase && !symbol){
            const LowercaseRandomString = generate(`${Numbers}${dictionaryUpperCase}`, rangeValue  );
            this.setState({
                value: `${LowercaseRandomString}`
            });
        }else if(upperCase && lowerCase && !symbol){
            const LowercaseRandomString = generate(`${Numbers}${noLookLike}`, rangeValue  );
            this.setState({
                value: `${LowercaseRandomString}`
            });
        }else if(upperCase && lowerCase && symbol){
            const LowercaseRandomString = generate(`${Numbers}${noLookLike}${Symbol}`, rangeValue  );
            this.setState({
                value: `${LowercaseRandomString}`
            });
        }else if(!upperCase && !lowerCase && symbol){
            const LowercaseRandomString = generate(`${Numbers}${Symbol}`, rangeValue  );
            this.setState({
                value: `${LowercaseRandomString}`
            });
        }else if(!upperCase && lowerCase && symbol){
            const LowercaseRandomString = generate(`${Numbers}${dictionaryLowerCase}${Symbol}`, rangeValue  );
            this.setState({
                value: `${LowercaseRandomString}`
            });
        }else if(upperCase && !lowerCase && symbol){
            const LowercaseRandomString = generate(`${Numbers}${dictionaryUpperCase}${Symbol}`, rangeValue  );
            this.setState({
                value: `${LowercaseRandomString}`
            });
        }
    }
    render() {

        return (
            <div className="App">
                <p>Generate a secure password</p>
                <input type="text"
                       defaultValue={this.state.value}
                />
                <div>
                    <label>
                        Length:
                        <input type="range"
                               min={6}
                               max={12}
                               defaultValue={6}
                               step={1}
                               onChange={ e => {
                                   this.rangeValue(e.target.value)
                               }}
                        />
                        {this.state.rangeValue}
                    </label>
                </div>

                <div>
                    <label>
                        Numbers(Always checked)
                        <input type="checkbox"
                               checked
                               disabled
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Lowercase
                        <input type="checkbox"
                               onChange={ e => {
                                   this.setState({
                                       lowerCase: e.currentTarget.checked
                                   });
                               }}

                        />
                    </label>
                </div>
                <div>
                    <label>
                        Uppercase
                        <input type="checkbox"
                               onChange={ e => {
                                   this.setState({
                                       upperCase: e.currentTarget.checked
                                   });
                               }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Symbols
                        <input type="checkbox"
                               onChange={ e => {
                                   this.setState({
                                       symbol: e.currentTarget.checked
                                   });
                               }}
                        />
                    </label>
                </div>
                <button
                    onClick={this.generatePassword}
                >Generate</button>
            </div>
        );
    }

}

export default App;
