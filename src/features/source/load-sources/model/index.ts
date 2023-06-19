import { API } from '@/shared/api';
import { SourcesDto, sourceStore } from '@/entities/source';
import { USE_FAKE_DATA } from '@/shared/config';

import fakeData from './fake-data.json';

export const loadSources = async () => {
  // Example with a fake data
  if (USE_FAKE_DATA === true) {
    sourceStore.setState({
      sources: fakeData.sources,
    });

    return;
  }

  const res = (await API.sources.getSourcesList()) as SourcesDto;

  if (res.status && res.status === 'ok') {
    sourceStore.setState({
      sources: res.sources,
    });
  }
};
