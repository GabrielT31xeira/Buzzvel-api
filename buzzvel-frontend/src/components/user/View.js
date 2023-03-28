import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function View() {
    const params = useParams();
    
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8083/api/user/${params.name}`)
            .then((response) => {
                console.log(response.data.user)
                setAPIData(response.data.user);
            })
    }, [])
    
    return (
        <raiz>
            <p class="ml-8 mt-4 text-xl">Hello, my name is {APIData.name}</p>
            <p class="mt-4 ml-8 text-3xl font-bold">My history</p>
            <p class="ml-8 mt-4 text-xl">Lorem ipsum dolor sit amet, consectetur</p>
            <div class="flex flex-row">
                <div class="mt-7 border border-gray-500 px-16 py-4 ml-8 rounded-lg">
                    <a href={APIData.github}>Github</a>
                </div>

                <div class="mt-7 border border-gray-500 px-16 py-4 ml-8 rounded-lg">
                    <a href={APIData.linkedin}>LinkedIn</a>
                </div>
            </div>
        </raiz>
    );    
}

export default View;