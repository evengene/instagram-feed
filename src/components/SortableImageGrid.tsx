import React from "react";
import '../App.css';
import {
  SortableContainer,
  SortableElement,
  SortableElementProps,
  SortEnd,
  WrappedComponent
} from 'react-sortable-hoc';
import { arrayMove } from 'react-sortable-hoc';

interface ImageType {
  media_url: string;
  caption: string;
}

interface SortableListProps {
  items: ImageType[];
}

interface ExtendedSortableElementProps extends SortableElementProps {
  value: ImageType;
}

// rewrite in TS
const SortableItem = SortableElement(( { value }: ExtendedSortableElementProps ) => <img
  src={value.media_url}
  alt={value.caption}
/>);

const SortableList = SortableContainer(( { items }: SortableListProps) => {

  return (
    <ul className="image-grid">
      {items.map(( image: any, index: any ) => (
        // @ts-ignore
        <SortableItem key={`item-${index}`} index={index} value={image} />
      ))}
    </ul>
  );
});

interface SortableItemProps {
  images: any;
  setImages: any;
}

export const SortableImageGrid = ( props: SortableItemProps ) => {
  const { images, setImages } = props;
  const onSortEnd  = ({ oldIndex, newIndex }: SortEnd) => {
    debugger;
    setImages(arrayMove(images, oldIndex, newIndex));
  };
  // @ts-ignore
  return <SortableList items={images} onSortEnd={onSortEnd} axis='xy' />;
}