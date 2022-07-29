import React from 'react';
import ExperienceItem from './ExperienceItem';
import ExperienceForm from './ExperienceForm';

class Experience extends React.Component {
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
        const {list, onChange, buttons} = this.props;

        return (
            <div className="">
                {list.map(item => {
                    if(item.id == this.state.editID)
                        return <ExperienceForm info={item} onChange={onChange} closeEdit={this.closeEdit} key={item.id} />
                    else
                        return <ExperienceItem info={item} openEdit={this.openEdit} deleteItem={this.deleteItem} key={item.id} />
                })}
                <div className="buttons-row">
                    <button onClick={buttons.backPage}>Back</button>
                    <button onClick={this.addItem}>Add Experiece</button>
                    <button onClick={buttons.nextPage}>Next</button>
                </div>              
            </div>
        );
    }
}
export default Experience;

// state w/ edit: ""
// on edit click -> set state.edit to form id
// map & if item.id == edit.id -> pass edit={true}
// in item, if edit -> display form
// else ->  display list item