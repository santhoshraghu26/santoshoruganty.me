// import React, { Fragment } from 'react';
// import { SanitizedExperience } from '../../interfaces/sanitized-config';
// // import { skeleton } from '../../utils';


// const ExperienceCard = ({
//   experiences,
//   loading,
// }: {
//   experiences: SanitizedExperience[];
//   loading: boolean;
// }) => {
//   const renderSkeleton = () => {
//     return Array.from({ length: 2 }).map((_, i) => (
//       <div key={i} className="card bg-base-100 shadow-md p-4 animate-pulse">
//         <div className="flex items-center space-x-4">
//           <div className="bg-base-300 h-12 w-12 rounded-full"></div>
//           <div className="flex-1">
//             <div className="h-4 bg-base-300 rounded w-3/4 mb-2"></div>
//             <div className="h-3 bg-base-300 rounded w-1/2"></div>
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="card shadow-lg compact bg-base-100">
//       <div className="card-body">
//         <h5 className="card-title text-base-content opacity-70">Experience</h5>
//         <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-2">
//           {loading
//             ? renderSkeleton()
//             : experiences.map((exp, idx) => (
//                 <div key={idx} className="card bg-base-100 shadow-md p-4">
//                   <div className="flex items-center space-x-4">
//                     {exp.logo && (
//                       <img
//                         src={exp.logo}
//                         alt={exp.company}
//                         className="h-12 w-12 object-contain rounded-full"
//                       />
//                     )}
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-base">
//                         {exp.position}
//                       </h3>
//                       <p className="text-sm text-base-content opacity-60">
//                         {exp.company}
//                       </p>
//                       <p className="text-sm text-base-content opacity-40">
//                         {exp.from} – {exp.to}
//                       </p>
//                       {exp.companyLink && (
//                         <a
//                           href={exp.companyLink}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="text-primary text-sm font-medium underline mt-1 inline-block"
//                         >
//                           See More →
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;
import React from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    return Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="card bg-base-100 shadow-md p-5 animate-pulse">
        <div className="flex justify-center mb-4">
          <div className="bg-base-300 h-16 w-16 rounded-full"></div>
        </div>
        <div className="h-4 bg-base-300 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-3 bg-base-300 rounded w-1/2 mx-auto mb-2"></div>
        <div className="h-3 bg-base-300 rounded w-2/3 mx-auto"></div>
      </div>
    ));
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <h5 className="card-title text-base-content opacity-70 mb-4">Experience</h5>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? renderSkeleton()
            : experiences.map((exp, idx) => (
                <div key={idx} className="card bg-base-100 shadow-md p-5 hover:shadow-lg transition-all">
                  <div className="flex flex-col items-center text-center">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-16 w-16 object-contain rounded-full mb-3"
                      />
                    )}
                    <h3 className="font-semibold text-lg">{exp.position}</h3>
                    <p className="text-sm text-base-content opacity-70 mt-1">{exp.company}</p>
                    <p className="text-sm text-base-content opacity-50 mt-1">{exp.from} – {exp.to}</p>
                    {exp.companyLink && (
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary text-sm font-medium underline mt-2"
                      >
                        See More →
                      </a>
                    )}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
