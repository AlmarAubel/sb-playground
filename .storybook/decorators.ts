import IsFetching from '../src/stories/component/IsFetching.vue'

export const IsFetching = (story: any) => ({
  components: { story, IsFetching },
  template: '<IsFetching><story /></IsFetching>',
});
