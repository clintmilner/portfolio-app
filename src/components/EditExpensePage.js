import React from 'react';

const EditExpensePage = (props) => {
    console.log('props', props);
    return (
        <div>
            Editing Expense #{props.match.params.id}
        </div>
    );
};

export default EditExpensePage;