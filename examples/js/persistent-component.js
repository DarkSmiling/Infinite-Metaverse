AFRAME.registerComponent('persistent', {

  schema: {
    template: { default: 'left' }
  },

init: function () {
  const addNetworkedComponent = () => {
    this.el.setAttribute('networked',
      { template: '#vxr-obj-template',
        attachTemplateToLocal: true,
        networkId: this.el.id,
        persistent: true,
        owner: 'handsvive'
      }
      
    );
    console.log("from tst");

      let x = document.getElementsByClassName("vxr-interact");
      for (let i=0; i<x.length; ++i) {
        x[i].setAttribute("dynamic-body", "")
        console.log("setted")
      }



    NAF.utils
      .getNetworkedEntity(this.el)
      .then(networkedEl => {
        this.networkedEl = networkedEl;
      })
      .catch(() => {
        // Non- 

      });
  };
  // In some cases, NAF.schemas may not be populated yet
  // (this init is executed before the DOMContentLoaded listener where we call registerNetworkSchemas to register the schemas),
  // so adding networked component in init may result in the component
  // using wrong default schema position/rotation, so we wait for scene loaded that comes after DOMContentLoaded event
    if (this.el.sceneEl.hasLoaded) {
      console.log("scene loaded, and added component.")
      addNetworkedComponent();
    } else {
      this.el.sceneEl.addEventListener('loaded', addNetworkedComponent);
    
    }
  },
  someHandler: function(somevalue) {
    this.el.setAttribute("somecomponent", {someattr: somevalue});
    // take ownership so the change propagates to other users
    if (NAF.connection.adapter && this.networkedEl && !NAF.utils.isMine(this.networkedEl)) {
      NAF.utils.takeOwnership(this.networkedEl);
    }
  },
})