import React, {useState} from 'react';
import Loader from '../Components/Loader';
import ResultCard from '../Components/ResultCard';
import SearchBox from '../Components/SearchBox';
import { useAxiosGet } from '../Hooks/HttpRequest';

// Halaman home dimana kita bisa melakukan search
// Menggunakan looping tetapi buka list karena pada kasus ini lebih cocok menggunakan div

function Home() {
    const [url, setUrl] = useState(``);

    let teams = useAxiosGet(url);

    let content = null;

    if(teams.error){
        content = <p>
            There's an error, please try again.
        </p>
    }

    if(teams.loading){
        content = <Loader />
    }

    if(teams.data){
        content = 
        teams.data.map((team) => 
            <div key={team.idTeam}>
                <ResultCard team={team} />
            </div>
        )
    }

    const onSubmit = (e) => {
        setUrl(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${e.keyword}`)
    }

    return (
        <div>
            <SearchBox onSubmit={onSubmit} />
            {content}
        </div>
    )
}

export default Home;