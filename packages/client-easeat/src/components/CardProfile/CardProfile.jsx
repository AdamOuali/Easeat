import React, { Fragment } from 'react'
import '../../index.css'
import './CardProfile.css'

const imgTestURL =
    'https://media.istockphoto.com/id/1258733624/fr/vectoriel/plantes-et-%C3%A9pices-motif-sans-couture-gingembre-%C3%A9pinards-oignon-poivre-ail-fenouil-fond.jpg?s=612x612&w=0&k=20&c=3hzBXikx35a72UjIRh3n3gVj8KR3sPK86hBnaMy9uAQ='

const CardProfile = ({name, imageUrl }) => {
  return (
    <div
      className={"w-40 h-40 flex flex-col items-center justify-center rounded-lg shadow-lg m-4 blurredBackground"}
    >
      <img
        src={imageUrl}
        alt="Profile"
        className="w-20 h-20 rounded-full mb-2"
      />
      <h3 className="text-sm font-bold text-center">{name}</h3>
    </div>
  );
};

export default CardProfile
