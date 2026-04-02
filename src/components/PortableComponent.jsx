import React from 'react'
import { urlFor } from "../utils/client";

const PortableComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).url()}
        alt={value.alt || "image"}
        className="w-full rounded-2xl my-6"
      />
    ),
  },
};

export default PortableComponents;
