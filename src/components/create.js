import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [income, setIncome] = useState('');
    const [expense, setExpense] = useState('');

    const areAllFieldsFilled = (date != "") && (description != "") && (income != "") && (expense != "");

    const postData = () => {
        axios.post(`https://tx6ld3.sse.codesandbox.io/wallet`, {
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
                    <input type="date" required="required" placeholder='Date' onChange={(e) => setDate(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' required="required" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Income</label>
                    <input type="number" required="required" placeholder='Income' onChange={(e) => setIncome(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Expense</label>
                    <input type="number" required="required" placeholder='Expense' onChange={(e) => setExpense(e.target.value)}/>
                </Form.Field>
                <Button disabled={!areAllFieldsFilled} onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
