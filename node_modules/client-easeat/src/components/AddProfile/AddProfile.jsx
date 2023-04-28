import React, { useState } from "react";
import gastronomy from '../../assets/gastronomy.png'
import Meat from '../../assets/meat.png'
import NoTimeToCook from '../../assets/no_time_cook.png'
import RegularTimeToCook from '../../assets/regular_time_cook.png'
import TimeToCook from '../../assets/time_cook.png'
import Vegetables from '../../assets/vegetables.png'
import { NavLink } from 'react-router-dom'
import '../../components/AddProfile/AddProfile.css';
import '../../index.css'
import SideBar from '../../components/Sidebar/Sidebar.jsx';

function profileForm() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isCheckedTime, setIsCheckedTime] = useState(false);
  const [isCheckedRegular, setIsCheckedRegular] = useState(false);
  const [isCheckedNoTime, setIsCheckedNoTime] = useState(false);
  const [isCheckedVege, setIsCheckedVege] = useState(false);
  const [isCheckedMeat, setIsCheckedMeat] = useState(false);
  const [isCheckedGastro, setIsCheckedGastro] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Nom : ${lastName}`);
    console.log(`Prénom : ${firstName}`);
    console.log(`Case cochée : ${isCheckedTime}`);
    console.log(`Case cochée : ${isCheckedRegular}`);
    console.log(`Case cochée : ${isCheckedNoTime}`);
    console.log(`Case cochée : ${isCheckedVege}`);
    console.log(`Case cochée : ${isCheckedMeat}`);
    console.log(`Case cochée : ${isCheckedGastro}`);
  };

  return (
    <>
         <SideBar />
         <div className="flex col-span-3 h-screen bg-white shadow">
            {/* DIV DU DESSOUS A METTRE POUR ETRE DANS LE BODY */}
                <div className="container mx-auto mt-12 p-8">
          <form onSubmit={handleSubmit}>
            
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Nom </label>
              <input className="px-3 py-2 border border-gray-800 rounded-md focus:border-indigo-500 " type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">Prénom </label>
              <input className="px-3 py-2 border border-gray-800 rounded-md focus:border-indigo-500" type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            </div>
                    
              {/* Temps pour cuisiner */}
            <div>
              <legend className="block text-gray-700 text-sm font-bold mb-2" >Avez-vous du temps pour cuisiner ?</legend>
                <input type="checkbox" id="checkbox1" checked={isCheckedTime} onChange={(event) => setIsCheckedTime(event.target.checked)} />
                <label htmlFor="checkbox1">
                  <img src={TimeToCook} alt="Time to cook" />
                </label>
                  <input type="checkbox" id="checkbox2" checked={isCheckedRegular} onChange={(event) => setIsCheckedRegular(event.target.checked)} />
                  <label htmlFor="checkbox2">
                    <img src={RegularTimeToCook} alt="Regular time to cook" />
                  </label>
                  <input type="checkbox" id="checkbox3" checked={isCheckedNoTime} onChange={(event) => setIsCheckedNoTime(event.target.checked)} />
                  <label htmlFor="checkbox3">
                    <img src={NoTimeToCook} alt="No time to cook" />
                  </label>
            </div>
              
            {/* Type d'alimentation */}
            <div>
              <legend className="block text-gray-700 text-sm font-bold mb-2" >Type d'alimentation</legend>
              <input type="checkbox" id="checkbox4" checked={isCheckedVege} onChange={(event) => setIsCheckedVege(event.target.checked)} />
              <label htmlFor="checkbox4">
                <img src={Vegetables} alt="Vegetarien" />
              </label>
              <input type="checkbox" id="checkbox5" checked={isCheckedMeat} onChange={(event) => setIsCheckedMeat(event.target.checked)} />
              <label htmlFor="checkbox5">
                <img src={Meat} alt="Omnivore" />
              </label>
              <input type="checkbox" id="checkbox6" checked={isCheckedGastro} onChange={(event) => setIsCheckedGastro(event.target.checked)} />
              <label htmlFor="checkbox6">
                <img src={gastronomy} alt="Gastronomie" />
              </label>
            </div>

            <button className="mt-4" type="submit">Envoyer</button>
            
          </form>
          </div>
          </div>
    </>
  );
}

export default profileForm;