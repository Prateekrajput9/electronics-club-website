import { Mail, Github, Linkedin } from "lucide-react";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="relative group">
      <div className="h-full overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm border border-gray-800 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyan-500/20">
        <div className="p-5 flex flex-col h-full">
          <div className="flex-1">
            {/* Image */}
            <div className="w-28 h-28 mx-auto mb-4 overflow-hidden rounded-full border-2 border-cyan-400">
              <img
                src={`/member_images/${member.name}.jpeg`}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Name and Position */}
            <h3 className="text-xl font-bold text-white text-center mb-1">
              {member.name}
            </h3>
            <p className="text-cyan-400 text-center font-medium mb-3">
              {member.position}
            </p>

            {member.department && (
              <p className="text-gray-300 text-sm text-center mb-4">
                {member.department}
              </p>
            )}
            
            {member.tagline && (
              <p className="text-gray-400 italic text-sm text-center mb-4">
                "{member.tagline.toUpperCase()}"
              </p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-auto">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail size={20} />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`GitHub profile of ${member.name}`}
              >
                <Github size={20} />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`LinkedIn profile of ${member.name}`}
              >
                <Linkedin size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;