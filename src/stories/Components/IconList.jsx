import React from 'react';
import { IconCard } from './IconCard';
import './IconList.css';

const icons = [
  {
    src: 'shield.png',
    title: 'Background Checks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    src: 'payment.png',
    title: 'Payment Method',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    src: 'bell.png',
    title: 'Updates',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
  {
    src: 'document.png',
    title: 'Documentation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  },
];

export const IconList = () => {
  return (
    <div className="icon_list">
      {icons.map(icon => {
        return (
          <div style={{paddingLeft: 35, paddingRight: 35, margin: 5, paddingTop: 5}}>
            <IconCard src={icon.src} title={icon.title}>
              {icon.description}
            </IconCard>
          </div>
        );
      })}
    </div>
  );
};
