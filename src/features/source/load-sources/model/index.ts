import { API } from '@/shared/api';
import { SourcesDto, sourceStore } from '@/entities/source';

export const loadSources = async () => {
  const res = (await API.sources.getSourcesList()) as SourcesDto;

  if (res.status && res.status === 'ok') {
    sourceStore.setState({
      sources: res.sources,
    });
  }
};
