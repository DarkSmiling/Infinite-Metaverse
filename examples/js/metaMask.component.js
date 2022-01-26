AFRAME.registerComponent('panel-log-actions', {
  init: function () {
    const el = this.el;
    const component = this;

    window.addEventListener('keypress', async function (e) {
      if (e.code !== 'KeyR') return;
      if (!playerCollideWithClickable) return;
      if (currentClickable !== el.id) return;

      component.connectWallet();
    });

    el.addEventListener('click', function () {
      component.connectWallet();
    })
  },
  connectWallet: async function () {
    const userLogged = JSON.parse(window.localStorage.getItem('logged'));
    const el = this.el;

    if (!window.ethereum) {
      this.el.setAttribute('show-panel-message', "message: Metamask is not installed.\n Please try again; panelWidth: 1.5; panelHeight: 0.6; position: 0 1.8 0.1; wrapCount: 30");
      setTimeout(function () {
        el.removeAttribute('show-panel-message');
      }, 4000);
      return;
    }

    if (userLogged) {
      this.el.setAttribute('show-panel-message', "message: You're already logged; panelWidth: 1.5; panelHeight: 0.6; position: 0 1.8 0.1; wrapCount: 22");
      setTimeout(function () {
        el.removeAttribute('show-panel-message');
      }, 4000);
      return;
    }

    this.el.removeAttribute('class');
    player.object3D.parent.el.setAttribute('movement-controls', 'enabled: false');

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];

      if(account) {
        this.el.setAttribute('show-panel-message', "message: Login successful; panelWidth: 1.5; panelHeight: 0.6; position: 0 1.8 0.1; wrapCount: 15");
        setTimeout(function () {
          el.removeAttribute('show-panel-message');
        }, 4000);
        window.localStorage.setItem('logged', JSON.stringify(true));
        window.localStorage.setItem('account', JSON.stringify(account));

      } else {
        this.el.setAttribute('show-panel-message', "message: There was a problem.\n Please try again.; panelWidth: 1.2; panelHeight: 0.4; position: 0 1.8 0.1; wrapCount: 20");
        setTimeout(function () {
          el.removeAttribute('show-panel-message');
        }, 4000);
      }
    } catch (err) {
      this.el.setAttribute('show-panel-message', "message: There was a problem.\n Please try again.; panelWidth: 1.5; panelHeight: 0.6; position: 0 1.8 0.1; wrapCount: 20");
      setTimeout(function () {
        el.removeAttribute('show-panel-message');
      }, 4000);
    }
    this.el.setAttribute('class', 'clickable');
    player.object3D.parent.el.setAttribute('movement-controls', 'enabled: true');
  }
})