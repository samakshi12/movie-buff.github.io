import ShowCard from './ShowCard';

const ShowsGrid = ({shows})=>{
    return(<div>
      {shows.map(data => (
        <ShowCard
         key={data.show.id}
         id={data.show.id}
         name={data.show.name}
         image = {
            data.show.image ? data.show.image.medium : '/noimage.png' }
                summary= {data.show.summary}
            />
      ))}
    </div>
    );
  };
  
  export default ShowsGrid;