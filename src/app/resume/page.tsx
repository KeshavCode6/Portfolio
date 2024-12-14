import Navbar from '@/components/ui/navbar';
import React from 'react';

function Work() {
    return (
        <Navbar className='flex justify-center items-center gap-4'>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-lg'>My Resume</p>
                <p className='font-medium text-sm mb-2'>This is my professional resume as of December, 2024</p>
                <embed src="/resume.pdf" width="500" height="600"
                    type="application/pdf"></embed>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-bold text-lg'>My Cover Letter</p>
                <p className='font-medium text-sm mb-2'>This is my professional cover letter as of December, 2024</p>
                <embed src="/resume.pdf" width="500" height="600"
                    type="application/pdf"></embed>
            </div>
        </Navbar>
    );
}

export default Work;
