import React from 'react';

import styles from './controls.module.css';

export function ControlText({ argKey, value, dispatch }) {
  return (
    <input
      type="text"
      className={styles.textField}
      value={value}
      onChange={(event) => {
        dispatch({
          type: 'change',
          arg: argKey,
          value: event.target.value,
        });
      }}
    />
  );
}

export function ControlInlineRadio({ argKey, control, value, dispatch }) {
  const { options } = control;
  return (
    <div className={styles.radioWrapper}>
      {options.map(option => (
        <label key={option}>
          <input
            type="radio"
            className={styles.radioField}
            checked={value === option}
            value={option}
            onChange={(event) => {
              dispatch({
                type: 'change',
                arg: argKey,
                value: event.target.value,
              });
            }}
          />
          {option}
        </label>

      ))}
    </div>
  );
}

const controlsMapping = {
  text: ControlText,
  'inline-radio': ControlInlineRadio,
};

export function Control(props) {
  const { control } = props;

  const Component = controlsMapping[control.type];

  return <Component {...props} />
}
