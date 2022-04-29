export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      oprions: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    },
    {
      name: 'middleText',
      title: 'MiddleText',
      type: 'string',
    },
    {
      name: 'largeText',
      title: 'LargeText',
      type: 'string',
    },
  ],
};
