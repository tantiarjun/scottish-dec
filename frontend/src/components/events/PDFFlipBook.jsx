import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import { Howl } from 'howler';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFFlipBook = () => {
    const [numPages, setNumPages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pageFlipSound, setPageFlipSound] = useState(null);

    useEffect(() => {
        // Initialize the Howl sound object
        const sound = new Howl({
            src: ['/sounds/page-flip.mp3'], // Update this path to match your project structure
            preload: true,
            onload: () => console.log('Sound loaded successfully'),
            onloaderror: (id, error) => console.error('Error loading sound:', error)
        });
        setPageFlipSound(sound);

        // Clean up function
        return () => {
            sound.unload();
        };
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setLoading(false);
    };

    const handlePageFlip = () => {
        if (pageFlipSound) {
            pageFlipSound.play();
        }
    };

    if (loading) {
        return (
            <div className="relative">
                <div className="container mx-auto px-4 py-8">
                    <div>Loading PDF...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 font-playfair">Yoga Book</h1>
                <HTMLFlipBook
                    width={300}
                    height={500}
                    size="stretch"
                    minWidth={300}
                    maxWidth={1000}
                    minHeight={400}
                    maxHeight={1533}
                    maxShadowOpacity={0.5}
                    showCover={true}
                    mobileScrollSupport={true}
                    onFlip={handlePageFlip}
                    className="mx-auto"
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <div key={`page_${index + 1}`} className="demoPage">
                            <Document
                                file="/Yogabook.pdf" // Update this path to match your project structure
                                onLoadSuccess={onDocumentLoadSuccess}
                                className="mx-auto"
                            >
                                <Page
                                    pageNumber={index + 1}
                                    width={300}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            </Document>
                        </div>
                    ))}
                </HTMLFlipBook>
            </div>
        </div>
    );
};

export default PDFFlipBook;