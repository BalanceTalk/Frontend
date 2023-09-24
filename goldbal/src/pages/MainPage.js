import React, { useEffect, useState } from 'react';
import Header from '../components/ListHeader.js';
import Search from '../components/Search.js';
import ListHeader from '../components/ListHeader.js';
import BalanceList from '../components/BalanceList.js';
import styled from '@emotion/styled';

const Form = styled.form`
  width: 400px;
  margin: 0 30px 0 30px;
  margin-top: 40px;
  height: 300px;
  background-color: #EBEBF6;
  justfy-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
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
const API_URL = 'YOUR_API_ENDPOINT_HERE';

function MainPage() {

  const [balanceData, setBalanceData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setBalanceData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Header newTag={true} />
      <Search />
      <div style={
        { display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
      }
      }>
        <div>
        <Form>
          <ListHeader title="제목이엄청나게 길 경우"/>
          <ListForm>
            <BalanceList balanceData={balanceData} /> 
          </ListForm>
        </Form>
        <Form>
          <ListHeader title="제목이엄청나게 길 경우"/>
          <ListForm>
            <BalanceList />
          </ListForm>
        </Form>
        <Form>
          <ListHeader title="제목이엄청나게 길 경우"/>
          <ListForm>
            <BalanceList />
          </ListForm>
        </Form>
        </div>
        <div>
        <Form>
          <ListHeader title="제목이엄청나게 길 경우"/>
          <ListForm>
            <BalanceList />
          </ListForm>
        </Form>
        <Form>
          <ListHeader title="제목이엄청나게 길 경우"/>
          <ListForm>
            <BalanceList />
          </ListForm>
        </Form>
        <Form>
          <ListHeader title="제목이엄청나게 길 경우"/>
          <ListForm>
            <BalanceList />
          </ListForm>
        </Form>
        </div>
      </div>
    </div>
  );
}

export default MainPage;