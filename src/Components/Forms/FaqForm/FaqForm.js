import React from 'react';
import './FaqForm.css';
import './generalFormStyle.css'

export default class FaqBackend extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputs: [] };
    }

    //     appendInput(e) {
    //         e.preventDefault()
    //         this.setState({ inputs: [...this.state.inputs, this.state.inputs.length + 1] },
    //             () => console.log(this.state)
    //         )
    //     }

    //     decreaseInput(e) {
    //         e.preventDefault()
    //         if (this.state.inputs.length > 0) {
    //             this.state.inputs.pop();
    //             this.setState(() => ({ inputs: this.state.inputs }));
    //         }
    //     }
    handleFaq1(e) {
        localStorage.setItem("FAQ1", e.target.value)
    }
    handleFaq1Answer(e) {
        localStorage.setItem("FAQ1Answer", e.target.value)
    }

    handleFaq2(e) {
        localStorage.setItem("FAQ2", e.target.value)
    }
    handleFaq2Answer(e) {
        localStorage.setItem("FAq2Answer", e.target.value)
    }


    render() {
        return (

            <div className='FaqsFormPage'>

                <h1>Step 4: FAQs</h1>
                <form className='faq-form'>
                    <h2>Please add your frequently asked questions for attendees</h2>
                    <p className='FaqFieldType'>Question:</p>
                    <input type='text' id='faqinput' onChange={this.handleFaq1}></input>

                    <p className='FaqFieldType'>Answer:</p>
                    <textarea type='text' id='faqtextarea' onChange={this.handleFaq1Answer}></textarea>

                    <p className='FaqFieldType'>Question:</p>
                    <input type='text' id='faqinput' onChange={this.handleFaq2}></input>

                    <p className='FaqFieldType'>Answer:</p>

                    <textarea type='text' id='faqtextarea' onChange={this.handleFaq2Answer} />

                    <div className="buttonBoxForms">
                        <a href='/dashboard/123' className="buttonBoxFormButton">Save and return to dashboard</a>
                        <a href='/contactForm' className="buttonBoxFormButton">Save and continue</a>
                    </div>
                </form>

            </div>
        );
    }
}