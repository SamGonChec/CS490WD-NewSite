import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import TabBar from '../TabBar';
import Footer from '../Footer';

// Todo change Container to be a component and not just a box.
const Container = styled.div `
position: absolute;
margin: auto;
height: 100%;
width: 100%;
`
const Heading = styled.div`
top: 0px;
width: 100%;
position: fixed;
background-color: #282c34;
flex-direction: column;
justify-content: center;
align-items: center;
display: flex;
border-style: solid;
border-width: 1px;
border-color: red;
`

const Space = styled.div`
postion: absolute;
padding-top: 175px;
border-style: solid;
border-width: 2px;
border-color: green;
`

function Layout({ children }){
  return (
    <Container>
      <Heading>
        <Header/>
        <TabBar/>
      </Heading>
          <Space>
            {children}
          </Space>
        <Footer/>
    </Container>
  );
}

export default Layout;