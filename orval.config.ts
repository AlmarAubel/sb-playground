 const config ={
  petstore: {
    output: {
      mode: 'tags-split',
      target: 'src/api/petstore.ts',
      schemas: 'src/api/model',
      client: 'vue-query',
      mock: true,
      prettier: true,

    },
    input: {
      target: './petstore.yaml',
    },
  },
};

 export default config;
