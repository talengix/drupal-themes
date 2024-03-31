/**
 * Foundation for lottie animations. Supports also multiple animations in page.
 * Require structure:
 * <div class="animation-container" data-src="/themes/custom/biu_base/assets/animations/arrow.json"></div>
 */
var anims = [];

/**
 * Play the anim and switch direction.
 */
function playAnim() {
  var animIndex;
  for (var i = 0, l = this.classList.length; i < l; ++i) {
    if (this.classList[i].startsWith('anim-')) {
      animIndex = this.classList[i].substr(5);
    }
  }
  var anim = anims[animIndex];
  // First play and then change direction.
  anim.play();
  anim.setDirection(anim.playDirection * -1);
}

/**
 * Add animations to the given containers.
 * @param array animContainer
 *   The new containers.
 */
Drupal.updateLottie = function (animContainer) {
  var animation, elem;
  var animsLength = anims.length;
  for (var i = animsLength; i < animContainer.length +animsLength; i++) {
    elem = animContainer[i -  animsLength];
    elem.classList.add('anim-' + i);
    animation = bodymovin.loadAnimation({
      wrapper: elem,
      renderer: "svg",
      loop: false,
      autoplay: false,
      prerender: true,
      path: elem.dataset.src,
    });
    animation.setDirection(-1);
    anims[i] = animation;
    elem.addEventListener("mouseenter", playAnim);
    elem.addEventListener("mouseleave", playAnim);
  }
}

Drupal.behaviors.lottieAnimations = {
  attach(context) {
    if (context instanceof HTMLDocument) {
      var animContainer = document.getElementsByClassName('animation-container');
      Drupal.updateLottie(animContainer);
    }
  }
};
