import React from 'react';
import { PanelProps } from '@grafana/data';
import { PanelOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { PanelDataErrorView } from '@grafana/runtime';
import { Styles } from '../../styles';

interface Props extends PanelProps<PanelOptions> {}



export const ImagePanel: React.FC<Props> = ({ options, data, width, height, fieldConfig, id }) => {
  
  const styles = useStyles2(Styles);

  if (data.series.length === 0) {
    return <PanelDataErrorView fieldConfig={fieldConfig} panelId={id} data={data} needsStringField />;
  }

  return (
    
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <img
        className={styles.img}
        width={width}
        height={height}
        src={options.url}
        
      >
       
      </img>

      
    </div>
  );
};
