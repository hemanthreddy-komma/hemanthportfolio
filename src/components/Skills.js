import React from 'react'
import "../App.css"; 
import Badge from './Badge'
import {skills} from '../data/data'
const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col h-auto  p-2"
    >
      <div className="text-4xl text-white p-4 gradient-text font-bold">
        Skills
      </div>
      <div className="flex items-center justify-center flex-wrap">
        {skills.map((one) => (
          <Badge key={one.name} name={one.name} percent={one.percent} />
        ))}
      </div>
    </div>
  );
}

export default Skills