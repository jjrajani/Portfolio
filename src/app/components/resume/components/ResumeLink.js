import React from 'react';

const ResumeLink = () => {
    const resumeLink =
        'https://docs.google.com/document/d/e/2PACX-1vSICb07zLnnm3vg0O26rKDil8BNFAUFO_QaENf3b9RUbkQHfgLwGmKhlR3pWSFsbWJ7tIsxkwnbn_WC/pub';
    return (
        <div className="resume_download">
            <a href={resumeLink} target="blank">
                <i className="fa fa-file-pdf-o" aria-hidden="true" />View Resume Doc
            </a>
        </div>
    );
};

export default ResumeLink;
