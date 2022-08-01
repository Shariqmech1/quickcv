import React from 'react';
import ReactToPrint from 'react-to-print';
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
            editID: e.currentTarget.parentNode.parentNode.id
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
    deleteItem = (e) => {
        if(this.props.list.length > 1)
            this.props.deleteItem(e);
        else {
            const callback = () => this.setState({
                editID: this.props.list[this.props.list.length-1].id
            });
            this.props.deleteItem(e, callback);
        }
    }
    
    render() {
        const {list, onChange, buttons, previewRef} = this.props;

        return (
            <div>
                <h2 className='form-title'>Education</h2>
                {list.map(item => {
                    if(item.id == this.state.editID)
                        return <EducationForm info={item} onChange={onChange} closeEdit={this.closeEdit} key={item.id} />
                    else
                        return <EducationItem info={item} openEdit={this.openEdit} deleteItem={this.deleteItem} key={item.id} />
                })}
                <div className="buttons-row">
                    <button className="back-btn" onClick={buttons.backPage}>Back</button>
                    <button className="add-btn" onClick={this.addItem}><i className="fa-solid fa-plus"></i>Add Education</button>
                    <ReactToPrint
                        trigger={() => {
                            return <button className="next-btn"><i className="fa-solid fa-print"></i>Print PDF</button>;
                        }}
                        content={() => this.props.previewRef}
                    />
                </div>
            </div>
        );
    }
}
export default Education;