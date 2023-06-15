import { layout } from '@/shared/ui';
import { header } from '@/widgets/header';
import { footer } from '@/widgets/footer';

export const baseLayout = (content: HTMLElement): HTMLElement => {
  return layout(header(), content, footer());
};
