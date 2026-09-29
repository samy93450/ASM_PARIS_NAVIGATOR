'use strict';

const { contextBridge } = require('electron');

// API Electron minimale, explicite et sécurisée.
// Elle permet aux vérificateurs Electron de confirmer que le preload
// est bien actif tout en n'exposant aucun accès Node.js dangereux.
contextBridge.exposeInMainWorld('asmAPI', Object.freeze({
  preloadReady: true,
  appName: 'ASM Paris Navigator'
}));
