import React from 'react';
import Main from '../layouts/Main';
import {Document, pdfjs} from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => (
    <Main
        title="Resume"
        description="Patrick Johnson's Resume">
            <a href='Patrick_Johnson_Resume.pdf' target="_blank">view</a>
            
    </Main>
);

export default Resume;