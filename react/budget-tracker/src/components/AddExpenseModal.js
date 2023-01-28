import React ,{useRef} from 'react';
import { Modal,Form,Button } from "react-bootstrap";
import { useBudgets,UNCATEGORIZED_BUDGET_ID } from '../context/BudgetContext';

function AddExpenseModal({show,handleClose,defaultBudgetId}) {

    const descriptionRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();
    const { addExpense,budgets } = useBudgets();

    function handleSubmit(e){
        e.preventDefault();
        addExpense({
            description:descriptionRef.current.value,
            amount:parseFloat(amountRef.current.value),
            budgetId:budgetIdRef.current.value
        })
        handleClose();
    }

  return (
    <>
        <Modal show={show}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton onClick={() => handleClose()}>
                <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef}  required  type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control   ref={amountRef} type="number" required  min={0} step={0.1} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select
                        defaultValue = {defaultBudgetId}
                        ref={budgetIdRef}>
                            <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                            {budgets.map(budget =>(
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            )) 
                          }
                        </Form.Select>
                    </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">Add</Button>
                </div>
                </Modal.Body>
            </Form>

        </Modal>
    </>
  )
}

export default AddExpenseModal;