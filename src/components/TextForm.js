import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [email, setEmail] = useState([]);

    const handleUpperCaseClick = () => {
        let upperCaseText = text.toUpperCase();
        if (upperCaseText === text) {
            props.alertFunction("Text Already in Upper Case", "danger");
        }
        else {
            setText(upperCaseText);
            props.alertFunction("Converted to Upper Case", "success");
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handlelowerCaseClick = () => {
        let lowerCaseText = text.toLowerCase();
        if (lowerCaseText === text) {
            props.alertFunction("Text Already in Lower Case", "danger");
        }
        else {
            setText(lowerCaseText);
            props.alertFunction("Converted to Lower Case", "success");
        }
    }
    const handleClearClick = () => {
        setText('');
        setEmail([]);
        if (text === '') {
            props.alertFunction("Text Already Cleared", "warning");
        }
        else {
            props.alertFunction("Text Cleared", "success");
        }
    }
    const handleHighlightEmailClick = () => {
        const emailMatch = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g;
        const emailsFound = text.match(emailMatch) || [];
        setEmail(emailsFound);
        if (emailsFound.length > 0) {
            props.alertFunction("Emails Extracted", "success");
        }
        else {
            props.alertFunction("No Emails Found", "warning");
        }
    }

    //Basic Function
    // const handleCopyTextClick = () => {
    //     navigator.clipboard.writeText(text);
    //     props.alertFunction("Text Copied", "success");
    // }

    const handleCopyTextClick = () => {
        if (navigator.clipboard) {
            // Modern Clipboard API
            navigator.clipboard.writeText(text)
                .then(() => {
                    props.alertFunction("Text Copied", "success");
                })
                .catch((err) => {
                    console.error('Failed to copy text: ', err);
                    props.alertFunction("Failed to copy text", "danger");
                });
        } else {
            // Fallback to document.execCommand() for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                document.body.removeChild(textArea);
                props.alertFunction("Text Copied", "success");
            } catch (err) {
                console.error('Fallback copy failed: ', err);
                props.alertFunction("Failed to copy text", "danger");
            }
        }
    };

    const handleExtraSpacesClick = () => {
        const result = text.trim().replace(/\s+/g, ' ');
        if (result === text) {
            props.alertFunction("No Extra Spaces Found", "warning");
        }
        else {
            setText(result);
            props.alertFunction("Space Removed", "success");
        }
    }
    return (
        <>
            <div className='container' style={{
                color: props.theme === 'dark' || props.theme === 'green' || props.theme === 'red'
                    ? 'white' : '#010f24'
            }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.theme === 'dark' ? '#010f24' : props.theme === 'green' ? '#21936B' : props.theme === 'red' ? '#C91A42' : 'white', color: props.theme === 'dark' || props.theme === 'green' || props.theme === 'red' ? 'white' : '#010f24' }} id="myBox" rows="8"></textarea>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-6 col-md-3 mb-2">
                            <button className="btn btn-primary w-100" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                        </div>
                        <div className="col-6 col-md-3 mb-2">
                            <button className="btn btn-primary w-100" onClick={handlelowerCaseClick}>Convert to Lowercase</button>
                        </div>
                        <div className="col-6 col-md-3 mb-2">
                            <button className="btn btn-primary w-100" onClick={handleHighlightEmailClick}>Extract Email</button>
                        </div>
                        <div className="col-6 col-md-3 mb-2">
                            <button className="btn btn-primary w-100" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                        </div>
                        <div className="col-6 col-md-3 mb-2">
                            <button className="btn btn-primary w-100" onClick={handleCopyTextClick}>Copy Text</button>
                        </div>
                        <div className="col-6 col-md-3 mb-2">
                            <button className="btn btn-primary w-100" onClick={handleClearClick}>Clear Text</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container my-5" style={{
                color: props.theme === 'dark' || props.theme === 'green' || props.theme === 'red'
                    ? 'white' : '#010f24'
            }}>
                <div className="row">
                    <div className="col">
                        <h2>Text Summary</h2>
                        <p>
                            {text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters.
                        </p>
                    </div>
                    <div className="col">
                        <h2>Email Addresses</h2>
                        <p>
                            {email.length > 0 ? (
                                email.map((email, index) => (
                                    <span key={index}>{email}{index < email.length - 1 ? ', ' : ''}</span>
                                ))
                            ) : (
                                <span>No emails found</span>
                            )}
                        </p>
                    </div>
                </div>
                <h2>Preview Text</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
