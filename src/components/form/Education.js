import React from 'react';
import EducationItem from './EducationItem';

const Education = ({list, onChange, addItem, buttons}) => {
    //const {list, onChange, addItem, buttons} = this.props;

    return (
        <div>
            {list.map(item => <EducationItem info={item} onChange={onChange} key={item.id}/>)}
            <div className="buttons-row">
                <button onClick={buttons.backPage}>Back</button>
                <button onClick={addItem}>Add Education</button>
                <button onClick={buttons.downloadPDF}>Download</button>
            </div>
        </div>
    );
}
export default Education;