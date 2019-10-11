import React from "react"
import styled from "styled-components"
import axios from "axios"
import { Headerh1, Headerh3, CardDiv, Para } from "../TagStyled/TagsStyled"

// const Carddiv = styled.div `

    
// `

export default function Card(props) {

    return (
        <CardDiv key = {props.created}>
            <Headerh1> {props.name}</Headerh1>
            <Headerh3>About The Character : </Headerh3>
            <Para>Height: {props.height}</Para>
            <Para>Mass: {props.mass}</Para>
            <Para>Eye Color: {props.eye_color}</Para>
        </CardDiv>
    )
}
