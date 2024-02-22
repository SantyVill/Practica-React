import React,{useState} from 'react';

export const TwitterFollowCard = ({userName,name,isFollowing}) => {

    const [follow, setFollow] = useState(isFollowing);

    const alterFollow=()=>{
        setFollow(!follow);
    }

    const textBoton = follow?'Siguiendo':'Seguir';
    const classBoton= follow? 'bt-follow is-following':'bt-follow'


    return (
        <article className='tw-followCard'>
                <header>
                    <img src={`https://unavatar.io/${userName}`} alt="El avatar" className='avatar' />
                    <div className='user-info'>
                        <strong>{name}</strong>
                        <span>@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button onClick={alterFollow} className={classBoton}>
                        {textBoton}
                    </button>
                </aside>
        </article>
    );
}
