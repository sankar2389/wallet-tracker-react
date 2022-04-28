import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://tx6ld3.sse.codesandbox.io/wallet`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, date, description, income, expense, amount } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Date', date);
        localStorage.setItem('Description', description);
        localStorage.setItem('Income', income);
        localStorage.setItem('Expense', expense);
        localStorage.setItem('Amount', amount);
    }

    const getData = () => {
        axios.get(`https://tx6ld3.sse.codesandbox.io/wallet`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://tx6ld3.sse.codesandbox.io/wallet/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>S.No.</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Income</Table.HeaderCell>
                        <Table.HeaderCell>Expense</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data,index) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{index + 1}</Table.Cell>
                                <Table.Cell>{data.date}</Table.Cell>
                                <Table.Cell>{data.description}</Table.Cell>
                                <Table.Cell>{data.income}</Table.Cell>
                                <Table.Cell>{data.expense}</Table.Cell>
                                <Table.Cell>{data.amount}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
