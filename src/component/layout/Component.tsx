import { PropsData } from '../properties/PropsData';

interface ComponentProps {
  data: PropsData[];
  blockType?: 'album' | 'todos'; // Hinzufügen einer optionalen Prop, um den gewünschten Blocktyp anzugeben
}

function Component({ data, blockType }: ComponentProps) {
  let renderedItems = null;

  if (blockType === 'album') {
    renderedItems = data.map((item, index) => (
      <div key={index}>
        <ul>
          <li>AlbumID: {item.albumId}</li>
          <li>Thumb: {item.thumbnailUrl}</li>
          <li>Url: {item.url}</li>
        </ul>
      </div>
    ));
  } else if (blockType === 'todos') {
    renderedItems = data.map((item, index) => (
      <div key={index}>
        <ul>
          <li>UserId: {item.userId}</li>
          <li>ID: {item.id}</li>
          <li>Title: {item.title}</li>
        </ul>
      </div>
    ));
  }

  return <div>{renderedItems}</div>;
}

export default Component;