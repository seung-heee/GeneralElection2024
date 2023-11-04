import '../css/About.css';
import Person0 from '../json/Person.json';

const Person = ({ id }) => {
    return (
        <div className="pbox">
            {Person0.map(person => (
                (person.id === id) && (
                    <div key={person.id}>
                        <img className="Pimg mx-auto" src={person.image} alt="personimg" />

                        <div className="Pinfo">
                            <img src={person.logo} alt="personimg" />
                            <div className='name'>{person.name}</div>
                        </div>

                        <div className="Pdepart">{person.department}</div>
                        <div className="Pposi">{person.position}</div>
                        <div className='Prole'>{person.role}</div>
                    </div>
                )
            ))}
        </div>
    )
}

export default Person;