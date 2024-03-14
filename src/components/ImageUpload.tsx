import React from "react";

export const ImageUpload = (props: any) => {

  const { onUpload } = props;

  const onUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      onUpload(file);
    }
  }

  return (
    <input type="file" onChange={onUploadHandler} />
  )

}