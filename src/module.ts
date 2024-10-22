import { PanelPlugin } from '@grafana/data';
import { PanelOptions } from './types';

import { ImagePanel } from './components/ImagePanel/ImagePanel';

export const plugin = new PanelPlugin<PanelOptions>(ImagePanel).setPanelOptions((builder) => {

  return builder
    .addTextInput({
      path: 'url',
      name: 'Image url',
      defaultValue: 'https://',
    })
});

