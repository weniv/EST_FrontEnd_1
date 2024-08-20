import React, { useState } from 'react'

const PetApp = () => {
    const petDatas = [
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
    ];

    const [pets, setPets] = useState(petDatas);

    return (
        <>
            <PetForm setPets={setPets} />
            <ul>
                {pets.map((pet) => {
                    return (
                        <Pet key={pet.id} name={pet.name} species={pet.species} age={pet.age} />
                    )
                })}
            </ul>
        </>
    );
}

const Pet = ({ name, species, age }) => {
    return <li> {name}는 {species}입니다. 그리고 {age}살입니다. </li>
}

const PetForm = ({ setPets }) => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        setPets((prePets) => { return [...prePets, { name, species, age, id: Date.now() }] });
    };


    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>새로운 애완동물을 추가하세요!</legend>
                <label>
                    이름
                    <input type="text" placeholder='이름' onChange={event => setName(event.target.value)} value={name} />
                </label><br />
                <label>
                    종류
                    <input type="text" placeholder='종류' onChange={event => setSpecies(event.target.value)} value={species} />
                </label><br />
                <label>나이
                    <input type="number" placeholder='나이' onChange={event => setAge(event.target.value)} value={age} />
                </label>
                <button>추가하기</button>
            </fieldset>
        </form>
    )
}


export default function App2() {
    return (
        <>
            <h1>애완동물 정보 리스트</h1>
            <PetApp />
        </>
    )
}
