import React from 'react';

interface SkillProgressProps {
    value: number;
    className?: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ value, className }) => {
    return (
        <div className={`w-full bg-zinc-600 rounded-full ${className}`}>
            <div className="bg-blue-600 rounded-full" style={{ width: `${value}%`, height: '100%' }}></div>
        </div>
    );
};

export default SkillProgress;