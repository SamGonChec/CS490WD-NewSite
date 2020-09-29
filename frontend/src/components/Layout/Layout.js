import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import TabBar from '../TabBar';
import Footer from '../Footer';

// Todo change Container to be a component and not just a box.
const Container = styled.div `
position: absolute;
margin: 0 auto;
height: 100%;
width: 100%;
border-style: solid;
border-width: 1px;
border-color: yellow;
`
// todo remove border
const Wrapper = styled.div`
border-style: solid;
border-width: 1px;
border-color: green;
`
const Space = styled.div`
border-style: solid;
border-width: 1px;
border-color: blue;
`

function Layout({ children }){
  return (
    <Container>
        <Header/>
        <TabBar/>
        <Wrapper>
            <Space>
              {children}
            </Space>
        </Wrapper>
        <Footer/>
    </Container>
  );
}

export default Layout;