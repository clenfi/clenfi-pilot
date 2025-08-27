import React from 'react';
import './Lanyard3D.css';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  { name: "Alex Chen", role: "Lead Developer", initials: "AC" },
  { name: "Sarah Kim", role: "Protocol Designer", initials: "SK" },
  { name: "Marcus Rodriguez", role: "Security Architect", initials: "MR" },
  { name: "Dr. Emily Zhang", role: "ZK-Proof Specialist", initials: "EZ" }
];

function LanyardCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <div 
      className="lanyard-card-container"
      style={{ 
        animationDelay: `${delay}s`,
        '--random-x': `${(Math.random() - 0.5) * 20}px`,
        '--random-y': `${(Math.random() - 0.5) * 10}px`
      } as React.CSSProperties}
    >
      {/* Lanyard String */}
      <div className="lanyard-string"></div>
      
      {/* ID Card */}
      <div className="lanyard-card">
        <div className="lanyard-hole"></div>
        
        <div className="card-content">
          {/* Profile Circle */}
          <div className="profile-circle">
            <span className="initials">{member.initials}</span>
          </div>
          
          {/* Member Info */}
          <div className="member-info">
            <h4 className="member-name">{member.name}</h4>
            <p className="member-role">{member.role}</p>
          </div>
          
          {/* CLenFi Badge */}
          <div className="clenfi-badge">
            CLenFi Team
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Lanyard3D() {
  return (
    <div className="lanyard-wrapper">
      <div className="lanyard-container">
        <div className="attachment-point"></div>
        
        <div className="cards-grid">
          {teamMembers.map((member, index) => (
            <LanyardCard 
              key={member.name} 
              member={member} 
              delay={index * 0.5} 
            />
          ))}
        </div>
        
        <div className="floating-particles">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.8}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}