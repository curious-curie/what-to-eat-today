import React, { Component } from 'react'
import { BeatLoader } from 'react-spinners'
import styled from 'styled-components';

const LoaderWrapper = styled.div`
margin: 50px
`;
export default class Loader extends Component {

   
    render() {
        return (
            <LoaderWrapper>
                <BeatLoader 
                      sizeUnit={"px"}
                      size={10}
                      color={'coral'}
                      loading={true}
                 />
            </LoaderWrapper>
        )
    }
}
