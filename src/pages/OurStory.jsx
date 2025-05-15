import React from 'react';
import teamData from '../data/teamData';
import Card from '../components/Card';

const OurStory = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">OUR TEAM</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {teamData.map((member, index) => (
          <Card key={index}>
            <img src={member.imageUrl} alt={member.name} className="w-full h-48 object-cover rounded-t-lg"/>
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-brand-primary mb-2">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurStory;  