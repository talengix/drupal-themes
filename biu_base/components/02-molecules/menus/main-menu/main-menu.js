Drupal.behaviors.mainMenu = {
  attach(context) {
    if (context instanceof HTMLDocument) {
      const toggleExpand = context.getElementById('toggle-expand');
      const menu = context.getElementById('main-nav');
      const mainToggleExpand = context.getElementById('main-toggle-expand');
      const sidebarMenu = context.getElementById('main-menu-sidebar');
      if (menu) {
        const expandMenu = menu.getElementsByClassName('expand-sub');

        // Mobile Menu Show/Hide.
        toggleExpand.addEventListener('click', e => {
          e.currentTarget.classList.toggle('toggle-expand--open');
          e.currentTarget.nextElementSibling.classList.toggle('main-nav--open');
          e.preventDefault();
        });

        // Expose mobile sub menu on click.
        for (let i = 0; i < expandMenu.length; i += 1) {
          expandMenu[i].addEventListener('click', e => {
            const menuItem = e.currentTarget;
            const subMenu = menuItem.nextElementSibling;

            menuItem.classList.toggle('expand-sub--open');
            subMenu.classList.toggle('main-menu--sub-open');
          });
        }
        const menuExpand = menu.getElementsByClassName('main-menu__icon_list');
        for (let i = 0; i < menuExpand.length; i += 1) {
          menuExpand[i].addEventListener('click', e => {
            const menuExpandItem = e.currentTarget;
            menuExpandItem.nextElementSibling.classList.toggle('sub-menu-expand');
            menuExpandItem.parentElement.classList.toggle('sub-menu-expand-parent');
          });
        }
      }
      // Sidebar Menu Show/Hide.
      if (sidebarMenu) {
        const mainExpandMenu = sidebarMenu.getElementsByClassName('expand-sub');
        mainToggleExpand.addEventListener('click', e => {
          mainToggleExpand.classList.toggle('toggle-expand--open');
          sidebarMenu.classList.toggle('main-nav--open');
          sidebarMenu.parentElement.classList.toggle('nav-open');
          document.getElementsByTagName('body')[0].classList.toggle('overflow-hidden');
          e.preventDefault();
        });

        // Expose mobile sub menu on click.
        for (let i = 0; i < mainExpandMenu.length; i += 1) {
          mainExpandMenu[i].addEventListener('click', e => {
            const mainMenuItem = e.currentTarget;
            const MainSubMenu = mainMenuItem.nextElementSibling;

            mainMenuItem.classList.toggle('expand-sub--open');
            MainSubMenu.classList.toggle('main-menu--sub-open');
          });
        }

        const menuExpand = sidebarMenu.getElementsByClassName('main-menu__icon_list');
        for (let i = 0; i < menuExpand.length; i += 1) {
          menuExpand[i].addEventListener('click', e => {
            const menuExpandItem = e.currentTarget;
            menuExpandItem.nextElementSibling.classList.toggle('sub-menu-expand');
            menuExpandItem.parentElement.classList.toggle('sub-menu-expand-parent');
          });
        }
      }
    }
  },
};
