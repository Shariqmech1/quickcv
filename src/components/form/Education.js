import React from 'react';
import EducationForm from './EducationForm';
import EducationItem from './EducationItem';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editID: this.props.list[this.props.list.length-1].id
        };
    }

    openEdit = (e) => {
        this.setState({
            editID: e.target.parentNode.id
        });
    }

    closeEdit = (e) => {
        e.preventDefault();
        this.setState({
            editID: ""
        });
    }

    addItem = (e) => {
        const callback = () => this.setState({
            editID: this.props.list[this.props.list.length-1].id
        });
        this.props.addItem(callback);
    }
    
    render() {
        const {list, onChange, addItem, buttons} = this.props;

        return (
            <div>
                {list.map(item => {
                    if(item.id == this.state.editID)
                        return <EducationForm info={item} onChange={onChange} closeEdit={this.closeEdit} key={item.id} />
                    else
                        return <EducationItem info={item} openEdit={this.openEdit} key={item.id} />
                })}
                <div className="buttons-row">
                    <button onClick={buttons.backPage}>Back</button>
                    <button onClick={addItem}>Add Education</button>
                    <button onClick={buttons.downloadPDF}>Download</button>
                </div>
            </div>
        );
    }
}
export default Education;