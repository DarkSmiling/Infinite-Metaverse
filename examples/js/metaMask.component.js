AFRAME.registerComponent('login', {
  init: function () {
    const el = this.el;
    const component = this;

    component.connectWallet();

    // el.addEventListener('click', function () {
    //   component.connectWallet();
    // })
  },
  connectWallet: async function () {
    const userLogged = JSON.parse(window.localStorage.getItem('logged'));
    const el = this.el;

    if (!window.ethereum) {
      console.log("Metamask is not installed");
      setTimeout(function () {
        console.log("Metamask is not installed");
      }, 4000);
      return;
    }

    if (userLogged) {
      console.log("Logged")
    }
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];

      if(account) {
        console.log("Login successful");
        setTimeout(function () {
          console.log("Login successful");
        }, 4000);
        window.localStorage.setItem('logged', JSON.stringify(true));
        window.localStorage.setItem('account', JSON.stringify(account));

      } else {
        console.log("Problem to login");
        setTimeout(function () {
          console.log("Problem to login");
        }, 4000);
      }
    } catch (err) {
        console.log("Problem to login");
        setTimeout(function () {
          console.log("Problem to login");
        }, 4000);
    }
    // this.el.setAttribute('class', 'clickable');
    // player.object3D.parent.el.setAttribute('movement-controls', 'enabled: true');
  }
})