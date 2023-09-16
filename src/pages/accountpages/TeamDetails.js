import React from 'react';

const TeamDetails = ({ selectedTeam }) => {
  if (!selectedTeam) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{selectedTeam.name} Details</h1>
      <img src={selectedTeam.logo} alt={selectedTeam.name} />
      <p>Founded: {selectedTeam.founded}</p>
      <p>Stadium: {selectedTeam.stadium}</p>
    </div>
  );
};

export default TeamDetails;
