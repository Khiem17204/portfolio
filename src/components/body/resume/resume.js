import React from 'react';
import Separator from '../../common/separator';
import "./resume.css";

const Resume = () => {
  return (
    <div className='resume'>
        <Separator/>
        <label className="section-title">Resume</label>
        <div className="frame">
        <iframe
            title='resume'
            width="960"
            height="1060"
            src="https://drive.google.com/file/d/1_DqvnloOV1mdkKBJeeQZm2yJBYDOeXs6/preview"
        />
        </div>
        
    </div>
  )
}
export default Resume;