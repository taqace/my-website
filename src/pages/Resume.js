import React from 'react';
import Main from '../layouts/Main';
import { Document,Page,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => (

    <Main>
            <Document
                options={{
                    cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    cMapPacked: true,
                  }}
                file={process.env.PUBLIC_URL + '/resume.pdf'}
                onLoadError={console.error}
                onLoadSuccess={console.log('suc')}
            >
                <Page pageNumber={1}/>
            </Document>
    </Main>
);

export default Resume;