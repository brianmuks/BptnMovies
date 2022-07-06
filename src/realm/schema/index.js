export const mediaSchema = {
  name: 'media',
  properties: {
    _id: 'objectId?',
    url: 'string',
    blob: 'string',
    updatedAt: 'date?',
    updated_by: 'objectId?',
  },
  primaryKey: '_id',
};
