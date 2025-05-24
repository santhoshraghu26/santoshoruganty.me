import React from 'react';
import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  year,
  name,
  body,
  link,
  logo,
}: {
  year?: React.ReactNode;
  name?: React.ReactNode;
  body?: React.ReactNode;
  link?: string;
  logo?: string;
}) => (
  <li className="mb-8 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>

    <div className="my-0.5 text-xs">{year}</div>

    <div className="font-medium mb-1">
      <a href={link} target="_blank" rel="noreferrer" className="text-lg">
        {name}
      </a>
    </div>

    <h3 className="mb-3 font-normal">{body}</h3>

    {logo && (
      <div className="mt-2">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            src={logo}
            alt="Award Image"
            className="w-full max-w-xs rounded shadow-lg"
          />
        </a>
      </div>
    )}
  </li>
);

const CertificationCard = ({
  certifications,
  loading,
  title = 'Certification',
}: {
  certifications: SanitizedCertification[];
  loading: boolean;
  title?: string;
}) => {
  const renderSkeleton = () => {
    return Array.from({ length: 2 }, (_, index) => (
      <ListItem
        key={index}
        year={skeleton({ widthCls: 'w-5/12', heightCls: 'h-4' })}
        name={skeleton({ widthCls: 'w-6/12', heightCls: 'h-4', className: 'my-1.5' })}
        body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
      />
    ));
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">{title}</span>
            )}
          </h5>
        </div>

        <div className="text-base-content text-opacity-60">
          {loading ? (
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              {renderSkeleton()}
            </ol>
          ) : certifications.length === 0 ? (
            <p className="text-sm text-center text-base-content text-opacity-60 my-6">
              No {title.toLowerCase()} to show.
            </p>
          ) : (
            <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
              {certifications.map((cert, index) => (
                <ListItem
                  key={index}
                  year={cert.year}
                  name={cert.name}
                  body={cert.body}
                  link={cert.link}
                  logo={cert.logo}
                />
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
