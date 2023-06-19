import Store from '@/shared/lib/store';
import { SourceState } from './types';

const initialState: SourceState = {
  sources: [],
};

export const sourceStore = new Store<SourceState>(initialState);
