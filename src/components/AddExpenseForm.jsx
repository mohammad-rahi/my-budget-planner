import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { v4 as uuid4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext)

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuid4(),
            name,
            cost: parseInt(cost),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        type="text"
                        id="name"
                        required
                        className='form-control'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        value={cost}
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        onChange={(e) => setCost(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm