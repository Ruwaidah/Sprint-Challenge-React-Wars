import React, {useState, useEffect} from "react"
import styled from "styled-components"
import axios from "axios"
import Card from "./Card"
import { ButtonNext, ButtonDiv , Buttonprevious} from "../TagStyled/TagsStyled"

const AllCard = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    align-items: start;
`


export default function CardsList() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [prepage, setPrepage] = useState()
    const [isnewpage, setIsnewpage] = useState(true)
    useEffect(() => {axios.get(`https://swapi.co/api/people/?page=${page}`)
        .then(resp => {
            console.log(resp.data)
            setData(resp.data.results)
            setIsnewpage(resp.data.next)
            setPrepage(resp.data.previous)
        })
    },[page])
    return ( 
        <>
        <AllCard>
                 {data.map((elem,index) => { return <Card  key = {index} name = {elem.name} height = {elem.height}
                                                mass = {elem.mass} eye_color ={elem.eye_color}/>
                            })
            }
               
        </AllCard>

        <ButtonDiv>
         <Buttonprevious  id = "previous" onClick ={() => { if (prepage) 
            setPage(page - 1) 
            else {
             setPage(1);
            document.getElementById('previous').style.display = 'none'}}} >previous
            </Buttonprevious>
            <ButtonNext onClick ={() => {isnewpage? setPage(page + 1) : setPage(1);
            document.getElementById('previous').style.display = 'block' } }>Next</ButtonNext> 
        </ButtonDiv>
        </>
    )
}

