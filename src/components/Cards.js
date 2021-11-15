import React, { useState } from 'react';
import uniqid from "uniqid";
import Card from "./Card";

import dobbyImg from "../images/dobby.png";
import dumbldoreImg from "../images/dumbldore.png";
import harryImg from "../images/harry.png";
import hermionyImg from "../images/hermiony.png";
import lunaImg from "../images/luna.png";
import malfoyImg from "../images/malfoy.png";
import nevilleImg from "../images/neville.png";
import ronImg from "../images/ron.png";
import snapeImg from "../images/snape.png";
import voldemortImg from "../images/voldemort.png";

import "../styles/Cards.css";

function Cards(props) {

    let objArray = [
        {
            img: dobbyImg,
            name: "Dobby",
            id: uniqid(),
            clicked: false
        },
        {
            img: dumbldoreImg,
            name: "Dumbldore",
            id: uniqid(),
            clicked: false
        }, 
        {
            img: harryImg,
            name: "Harry",
            id: uniqid(),
            clicked: false
        },
        {
            img: hermionyImg,
            name: "Hermiony",
            id: uniqid(),
            clicked: false
        },
        { 
            img: lunaImg,
            name: "Luna",
            id: uniqid(),
            clicked: false
        },
        { 
            img: malfoyImg,
            name: "Malfoy",
            id: uniqid(),
            clicked: false
        },
        { 
            img: nevilleImg,
            name: "Neville",
            id: uniqid(),
            clicked: false
        },
        {
            img: ronImg,
            name: "Ron",
            id: uniqid(),
            clicked: false
        },
        { 
            img: snapeImg,
            name: "Snape",
            id: uniqid(),
            clicked: false
        },
        { 
            img: voldemortImg,
            name: "Voldemort",
            id: uniqid(),
            clicked: false
        }];

    const [cardArr, setCardArr] = useState(objArray);

    const shuffleArray = (arr) => {
        let indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let newArr = [];
        while (indexArr.length > 0) {
            let index = Math.floor(Math.random() * indexArr.length)
            let value = indexArr.at(index)
            newArr.push(arr[value])
            indexArr.splice(index, 1)
        }
        return newArr;

    }

    const resetArr = (arr) => {
        let newArr = [];
        arr.map(obj => {
            let newObj = {
                ...obj,
                clicked: false
            };
            newArr.push(newObj);
        })
        let shuffledArr = shuffleArray(newArr)
        setCardArr(shuffledArr)
    }

    const updateArr = (id, obj) => {
        let newArr = cardArr.filter(el => el.id !== id)
            newArr.push({
                img: obj.img,
                name: obj.name,
                id: obj.id,
                clicked: true
            });
            let newArrShuffled = shuffleArray(newArr)
            setCardArr(newArrShuffled)
    }

    const checkClick = (ev) => {
        let id = ev.target.id;
        let obj = cardArr.find(el => el.id === id)
        if (!obj.clicked) {
            updateArr(id, obj)
            props.updateScore()
        } 
        else {
            resetArr(cardArr)
            props.resetScore()
        }
    }

    return (
        <div className="cards">
            {cardArr.map(el => 
                <Card 
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    id={el.id}
                    onClick={checkClick}/>
            )}
        </div>
    );
}

export default Cards;