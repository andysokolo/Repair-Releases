'use strict';
const match = /^\/a\/([A-Za-z0-9_-]{43})$/.exec(location.pathname);
const button = document.getElementById('open');
if (match && !location.search && !location.hash) {
  button.href = `com.repair.app://asset/${match[1]}`;
  button.hidden = false;
} else {
  document.getElementById('message').textContent = 'Scan a RepAIr asset label to open its service log. A permitted workspace account is required.';
}
