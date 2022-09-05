import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import md5 from "md5"

import { ICharacters } from "./ICharacters";

const publicKey = 'd398715919384ff063142751fba9c8f9'
const privateKey = '590f8988525b3af8a590d38a84c2d1ecdf26537d'

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)
const baseUrl = 'http://gateway.marvel.com/v1/public/';



export const ts = '?ts=' + time + '&apikey=' + publicKey + '&hash=' + hash

export function Characters() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getCharacters()
    }, [])

    function getCharacters() {
        fetch(baseUrl + 'characters' + ts)
            .then(response => response.json())
            .then(result => {
                const charactersResult = (result.data.results);
                setCharacters(charactersResult)

            })
            .catch(function (err) {
                console.error(err);
            })
    }
    return (
        <>
            {characters.map((characters: ICharacters) => {
                console.log(characters)
                return (
                    <div key={characters.id}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Img src={characters.thumbnail.path + '.' + characters.thumbnail.extension} />
                            <Card.Body>
                                <Card.Title>{characters.name}</Card.Title>
                                <Card.Text>
                                    {characters.description}
                                </Card.Text>
                                <Button variant="primary">Veja mais</Button>
                            </Card.Body>
                        </Card>
                        <div>

                        </div>

                    </div>
                )
            })}
        </>
    )
}
