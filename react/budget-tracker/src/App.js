import React,{useState} from "react";
import  Container  from "react-bootstrap/Container";
import {Button,Stack} from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import ViewExpenseModal from "./components/ViewExpenseModal";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./context/BudgetContext";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";


function App() {

  const [showAddBudgetModal,SetShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal,setShowAddExpenseModal] = useState(false);
  const [addExpenseModalId,setAddExpenseModalId] = useState()
  const [viewExpenseModal,setViewExpenseModal] = useState(false);
  const [addviewexpensemodalId,setAddviewexpensemodalId] = useState();

 
  
  

  const {budgets,getBudgetExpenses} = useBudgets();

  function openAddExpenseModal(budgetId){
    setShowAddExpenseModal(true);
    setAddExpenseModalId(budgetId);
    
  }

  function viewexpensemodal(budgetId){
    setViewExpenseModal(true);
    setAddviewexpensemodalId(budgetId);
    console.log(viewExpenseModal);
}
   
  return (
   <>
    <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button onClick={() => SetShowAddBudgetModal(true)} variant="primary">Add Budget</Button>
          <Button variant="outline-primary" onClick={openAddExpenseModal}>Add Expense</Button>

        </Stack>
        
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
          gap:"1rem",
          alignItems:"flex-start"
        }}>
          
          {
            budgets.map(budget => {
                const amount = getBudgetExpenses(budget.id).reduce(
                  (total,expense) => total + expense.amount,
                  0
                )

          return (   
            <BudgetCard 
              key ={ budget.id}
              name={budget.name} 
              amount={amount} 
              max={budget.max} 
              OnAddExpenseClick ={ () => openAddExpenseModal(budget.id)}
              OnViewExpenseClick = {() => viewexpensemodal(budget.id)}
              gray>
    
              </BudgetCard>
          )
          })
          }
          <UncategorizedBudgetCard 
          OnAddExpenseClick={ () =>  openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)}
          OnViewExpenseClick = {() => setViewExpenseModal(UNCATEGORIZED_BUDGET_ID)}
          />
         
        </div>

    </Container>
    <AddBudgetModal 
    show={showAddBudgetModal} 
    handleClose={() => SetShowAddBudgetModal(false)} />

    <AddExpenseModal 
    show={showAddExpenseModal} 
    defaultBudgetId = {addExpenseModalId}
    handleClose={() => setShowAddExpenseModal(false)} />

    <ViewExpenseModal 
    show = {viewExpenseModal}
    defaultBudgetId = {addviewexpensemodalId}
    handleClose = { () => setViewExpenseModal(false)} />

   </>
  );
}

export default App;
