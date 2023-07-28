
import ActorCard from './ActorCard';
const ActorsGrid = ({ actors}) => {
    return(<div>
     {actors.map(data => (
        <ActorCard key={data.person.id} name={data.person.name} country={data.person.country ? data.person.country.name : null} 
        birthday= {data.person.birthday}
           deathday={data.person.deathday}
           image={
            data.person.image ? data.person.image.medium: '/noimage.png'} />

    ))}
</div>
);
     }
export default ActorsGrid;