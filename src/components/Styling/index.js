import React from 'react';
import styled, {css} from 'styled-components';
// COLORS SET
export const Colors = {
    blue: "#0097CE",
    lightBlue: "#BBEAFC",
    gray: "#DEDEDE",
    lightGray: "#F9F9F9",
    yellow: "#E6BA1F",
    black: "#000000",
    white: "#FFFFFF"
}
// ICONS SET
export const Pencil = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 3 6 L 3 26 L 29 26 L 29 6 Z M 5 8 L 27 8 L 27 24 L 23.59375 24 C 23.515625 23.863281 23.550781 23.675781 23.4375 23.5625 C 23.058594 23.183594 22.523438 23 22 23 C 21.476563 23 20.941406 23.183594 20.5625 23.5625 C 20.449219 23.675781 20.484375 23.863281 20.40625 24 L 11.59375 24 C 11.515625 23.863281 11.550781 23.675781 11.4375 23.5625 C 11.058594 23.183594 10.523438 23 10 23 C 9.476563 23 8.941406 23.183594 8.5625 23.5625 C 8.449219 23.675781 8.484375 23.863281 8.40625 24 L 5 24 Z M 12 10 C 9.800781 10 8 11.800781 8 14 C 8 15.113281 8.476563 16.117188 9.21875 16.84375 C 7.886719 17.746094 7 19.285156 7 21 L 9 21 C 9 19.34375 10.34375 18 12 18 C 13.65625 18 15 19.34375 15 21 L 17 21 C 17 19.285156 16.113281 17.746094 14.78125 16.84375 C 15.523438 16.117188 16 15.113281 16 14 C 16 11.800781 14.199219 10 12 10 Z M 12 12 C 13.117188 12 14 12.882813 14 14 C 14 15.117188 13.117188 16 12 16 C 10.882813 16 10 15.117188 10 14 C 10 12.882813 10.882813 12 12 12 Z M 19 13 L 19 15 L 25 15 L 25 13 Z M 19 17 L 19 19 L 25 19 L 25 17 Z" /></svg>;
export const Trophy = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 7 4 C 6.058594 4 5.085938 4.355469 4.3125 5.03125 C 3.539063 5.707031 3 6.746094 3 8 C 3 9.0625 3.445313 9.96875 4 10.6875 C 4.554688 11.40625 5.226563 11.972656 5.84375 12.53125 C 7.078125 13.648438 8 14.566406 8 16 C 8 16.152344 7.851563 16.519531 7.65625 16.8125 C 7.460938 17.105469 7.28125 17.28125 7.28125 17.28125 L 8.71875 18.6875 C 8.71875 18.6875 9.039063 18.367188 9.34375 17.90625 C 9.605469 17.511719 9.890625 17.003906 9.96875 16.34375 C 10.082031 16.667969 10.191406 17 10.3125 17.3125 C 11 19.085938 11.792969 20.675781 12.6875 21.875 C 13.011719 22.3125 13.347656 22.699219 13.71875 23.03125 C 11.652344 23.179688 10 24.898438 10 27 L 10 28 L 22 28 L 22 27 C 22 24.875 20.316406 23.148438 18.21875 23.03125 C 18.59375 22.699219 18.953125 22.308594 19.28125 21.875 C 20.179688 20.679688 20.960938 19.085938 21.65625 17.3125 C 21.785156 16.980469 21.910156 16.625 22.03125 16.28125 C 22.097656 16.96875 22.386719 17.5 22.65625 17.90625 C 22.960938 18.367188 23.28125 18.6875 23.28125 18.6875 L 24.71875 17.28125 C 24.71875 17.28125 24.539063 17.105469 24.34375 16.8125 C 24.148438 16.519531 24 16.152344 24 16 C 24 14.566406 24.921875 13.648438 26.15625 12.53125 C 26.773438 11.972656 27.445313 11.40625 28 10.6875 C 28.554688 9.96875 29 9.0625 29 8 C 29 6.746094 28.460938 5.707031 27.6875 5.03125 C 26.914063 4.355469 25.941406 4 25 4 C 23.722656 4 22.847656 4.582031 22.375 5 L 9.625 5 C 9.152344 4.582031 8.277344 4 7 4 Z M 7 6 C 7.472656 6 7.777344 6.148438 8 6.28125 C 8.027344 8.320313 8.378906 10.632813 8.9375 12.90625 C 8.40625 12.1875 7.742188 11.589844 7.15625 11.0625 C 6.523438 10.492188 5.945313 9.964844 5.5625 9.46875 C 5.179688 8.972656 5 8.542969 5 8 C 5 7.300781 5.273438 6.867188 5.65625 6.53125 C 6.039063 6.195313 6.566406 6 7 6 Z M 25 6 C 25.433594 6 25.960938 6.195313 26.34375 6.53125 C 26.726563 6.867188 27 7.300781 27 8 C 27 8.542969 26.820313 8.972656 26.4375 9.46875 C 26.054688 9.964844 25.476563 10.492188 24.84375 11.0625 C 24.246094 11.601563 23.570313 12.222656 23.03125 12.96875 C 23.605469 10.679688 23.972656 8.347656 24 6.28125 C 24.222656 6.148438 24.527344 6 25 6 Z M 10.125 7 L 21.875 7 C 21.722656 9.972656 20.953125 13.597656 19.78125 16.59375 C 19.132813 18.25 18.382813 19.6875 17.65625 20.65625 C 16.929688 21.625 16.265625 22 15.96875 22 C 15.675781 22 15.035156 21.625 14.3125 20.65625 C 13.589844 19.6875 12.832031 18.253906 12.1875 16.59375 C 11.023438 13.59375 10.277344 9.957031 10.125 7 Z M 15 10 L 15 15 L 17 15 L 17 10 Z M 14 25 L 18 25 C 18.71875 25 19.210938 25.441406 19.5625 26 L 12.4375 26 C 12.789063 25.441406 13.28125 25 14 25 Z" /></svg>;
export const Graduation = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 16 4.875 L 15.53125 5.125 L 2.03125 12.125 L 0.3125 13 L 2 13.84375 L 2 22.28125 C 1.402344 22.628906 1 23.261719 1 24 C 1 25.105469 1.894531 26 3 26 C 4.105469 26 5 25.105469 5 24 C 5 23.261719 4.597656 22.628906 4 22.28125 L 4 14.875 L 6 15.90625 L 6 21 C 6 21.441406 6.203125 21.839844 6.4375 22.09375 C 6.671875 22.347656 6.957031 22.5 7.25 22.65625 C 7.839844 22.964844 8.539063 23.183594 9.40625 23.375 C 11.140625 23.761719 13.453125 24 16 24 C 18.546875 24 20.859375 23.761719 22.59375 23.375 C 23.460938 23.183594 24.160156 22.964844 24.75 22.65625 C 25.042969 22.5 25.328125 22.347656 25.5625 22.09375 C 25.796875 21.839844 26 21.441406 26 21 L 26 15.90625 L 29.96875 13.875 L 31.6875 13 L 29.96875 12.125 L 16.46875 5.125 Z M 16 7.125 L 27.3125 13 L 25.53125 13.90625 C 25.304688 13.667969 25.03125 13.492188 24.75 13.34375 C 24.164063 13.035156 23.460938 12.816406 22.59375 12.625 C 20.863281 12.238281 18.558594 12 16 12 C 13.441406 12 11.136719 12.238281 9.40625 12.625 C 8.539063 12.816406 7.835938 13.035156 7.25 13.34375 C 6.96875 13.492188 6.695313 13.667969 6.46875 13.90625 L 4.6875 13 Z M 16 14 C 18.441406 14 20.636719 14.222656 22.15625 14.5625 C 22.914063 14.730469 23.523438 14.925781 23.84375 15.09375 C 23.945313 15.148438 23.960938 15.1875 24 15.21875 L 24 19.03125 C 23.582031 18.878906 23.125 18.742188 22.59375 18.625 C 20.859375 18.238281 18.546875 18 16 18 C 13.453125 18 11.140625 18.238281 9.40625 18.625 C 8.875 18.742188 8.417969 18.878906 8 19.03125 L 8 15.21875 C 8.039063 15.1875 8.054688 15.148438 8.15625 15.09375 C 8.476563 14.925781 9.085938 14.730469 9.84375 14.5625 C 11.363281 14.222656 13.558594 14 16 14 Z M 16 20 C 18.425781 20 20.632813 20.222656 22.15625 20.5625 C 22.789063 20.703125 23.1875 20.851563 23.53125 21 C 23.1875 21.148438 22.789063 21.296875 22.15625 21.4375 C 20.632813 21.777344 18.425781 22 16 22 C 13.574219 22 11.367188 21.777344 9.84375 21.4375 C 9.210938 21.296875 8.8125 21.148438 8.46875 21 C 8.8125 20.851563 9.210938 20.703125 9.84375 20.5625 C 11.367188 20.222656 13.574219 20 16 20 Z" /></svg>;
export const Book = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 16 4 C 12.699219 4 10 6.699219 10 10 C 10 11.007813 10.246094 11.945313 10.6875 12.78125 C 8.863281 12.335938 6.640625 12 4 12 L 2.71875 12 L 6.21875 26 L 7 26 C 10.40625 26 12.5 26.488281 13.71875 26.9375 C 14.328125 27.164063 14.714844 27.386719 14.9375 27.53125 C 15.160156 27.675781 15.1875 27.6875 15.1875 27.6875 L 15.46875 28 L 16.53125 28 L 16.8125 27.6875 C 16.8125 27.6875 16.839844 27.675781 17.0625 27.53125 C 17.285156 27.386719 17.671875 27.164063 18.28125 26.9375 C 19.5 26.488281 21.59375 26 25 26 L 25.78125 26 L 29.28125 12 L 28 12 C 25.371094 12 23.152344 12.316406 21.34375 12.75 C 21.773438 11.925781 22 10.992188 22 10 C 22 6.699219 19.300781 4 16 4 Z M 16 6 C 18.222656 6 20 7.777344 20 10 C 20 12.222656 18.222656 14 16 14 C 13.777344 14 12 12.222656 12 10 C 12 7.777344 13.777344 6 16 6 Z M 5.3125 14.125 C 8.421875 14.277344 10.960938 14.816406 12.625 15.4375 C 13.964844 15.9375 14.625 16.324219 15 16.5625 L 15 25.3125 C 14.820313 25.230469 14.65625 25.144531 14.4375 25.0625 C 13.085938 24.5625 10.867188 24.140625 7.78125 24.0625 Z M 26.6875 14.125 L 24.21875 24.0625 C 21.132813 24.140625 18.914063 24.5625 17.5625 25.0625 C 17.34375 25.144531 17.179688 25.230469 17 25.3125 L 17 16.5625 C 17.375 16.320313 18.03125 15.929688 19.34375 15.4375 C 20.996094 14.816406 23.539063 14.277344 26.6875 14.125 Z" /></svg>;
export const Hand = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 19.3125 6.96875 C 18.757813 6.972656 18.207031 7 17.625 7.15625 C 17.042969 7.3125 16.460938 7.5625 15.84375 7.96875 C 15.078125 7.519531 14.335938 7.148438 13.625 7.0625 C 12.742188 6.953125 11.921875 7.011719 10.96875 7.03125 C 9.839844 7.054688 9.101563 7.632813 7.90625 8.09375 C 6.710938 8.554688 5.171875 9 3 9 L 2 9 L 2 18.625 L 2.5625 18.90625 L 4.40625 19.8125 L 10.96875 27.125 L 11 27.15625 C 11.75 27.898438 12.761719 28.082031 13.65625 28.03125 C 14.550781 27.980469 15.390625 27.71875 16.0625 27.3125 C 17.539063 26.421875 21.5625 23.625 21.5625 23.625 L 21.65625 23.5625 L 21.71875 23.5 C 22.195313 23.027344 22.433594 22.449219 22.59375 21.84375 L 26.4375 19.90625 L 29.3125 18.9375 L 30 18.71875 L 30 9 L 29 9 C 26.832031 9 25.289063 8.53125 24.09375 8.0625 C 22.898438 7.59375 22.171875 7.023438 21.03125 7 C 20.421875 6.988281 19.867188 6.964844 19.3125 6.96875 Z M 19.34375 8.96875 C 19.792969 8.964844 20.3125 8.988281 20.96875 9 C 21.074219 9.003906 22.035156 9.414063 23.375 9.9375 C 24.507813 10.382813 26.082031 10.777344 28 10.90625 L 28 17.28125 L 25.6875 18.0625 L 25.625 18.0625 L 25.5625 18.09375 L 22.53125 19.625 C 22.363281 19.167969 22.132813 18.746094 21.78125 18.375 L 21.71875 18.28125 L 17.46875 13.0625 L 16.84375 12.28125 L 16.0625 12.90625 L 13.375 15.09375 C 12.472656 15.71875 11.742188 15.539063 11 15.1875 C 10.785156 15.085938 10.796875 15.054688 10.625 14.9375 L 15.1875 11.15625 L 15.25 11.09375 C 16.605469 9.75 17.4375 9.285156 18.15625 9.09375 C 18.515625 8.996094 18.894531 8.972656 19.34375 8.96875 Z M 12.375 9 C 12.757813 8.992188 13.078125 8.996094 13.375 9.03125 C 13.636719 9.0625 13.933594 9.285156 14.1875 9.375 C 14.085938 9.46875 14.011719 9.523438 13.90625 9.625 C 13.882813 9.648438 13.867188 9.664063 13.84375 9.6875 L 8.375 14.21875 L 7.53125 14.90625 L 8.28125 15.6875 C 8.28125 15.6875 9.003906 16.46875 10.125 17 C 11.246094 17.53125 12.976563 17.832031 14.53125 16.75 L 14.59375 16.6875 L 16.53125 15.09375 L 20.21875 19.625 L 20.25 19.6875 L 20.28125 19.71875 C 20.941406 20.371094 20.925781 21.398438 20.28125 22.0625 C 20.273438 22.070313 20.289063 22.085938 20.28125 22.09375 C 20.273438 22.097656 20.140625 22.175781 20.125 22.1875 L 18.8125 20.40625 L 17.1875 21.59375 L 18.46875 23.3125 C 17.949219 23.664063 17.714844 23.847656 17.15625 24.21875 L 15.8125 22.40625 L 14.1875 23.59375 L 15.46875 25.3125 C 15.355469 25.382813 15.121094 25.539063 15.03125 25.59375 C 14.714844 25.785156 14.105469 26 13.5625 26.03125 C 13.050781 26.058594 12.660156 25.941406 12.46875 25.78125 L 12.4375 25.75 L 5.75 18.34375 L 5.625 18.1875 L 4 17.375 L 4 10.90625 C 5.910156 10.78125 7.496094 10.402344 8.625 9.96875 C 9.960938 9.457031 10.914063 9.035156 11.03125 9.03125 C 11.542969 9.019531 11.992188 9.007813 12.375 9 Z" /></svg>;
export const Address = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 3 6 L 3 26 L 29 26 L 29 6 Z M 5 8 L 27 8 L 27 24 L 23.59375 24 C 23.515625 23.863281 23.550781 23.675781 23.4375 23.5625 C 23.058594 23.183594 22.523438 23 22 23 C 21.476563 23 20.941406 23.183594 20.5625 23.5625 C 20.449219 23.675781 20.484375 23.863281 20.40625 24 L 11.59375 24 C 11.515625 23.863281 11.550781 23.675781 11.4375 23.5625 C 11.058594 23.183594 10.523438 23 10 23 C 9.476563 23 8.941406 23.183594 8.5625 23.5625 C 8.449219 23.675781 8.484375 23.863281 8.40625 24 L 5 24 Z M 12 10 C 9.800781 10 8 11.800781 8 14 C 8 15.113281 8.476563 16.117188 9.21875 16.84375 C 7.886719 17.746094 7 19.285156 7 21 L 9 21 C 9 19.34375 10.34375 18 12 18 C 13.65625 18 15 19.34375 15 21 L 17 21 C 17 19.285156 16.113281 17.746094 14.78125 16.84375 C 15.523438 16.117188 16 15.113281 16 14 C 16 11.800781 14.199219 10 12 10 Z M 12 12 C 13.117188 12 14 12.882813 14 14 C 14 15.117188 13.117188 16 12 16 C 10.882813 16 10 15.117188 10 14 C 10 12.882813 10.882813 12 12 12 Z M 19 13 L 19 15 L 25 15 L 25 13 Z M 19 17 L 19 19 L 25 19 L 25 17 Z" /></svg>
export const HandMoney = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 17 4 L 17 5.1894531 C 16.855 5.2419531 16.714063 5.3061133 16.580078 5.3789062 C 16.312109 5.5244922 16.069141 5.7085547 15.857422 5.9238281 C 15.645703 6.1391016 15.465391 6.3846484 15.326172 6.6542969 C 15.117344 7.0587695 15 7.51625 15 8 C 15 8.205 15.022109 8.4054688 15.0625 8.5996094 C 15.143281 8.9878906 15.300547 9.3503906 15.517578 9.6699219 C 15.626094 9.8296875 15.748516 9.9789844 15.884766 10.115234 C 16.021016 10.251484 16.170313 10.373906 16.330078 10.482422 C 16.809375 10.807969 17.385 11 18 11 C 18.1425 11 18.276016 11.026953 18.396484 11.076172 C 18.516953 11.125391 18.623516 11.197734 18.712891 11.287109 C 18.802266 11.376484 18.874609 11.483047 18.923828 11.603516 C 18.973047 11.723984 19 11.8575 19 12 C 19 12.4275 18.757891 12.776172 18.396484 12.923828 C 18.276016 12.973047 18.1425 13 18 13 C 17.8575 13 17.723984 12.973047 17.603516 12.923828 C 17.483047 12.874609 17.376484 12.802266 17.287109 12.712891 C 17.197734 12.623516 17.125391 12.516953 17.076172 12.396484 C 17.026953 12.276016 17 12.1425 17 12 L 15 12 C 15 12.16125 15.013828 12.320254 15.039062 12.474609 C 15.064297 12.628965 15.1 12.778281 15.148438 12.923828 C 15.29375 13.360469 15.539844 13.753262 15.857422 14.076172 C 15.963281 14.183809 16.076328 14.283828 16.197266 14.375 C 16.318203 14.466172 16.446094 14.548301 16.580078 14.621094 C 16.714063 14.693887 16.855 14.758047 17 14.810547 L 17 16 L 19 16 L 19 14.810547 C 20.16 14.390547 21 13.29 21 12 C 21 10.565 19.958594 9.3452344 18.599609 9.0625 C 18.405469 9.0221094 18.205 9 18 9 C 17.8575 9 17.723984 8.9730469 17.603516 8.9238281 C 17.483047 8.8746094 17.376484 8.8022656 17.287109 8.7128906 C 17.197734 8.6235156 17.125391 8.5169531 17.076172 8.3964844 C 17.026953 8.2760156 17 8.1425 17 8 C 17 7.8575 17.026953 7.7239844 17.076172 7.6035156 C 17.125391 7.4830469 17.197734 7.3764844 17.287109 7.2871094 C 17.465859 7.1083594 17.715 7 18 7 C 18.57 7 19 7.43 19 8 L 21 8 C 21 7.83875 20.986172 7.6797461 20.960938 7.5253906 C 20.935703 7.3710352 20.9 7.2217187 20.851562 7.0761719 C 20.560938 6.2028906 19.87 5.5044531 19 5.1894531 L 19 4 L 17 4 z M 10.515625 18 C 9.484625 18.004 8.6992188 18.265625 8.6992188 18.265625 L 8.6796875 18.273438 L 3.0078125 20.449219 L 4.9921875 26.019531 L 9.921875 24.128906 L 17.058594 28.058594 L 29.382812 22.953125 L 28.617188 21.109375 L 17.179688 25.84375 L 10.078125 21.933594 L 6.1875 23.421875 L 5.546875 21.617188 L 9.34375 20.160156 C 9.35275 20.156156 9.819625 20 10.515625 20 C 11.218625 20 12.038281 20.156062 12.738281 20.789062 L 12.751953 20.796875 L 12.755859 20.800781 C 13.786859 21.695781 14.564484 22.321156 15.646484 22.660156 C 16.728484 23.000156 17.955859 23.03925 20.005859 23.03125 L 19.996094 21.03125 C 17.984094 21.03925 16.933094 20.968 16.246094 20.75 C 15.558094 20.539 15.070125 20.159781 14.078125 19.300781 L 14.066406 19.292969 C 12.909406 18.253969 11.534625 17.996 10.515625 18 z" /></svg>;
export const Laptop = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z" /></svg>;
export const Teacher = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 4 6 L 4 8 L 26 8 L 26 24 L 12 24 L 12 26 L 30 26 L 30 24 L 28 24 L 28 6 L 4 6 z M 8.0019531 9 C 5.8032706 9 4 10.802666 4 13 C 4 15.198683 5.8040743 17 8.0019531 17 C 10.197134 17 12 15.198683 12 13 C 12 10.802666 10.19794 9 8.0019531 9 z M 14 10 L 14 12 L 19 12 L 19 10 L 14 10 z M 21 10 L 21 12 L 24 12 L 24 10 L 21 10 z M 8.0019531 11 C 9.1159662 11 10 11.883334 10 13 C 10 14.119317 9.1167719 15 8.0019531 15 C 6.881832 15 6 14.119317 6 13 C 6 11.883334 6.8826357 11 8.0019531 11 z M 14 14 L 14 16 L 24 16 L 24 14 L 14 14 z M 4 18 L 4 26 L 6 26 L 6 20 L 9 20 L 9 26 L 11 26 L 11 20.658203 L 13.064453 21.75 C 13.648752 22.060158 14.351587 22.058921 14.935547 21.75 L 14.935547 21.751953 L 18.466797 19.884766 L 17.533203 18.115234 L 14.001953 19.982422 L 10.90625 18.347656 C 10.475078 18.120046 9.9935054 18 9.5039062 18 L 4 18 z" /></svg>;
export const Glasses = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 5.0625 6 L 4.8125 6.65625 L 1.3125 16 L 0 16 L 0 18 L 1 18 L 1 20 C 1 23.296875 3.703125 26 7 26 L 9 26 C 12.296875 26 15 23.296875 15 20 L 15 17 C 15 16.433594 15.433594 16 16 16 C 16.566406 16 17 16.433594 17 17 L 17 20 C 17 23.296875 19.703125 26 23 26 L 25 26 C 28.296875 26 31 23.296875 31 20 L 31 18 L 32 18 L 32 16 L 30.6875 16 L 27.1875 6.65625 L 26.9375 6 L 25 6 L 24.71875 6.375 L 22.21875 9.375 L 23.78125 10.625 L 25.6875 8.3125 L 28.5625 16 L 18.8125 16 C 18.394531 14.84375 17.292969 14 16 14 C 14.707031 14 13.605469 14.84375 13.1875 16 L 3.4375 16 L 6.3125 8.3125 L 8.21875 10.625 L 9.78125 9.375 L 7.28125 6.375 L 7 6 Z M 3 18 L 13 18 L 13 20 C 13 22.203125 11.203125 24 9 24 L 7 24 C 4.796875 24 3 22.203125 3 20 Z M 19 18 L 29 18 L 29 20 C 29 22.203125 27.203125 24 25 24 L 23 24 C 20.796875 24 19 22.203125 19 20 Z" /></svg>;
export const Clock = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 13 4 L 13 6 L 19 6 L 19 4 Z M 16 7 C 9.9375 7 5 11.9375 5 18 C 5 24.0625 9.9375 29 16 29 C 22.0625 29 27 24.0625 27 18 C 27 15.082031 25.863281 12.410156 24 10.4375 L 25.71875 8.71875 L 24.28125 7.28125 L 22.46875 9.09375 C 20.65625 7.773438 18.410156 7 16 7 Z M 16 9 C 20.980469 9 25 13.019531 25 18 C 25 22.980469 20.980469 27 16 27 C 11.019531 27 7 22.980469 7 18 C 7 13.019531 11.019531 9 16 9 Z M 15 11 L 15 16.28125 C 14.402344 16.628906 14 17.261719 14 18 C 14 18.738281 14.402344 19.371094 15 19.71875 L 15 21 L 17 21 L 17 19.71875 C 17.597656 19.371094 18 18.738281 18 18 C 18 17.261719 17.597656 16.628906 17 16.28125 L 17 11 Z" /></svg>;
export const Users = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 9 7 C 5.699219 7 3 9.699219 3 13 C 3 14.984375 3.976563 16.75 5.46875 17.84375 C 2.832031 19.152344 1 21.863281 1 25 L 3 25 C 3 21.675781 5.675781 19 9 19 C 12.324219 19 15 21.675781 15 25 L 17 25 C 17 21.675781 19.675781 19 23 19 C 26.324219 19 29 21.675781 29 25 L 31 25 C 31 21.863281 29.167969 19.152344 26.53125 17.84375 C 28.023438 16.75 29 14.984375 29 13 C 29 9.699219 26.300781 7 23 7 C 19.699219 7 17 9.699219 17 13 C 17 14.984375 17.976563 16.75 19.46875 17.84375 C 18.011719 18.566406 16.789063 19.707031 16 21.125 C 15.210938 19.707031 13.988281 18.566406 12.53125 17.84375 C 14.023438 16.75 15 14.984375 15 13 C 15 9.699219 12.300781 7 9 7 Z M 9 9 C 11.222656 9 13 10.777344 13 13 C 13 15.222656 11.222656 17 9 17 C 6.777344 17 5 15.222656 5 13 C 5 10.777344 6.777344 9 9 9 Z M 23 9 C 25.222656 9 27 10.777344 27 13 C 27 15.222656 25.222656 17 23 17 C 20.777344 17 19 15.222656 19 13 C 19 10.777344 20.777344 9 23 9 Z" /></svg>;
export const Comments = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 2 5 L 2 21 L 6 21 L 6 26.09375 L 7.625 24.78125 L 12.34375 21 L 22 21 L 22 5 Z M 4 7 L 20 7 L 20 19 L 11.65625 19 L 11.375 19.21875 L 8 21.90625 L 8 19 L 4 19 Z M 24 9 L 24 11 L 28 11 L 28 23 L 24 23 L 24 25.90625 L 20.34375 23 L 12.84375 23 L 10.34375 25 L 19.65625 25 L 26 30.09375 L 26 25 L 30 25 L 30 9 Z" /></svg>;
export const ArrowRight = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 18.71875 6.78125 L 17.28125 8.21875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 17.28125 23.78125 L 18.71875 25.21875 L 27.21875 16.71875 L 27.90625 16 L 27.21875 15.28125 Z" /></svg>;
export const AngleDown = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 4.21875 10.78125 L 2.78125 12.21875 L 15.28125 24.71875 L 16 25.40625 L 16.71875 24.71875 L 29.21875 12.21875 L 27.78125 10.78125 L 16 22.5625 Z" /></svg>;
export const AngleLeft = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 19.03125 4.28125 L 8.03125 15.28125 L 7.34375 16 L 8.03125 16.71875 L 19.03125 27.71875 L 20.46875 26.28125 L 10.1875 16 L 20.46875 5.71875 Z" /></svg>;
export const AngleRight = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 12.96875 4.28125 L 11.53125 5.71875 L 21.8125 16 L 11.53125 26.28125 L 12.96875 27.71875 L 23.96875 16.71875 L 24.65625 16 L 23.96875 15.28125 Z" /></svg>;
export const AngleUp = props => <svg width={props.width} height={props.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path stroke={props.color} fill={props.fill} d="M 16 6.59375 L 15.28125 7.28125 L 2.78125 19.78125 L 4.21875 21.21875 L 16 9.4375 L 27.78125 21.21875 L 29.21875 19.78125 L 16.71875 7.28125 Z" /></svg>;

export const RoundImage = styled.div`
    background-image: url(${props => props.url} );
    margin-bottom: ${props => props.mb};
    background-repeat: no-repeat;
    background-size:${props => props.bsize};
    border-radius: ${props => props.border};
    background-position: 95% 50%;
    background-color: white;
    width: 100%;  
    height: ${props => props.height};
    ${props => props.move &&
        css`
        transform: translateY(-${props => props.up});
    `}
`
export const Button = styled.div`
    border-radius: 50rem;
    background-color: ${props => props.color};
    color: ${props => props.textColor};
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    padding: 0.5rem 0.85rem;
    font-size: .5rem;
    line-height: 1.5;
    margin: 1.5rem;
    font-weight: 500;
`
