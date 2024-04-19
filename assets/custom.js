if (!customElements.get('collection-submenu')) {
    customElements.define(
      'collection-submenu',
      class CollectionSubmenu extends HTMLElement {
        constructor() {
          super();
          const headers = document.querySelectorAll('.collection-submenu__heading');
          headers.forEach(header => {
            header.addEventListener('click', this.toggleTab);
          });
        }

        toggleTab() {
            const tab = this.dataset.tab;
            document.querySelectorAll('.collection-submenu__heading').forEach(link => {
                if(link.dataset.tab == tab) link.classList.add('active');
                else link.classList.remove('active');
            });
            document.querySelectorAll('.collection-submenu__products').forEach(link => {
                if(link.dataset.tab == tab) link.classList.add('active');
                else link.classList.remove('active');
            });
        }
      }
    );
  }