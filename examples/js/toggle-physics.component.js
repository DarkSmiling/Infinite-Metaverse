let varBool = false;

AFRAME.registerComponent('toggle-physics', {
  schema: {
//    speed: { default: 0.01 },
  },

  init() {

    var that = this;
    this.ownerShip = this.ownerShip.bind(this);
    document.addEventListener('collisions', this.ownerShip);    

    NAF.utils.getNetworkedEntity(this.el).then((el) => {
      if (NAF.utils.isMine(el)) {
        that.el.setAttribute('dynamic-body', '');
      } else {
        that.el.setAttribute('static-body', '');
      }

      el.addEventListener('ownership-gained', e => { 
        
      });

      el.addEventListener('ownership-lost', e => {
        console.log("ownership-lost")
        this.el.removeAttribute('dynamic-body');
        this.el.setAttribute('static-body', '');
      });

      el.addEventListener('ownership-changed', e => {
        if (e.detail.newOwner == NAF.clientId) {
          //same as listening to 'ownership-gained'
        } else if (e.detail.oldOwner == NAF.clientId) { 
          //same as listening to 'ownership-lost'
        } else {           
        }
      });
    });
  },

  ownerShip(e) {
    if (e.detail.els.indexOf(this.el) >= 0) {
      if (NAF.utils.takeOwnership(this.el)) {
        console.log(NAF.utils.takeOwnership)
        console.log(NAF.utils.getNetworkedEntity(this.el))
        console.log("object to change ownership", this.el)
        this.el.removeAttribute('static-body');
        this.el.setAttribute('dynamic-body', '');
      }
    } else {
    }
  },
});