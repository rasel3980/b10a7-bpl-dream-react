import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
const Player = ({player,handleChoosePlayer}) => {

    const {id,name,age,role,country,img,rating,profile,price,style}= player;
    return (
        <>
        <div className="card card-compact  shadow-xl">
  <figure>
    <img 
        className='w-full h-72 object-cover'
      src={img}
      alt="Shoes" />
  </figure>
  <div className='p-3'>
    <div className="grid">
        <div className='flex gap-5 items-center'>
        <img className="w-12 h-12 rounded-full object-cover" src={profile} alt="" />
        <h2 className="card-title">{name}</h2>
        </div>
        <div>
            <div className='flex justify-between items-center'>
            <h1 className='font-bold text-gray-600'><FontAwesomeIcon icon={faFlag} /> {country}</h1>
            <button className='btn text-gray-600'>{role}</button>
            </div>

        </div>
    </div>
    
    <div>
    <p className='font-bold'>Ratting:{rating}</p>
    </div>
    <div className='flex justify-between items-center'>
    <p className='font-bold'>{role}</p>
    <p className='font-bold text-gray-600'>{style}</p>
    </div>
    <div className='flex justify-between items-center'>
        <div>
        <p className='font-bold'>Price: ${price}</p>
        </div>
        <div>
            <button onClick={()=>handleChoosePlayer(player)} className='btn text-gray-600'>Choose player</button>
        </div>
    </div>
    
  </div>
</div>
        </>
        
        
    );
};

export default Player;