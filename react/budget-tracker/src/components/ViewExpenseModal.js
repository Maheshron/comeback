import React,{useState} from 'react';
import { Modal,Stack ,Button} from 'react-bootstrap';
import {UNCATEGORIZED_BUDGET_ID, useBudgets} from "../context/BudgetContext";
import { currencyFormatter } from '../utils';


function ViewExpenseModal({show,defaultBudgetId,handleClose}) {
    const {getBudgetExpenses ,budgets,deleteBudget,deleteExpense}  = useBudgets(); 
    const expenses = getBudgetExpenses(defaultBudgetId);

    const budget = 
    UNCATEGORIZED_BUDGET_ID === defaultBudgetId
    ? { name:"UnCategorized", id:UNCATEGORIZED_BUDGET_ID }
    : budgets.find(b => b.id === defaultBudgetId);
    console.log(budget);
    return (
    <>
        <Modal show={show}>
            <Modal.Header closeButton onClick={() => handleClose()}></Modal.Header>
            <Modal.Title>
                <Stack direction="horizontal" gap="2">
                   <div> Expenses - { budget?.name } </div>

                    {defaultBudgetId !== UNCATEGORIZED_BUDGET_ID &&(
                        <Button onClick={ () => {
                            deleteBudget(defaultBudgetId) 
                            handleClose()
                        }} 
                         variant="outline-danger"> Delete
                         </Button>
                    )}
                </Stack>
                </Modal.Title>
            <Modal.Body>
                            <Stack direction="vertical" gap="3">
                                {expenses.map(expense =>(
                            <Stack direction="horizontal" gap="2" key={expense.id}>
                                <div className="me-auto fs-4">
                                    {expense.description}
                                </div>
                                <div className="fs-5">{currencyFormatter.format(expense.amount)}</div>
                                <Button onClick={() => deleteExpense(expense.id)} size="sm" variant="outline-danger">&times;</Button>
                            </Stack>

                                ))
                                }
                            </Stack>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default ViewExpenseModal