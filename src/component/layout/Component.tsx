import { PropsData } from '../properties/PropsData';

interface ComponentProps {
  data: PropsData[];
  blockType?: 'album' | 'todos'; // Hinzufügen einer optionalen Prop, um den gewünschten Blocktyp anzugeben
}

function Component({ data, blockType }: ComponentProps) {
  let renderedItems = null;


  if (blockType === 'album') {
    renderedItems = data.map((item, index) => (
      <div key={index} className='grid-container'>
        <div>AlbumID: {item.albumId}</div>
        <div>Thumb: {item.thumbnailUrl}</div>
        <div>Url: {item.url}</div>
      </div>
    ));
  } else if (blockType === 'todos') {
    renderedItems = data.map((item, index) => (
      <div key={index} className='grid-container'>
        <div>UserId: {item.userId}</div>
        <div>ID: {item.id}</div>
        <div>Title: {item.title}</div>
      </div>
    ));
  }

  return <div>{renderedItems}</div>;
}

export default Component;