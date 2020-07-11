import React from 'react';

// komponen dimana hasil pencarian ditampilkan

function ResultCard(props){
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <img src={props.team.strTeamBadge} className="w-auto m-auto h-64 bg-blue bg-cover" alt="Team Badge" />
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    {props.team.strTeam}
                </h3>
                <p>
                    {props.team.strDescriptionEN}
                </p>
            </div>
        </div>
    );
}

export default ResultCard;