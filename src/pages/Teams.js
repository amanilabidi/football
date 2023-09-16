import React, { useState } from 'react';
import ClubAfricain from '../images/ca.png';
import esperence from '../images/est.png';
import etoile from '../images/ess.png';
import sfax from '../images/css.png';
import usmo from '../images/usmo.png';
import usbg from '../images/usbg.png';
import asm from '../images/asm.jpg';
import ob from '../images/ob.jpg';
import cab from '../images/cab.jpg';
import esm from '../images/esm.png';
import gafsa from '../images/gafsa.png';
import st from '../images/st.png';
import ust from '../images/ust.png';
import soliman from '../images/soliman.png';
import jsk from '../images/jsk.png';
import ASR from '../images/asr.jpg';
import esh from '../images/esh.png';
import csh from '../images/csh.jfif';
import esz from '../images/esz.png';
import sg from '../images/sg.jfif';
import asg from '../images/asg.png';
const Teams = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState(null);

    const choices = ['2021/2022', '2020/2021', '2019/2020','2018/2019'];
    const handleChoiceClick = (choice) => {
        if (selectedChoice === choice) {
            setSelectedChoice(null);
        } else {
            setSelectedChoice(choice);
        }
        setIsOpen(false);
    };
    const renderCodeBlock = () => {
         if (selectedChoice === '2021/2022') {
            return (
                <div>
                    <code>
                    <div className='teams-page'>
                            <div className='teams'>
                                <div>
                                    <h3>Professional League 1</h3>
                                    <h4 className='prof-txt'>2021/2022</h4>
                                </div>
                                <div id='myteams'>
                                    <div className='teams1'>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ClubAfricain} alt="CA" className='team-pic' />
                                            </div>
                                            <h4>Club Africain</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esperence} alt="EST" className='team-pic' />
                                            </div>
                                            <h4>Espérance Tunis</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={etoile} alt="ESS" className='team-pic' />
                                            </div>
                                            <h4>Etoile Sahel</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={sfax} alt="CSS" className='team-pic' />
                                            </div>
                                            <h4>CS Sfaxien</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={usmo} alt="usmo" className='team-pic' />
                                            </div>
                                            <h4>Monastir</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={usbg} alt="usbg" className='team-pic' />
                                            </div>
                                            <h4>Ben Guerdane</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esh} alt="esh" className='team-pic' />
                                            </div>
                                            <h4>ES HAMMAM-SOUSSE</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esz} alt="esz" className='team-pic' />
                                            </div>
                                            <h4>ES ZARZIS</h4>
                                        </div>
                                    </div>
                                    <div className='teams2'>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ob} alt="CSS" className='team-pic' />
                                            </div>
                                            <h4>Olympique Beja</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esm} alt="esm" className='team-pic' />
                                            </div>
                                            <h4>Metlaoui</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ASR} alt="gafsa" className='team-pic' />
                                            </div>
                                            <h4>AS REJICHE</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={cab} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>Bizertin</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={st} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>Stade Tunisien</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ust} alt="ust" className='team-pic' />
                                            </div>
                                            <h4>US Tataouine</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={soliman} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>soliman</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={csh} alt="csh" className='team-pic' />
                                            </div>
                                            <h4>CS HAMMAM LIF</h4>
                                        </div>
                                        
                                    </div>

                                </div>

                            </div>
                        </div>
                    </code>
                </div>
            );
        } else if (selectedChoice === '2020/2021') {
            return (
                <div>
                    <code>
                        <div className='teams-page'>
                            <div className='teams'>
                                <div>
                                    <h3>Professional League 1</h3>
                                    <h4 className='prof-txt'>2020/2021</h4>
                                </div>
                                <div id='myteams'>
                                    <div className='teams1'>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ClubAfricain} alt="CA" className='team-pic' />
                                            </div>
                                            <h4>Club Africain</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esperence} alt="EST" className='team-pic' />
                                            </div>
                                            <h4>Espérance Tunis</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={etoile} alt="ESS" className='team-pic' />
                                            </div>
                                            <h4>Etoile Sahel</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={sfax} alt="CSS" className='team-pic' />
                                            </div>
                                            <h4>CS Sfaxien</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={usmo} alt="usmo" className='team-pic' />
                                            </div>
                                            <h4>Monastir</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={usbg} alt="usbg" className='team-pic' />
                                            </div>
                                            <h4>Ben Guerdane</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={jsk} alt="jsk" className='team-pic' />
                                            </div>
                                            <h4>JS Kairouanaise</h4>
                                        </div>
                                    </div>
                                    <div className='teams2'>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ob} alt="CSS" className='team-pic' />
                                            </div>
                                            <h4>Olympique Beja</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esm} alt="esm" className='team-pic' />
                                            </div>
                                            <h4>Metlaoui</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ASR} alt="gafsa" className='team-pic' />
                                            </div>
                                            <h4>AS REJICHE</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={cab} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>Bizertin</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={st} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>Stade Tunisien</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ust} alt="ust" className='team-pic' />
                                            </div>
                                            <h4>US Tataouine</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={soliman} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>soliman</h4>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </code>
                </div>
            );
        } else if (selectedChoice === '2019/2020') {
            return (
                <div>
                    <code>
                    <div className='teams-page'>
                            <div className='teams'>
                                <div>
                                    <h3>Professional League 1</h3>
                                    <h4 className='prof-txt'>2020/2021</h4>
                                </div>
                                <div id='myteams'>
                                    <div className='teams1'>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ClubAfricain} alt="CA" className='team-pic' />
                                            </div>
                                            <h4>Club Africain</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esperence} alt="EST" className='team-pic' />
                                            </div>
                                            <h4>Espérance Tunis</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={etoile} alt="ESS" className='team-pic' />
                                            </div>
                                            <h4>Etoile Sahel</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={sfax} alt="CSS" className='team-pic' />
                                            </div>
                                            <h4>CS Sfaxien</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={usmo} alt="usmo" className='team-pic' />
                                            </div>
                                            <h4>Monastir</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={usbg} alt="usbg" className='team-pic' />
                                            </div>
                                            <h4>Ben Guerdane</h4>
                                        </div>
                                        
                                    </div>
                                    <div className='teams2'>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esm} alt="esm" className='team-pic' />
                                            </div>
                                            <h4>Metlaoui</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={cab} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>Bizertin</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={jsk} alt="jsk" className='team-pic' />
                                            </div>
                                            <h4>JS Kairouanaise</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={st} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>Stade Tunisien</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ust} alt="ust" className='team-pic' />
                                            </div>
                                            <h4>US Tataouine</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={soliman} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>soliman</h4>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </code>
                </div>
            );
        }
        else if (selectedChoice === '2018/2019') {
            return (
                <div>
                    <code>
                    <div className='teams-page'>
                            <div className='teams'>
                                <div>
                                    <h3>Professional League 1</h3>
                                    <h4 className='prof-txt'>2018/2019</h4>
                                </div>
                                <div id='myteams'>
                                    <div className='teams1'>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ClubAfricain} alt="CA" className='team-pic' />
                                            </div>
                                            <h4>Club Africain</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esperence} alt="EST" className='team-pic' />
                                            </div>
                                            <h4>Espérance Tunis</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={etoile} alt="ESS" className='team-pic' />
                                            </div>
                                            <h4>Etoile Sahel</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={sfax} alt="CSS" className='team-pic' />
                                            </div>
                                            <h4>CS Sfaxien</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={usmo} alt="usmo" className='team-pic' />
                                            </div>
                                            <h4>Monastir</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={usbg} alt="usbg" className='team-pic' />
                                            </div>
                                            <h4>Ben Guerdane</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={sg} alt="sg" className='team-pic' />
                                            </div>
                                            <h4>Stade Gabesien</h4>
                                        </div>
                                    </div>
                                    <div className='teams2'>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={esm} alt="esm" className='team-pic' />
                                            </div>
                                            <h4>Metlaoui</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={cab} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>Bizertin</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={jsk} alt="jsk" className='team-pic' />
                                            </div>
                                            <h4>JS Kairouanaise</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={st} alt="CAB" className='team-pic' />
                                            </div>
                                            <h4>Stade Tunisien</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={ust} alt="ust" className='team-pic' />
                                            </div>
                                            <h4>US Tataouine</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={asg} alt="asg" className='team-pic' />
                                            </div>
                                            <h4>AS Gabès</h4>
                                        </div>
                                        <div className='team'>
                                            <div className='flag-team'>
                                                <img src={csh} alt="csh" className='team-pic' />
                                            </div>
                                            <h4>CS Hammem Lif</h4>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </code>
                </div>
            );
        }
    };
    return (
        <div className='teams-container'>
            <div className='teams-page'>
                <div className='teams'>
                    <div>
                        <h3>Professional League 1</h3>
                        <h4 className='prof-txt'>2023/2024</h4>
                    </div>
                    <div id='myteams'>
                        <div className='teams1'>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={ClubAfricain} alt="CA" className='team-pic' />
                                </div>
                                <h4>Club Africain</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={esperence} alt="EST" className='team-pic' />
                                </div>
                                <h4>Espérance Tunis</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={etoile} alt="ESS" className='team-pic' />
                                </div>
                                <h4>Etoile Sahel</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={sfax} alt="CSS" className='team-pic' />
                                </div>
                                <h4>CS Sfaxien</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={usmo} alt="usmo" className='team-pic' />
                                </div>
                                <h4>Monastir</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={usbg} alt="usbg" className='team-pic' />
                                </div>
                                <h4>Ben Guerdane</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={asm} alt="ASM" className='team-pic' />
                                </div>
                                <h4>AS Marsa</h4>
                            </div>
                        </div>
                        <div className='teams2'>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={ob} alt="CSS" className='team-pic' />
                                </div>
                                <h4>Olympique Beja</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={esm} alt="esm" className='team-pic' />
                                </div>
                                <h4>Metlaoui</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={gafsa} alt="gafsa" className='team-pic' />
                                </div>
                                <h4>Gafsa</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={cab} alt="CAB" className='team-pic' />
                                </div>
                                <h4>Bizertin</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={st} alt="CAB" className='team-pic' />
                                </div>
                                <h4>Stade Tunisien</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={ust} alt="ust" className='team-pic' />
                                </div>
                                <h4>US Tataouine</h4>
                            </div>
                            <div className='team'>
                                <div className='flag-team'>
                                    <img src={soliman} alt="CAB" className='team-pic' />
                                </div>
                                <h4>soliman</h4>
                            </div>
                        </div>

                    </div>
                    <div className="dropdown-container">
                        <button className="btn" onClick={() => setIsOpen(!isOpen)}>
                            {selectedChoice || 'Select The Year'}
                        </button>
                        {isOpen && (
                            <div className="choices-container">
                                {choices.map((choice, index) => (
                                    <button
                                        key={index}
                                        className="choice-button"
                                        onClick={() => handleChoiceClick(choice)}
                                    >
                                        {choice}
                                    </button>
                                ))}
                            </div>
                        )}
                        {selectedChoice && (
                            <div className="selected-choice-content">
                                {renderCodeBlock()}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Teams;