import Store from '@/shared/lib/store';
import { SourceState } from './types';

class SourceStore extends Store<SourceState> {
  constructor(initialState: SourceState) {
    super(initialState);
  }
}

const initialState: SourceState = {
  sources: [],
};

export const sourceStore = new SourceStore(initialState);
