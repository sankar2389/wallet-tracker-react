import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [income, setIncome] = useState('');
    const [expense, setExpense] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setDate(localStorage.getItem('Date'));
        setDescription(localStorage.getItem('Description'));
        setIncome(localStorage.getItem('Income'));
        setExpense(localStorage.getItem('Expense'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://tx6ld3.sse.codesandbox.io/wallet/${id}`, {
            date,
            description,
            income,
            expense,
            amount:(income-expense).toString()
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Date</label>
                    <input type="date" placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Income</label>
                    <input type="number" placeholder='Income' value={income} onChange={(e) => setIncome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Expense</label>
                    <input type="number" placeholder='Expense' value={expense} onChange={(e) => setExpense(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
