// src/components/TeamCard.js
import React from 'react';

const TeamCard = ({ member }) => (
    <div className="team-card">
        <img
            src={require(`../assets/images/team/${member.image}`)}
            alt={member.name}
            className="team-card-img"
            style={{ width: 100, borderRadius: '50%', marginBottom: 10 }}
        />
        <h4>{member.name}</h4>
        <p>{member.role}</p>
    </div>
);

export default TeamCard;
