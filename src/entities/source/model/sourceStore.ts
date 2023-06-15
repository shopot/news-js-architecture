import { API } from '@/shared/api';
import Store from '@/shared/lib/store';
import { SourcesDto, SourceState } from './types';
import fakeData from './fake-data.json';

class SourceStore extends Store<SourceState> {
  constructor(initialState: SourceState) {
    super(initialState);
  }
  async load() {
    if (import.meta.env.PROD === false) {
      this.setState({
        sources: fakeData.sources,
      });

      return;
    }

    const res = (await API.sources.getSourcesList()) as SourcesDto;

    if (res.status && res.status === 'ok') {
      this.setState({
        sources: res.sources,
      });
    }
  }
}

const initialState: SourceState = {
  sources: [],
};

export const sourceStore = new SourceStore(initialState);
