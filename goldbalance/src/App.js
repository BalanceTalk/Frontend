import Header from "./components/Header";
import BalanceList from "./components/BalanceList";
import styled from '@emotion/styled';

const Form = styled.form`
  width: 400px;
  margin: 0 auto;
  height: 300px;
  background-color: #EBEBF6;
`
const ListForm = styled.form`
  width: 90%;
  height: 65%;
  display: flex;
  justify-content: space-around; 
  align-content: space-between;
  margin: auto auto;
  //background-color: darkgray;
`
function App() {
  return (
    <div>
      <Form>
        <Header title="제목이엄청나게 길 경우"/>
        <ListForm>
          <BalanceList />
        </ListForm>
      </Form>

      {/* <Form>
        <Header title="짧"/>
        <ListForm>
          <BalanceList />
        </ListForm>
      </Form> */}
    </div>
    
    
  )

}

export default App;
