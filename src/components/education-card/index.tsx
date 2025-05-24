import React from 'react';
import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  institution,
  degree,
  time,
  gpa,
  logo,
}: {
  institution?: React.ReactNode;
  degree?: React.ReactNode;
  time: React.ReactNode;
  gpa?: React.ReactNode;
  logo?: string;
}) => (
  <li className="mb-6 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>

    {/* Institution */}
    <div className="flex items-center gap-3 text-base font-semibold mb-1">
      {logo && (
        <img
          src={logo}
          alt="Institution Logo"
          className="w-7 h-7 object-contain" // Increased size
        />
      )}
      <span>{institution}</span>
    </div>

    {/* Degree */}
    <div className="text-base font-medium">{degree}</div>

    {/* Duration */}
    <div className="text-sm text-opacity-80">{time}</div>

    {/* GPA */}
    {gpa && (
      <div className="text-sm mt-1">
        <span className="font-semibold px-2 py-1 bg-accent bg-opacity-20 rounded">
          GPA: {gpa}
        </span>
      </div>
    )}
  </li>
);

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({ widthCls: 'w-5/12', heightCls: 'h-4' })}
          degree={skeleton({ widthCls: 'w-6/12', heightCls: 'h-4' })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-4' })}
          gpa={skeleton({ widthCls: 'w-3/12', heightCls: 'h-4' })}
        />
      );
    }
    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading
              ? skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
              : <span className="text-base-content opacity-70">Education</span>}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading
              ? renderSkeleton()
              : educations.map((item, index) => (
                  <ListItem
                    key={index}
                    institution={item.institution}
                    degree={item.degree}
                    time={`${item.from} – ${item.to}`}
                    gpa={item.GPA}
                    logo={item.logo}
                  />
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
