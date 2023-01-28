import React ,{useRef} from 'react';
import { Modal,Form,Button } from "react-bootstrap";
import { useBudgets } from '../context/BudgetContext';

function AddBudgetModal({show,handleClose}) {

    const nameRef = useRef();
    const maxRef = useRef();
    const { addBudget } = useBudgets();

    function handleSubmit(e){
        e.preventDefault();
        addBudget({
            
            name:nameRef.current.value,
            max:parseFloat(maxRef.current.value)
        })
        handleClose();
    }

  return (
    <>
        <Modal show={show}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton onClick={() => handleClose()}>
                <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef}  required  type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control   ref={maxRef} type="number" required  min={0} step={0.1} />
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

export default AddBudgetModal