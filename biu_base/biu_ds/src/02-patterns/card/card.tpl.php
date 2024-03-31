<?php
/*
# Available variables:
# - card__base_class - base classname of the wrapper.
# - card__modifiers - array of modifiers to add to the base classname of the wrapper.
# - card__blockname - blockname prepended to the base classname of the wrapper(s) and each component.
#
# - card__wrapped_with_link - indicates if whole card should be wrapped with link' if so we should reset all other
#                             links potentially live inside in card content.
#                             @TODO, create JS code to perform this in case links somehow creeped into the content.
#
# - card__image__src - the actual image file location.
# - card__image__alt - (optional) the alt text for screen readers and when the image cannot load.
# - card__image__output_image_tag - whether to print the picture element or not.
# - card__image - the markup that contains the image, usually prepared elswere.
#
# - card__body__base_class - hard coded set to card__body.
# - card__body__modifiers - array of modifiers to add to the card__body classname.
# - card__body__blockname - disabled, will not accept external variables.
#                           Intentionally left empty, hard coded to ''
#                           since we manually attached card to body in base class
#
# - card__heading - the content of the title component.
# - card__heading__link - (optional) the url the title should link to. Defaults to card__link_url.
# - card__heading__base_class - base classname of the title component. Defaults to "heading".
# - card__heading__blockname - blockname to add to the base classname of the title - defaults to 'card'.
# - card__heading__modifiers - array of modifiers to add to the base classname of the title.  - defaults to card__modifiers
# - card__heading__link_base_class - base class to add to the title link - defaults to 'heading-link'.
#
# - card__subheading - the content of the subtitle component.
# - card__subheading__link - (optional) the url the subtitle should link to.
# - card__subheading__base_class - base classname of the subtitle component. Defaults to "subheading".
# - card__subheading__modifiers - array of modifiers to add to the base classname of the subtitle. defaults to card__modifiers
#
# - card__content - the content scction of of the card body, below hedings and above read more link.
# - card__content__base_class - base classname of the body component. Defaults to "content" rendered to card__content.
# - card__content__modifiers - array of modifiers to add to the base classname of card__content, defaults to card__modifiers.
#
# - card__link_text - the content of the link component.
# - card__link_url - the url the entire card or its read more  should link to.
# - card__link_base_class - base classname of the link component. Defaults to "link".
# - card__link_blockname - override link blockname. Defaults to card__base_class.
# - card__link_attributes - array of attribute,value pairs for the link attribute.
# - card__link_modifiers - array of modifiers to add to the base classname of the link. defaults to card__modifiers.
#}
*/
//dpm('card start:');
//dpm(get_defined_vars());
$card_args = func_get_args();
$card_called_from = $card_args[0];

$card__base_class = 'card';

//{# We need to make sure card__heading__additional_classes exists
// # because later we need to merge it with another array or add
// # array items. #}
//{% if card__heading__additional_classes is empty %}
//  {% set card__heading__additional_classes = ['heading'] %}
//{% endif %}

$card_html_element = 'div';
$card_href = '';

if (!empty($card__link_url) && $card__wrapped_with_link === TRUE) {
  $card_html_element = 'a';
  $card__heading__link = "";
  $card__subheading__link = "";
  $card__read_more__link = "";
  $card__additional_classes[] = 'card--is-link';
  $card_href = ' href="'. $card__link_url . '" ';
}
$card_classes = bem($card__base_class, $card__modifiers, $card__blockname, $card__additional_classes);
?>

<<?php print $card_html_element . $card_href ?> class="<?php print $card_classes ?>">
<!-- Called from <?php print $card_called_from ?> -->
    <?php // Image ?>
    <?php if (!empty($card__image) || !empty($card__image__src)) : ?>
      <div class="<?php print bem('image', $card__modifiers, 'card') ?>">
        <?php if (!empty($card__image__src)): ?>
          <?php /*
                 @TODO print here the theme_image D6 thing
                <!--            --><?php //include "@elements/images/image/responsive-image.twig" with {
                //              image_blockname: card__base_class,
                //              output_image_tag: card__image__output_image_tag,
                //              image_src: card__image__src,
                //              image_alt: card__image__alt,
                } ;
              */
          ?>
        <?php elseif (!empty($card__image)): ?>
          <?php print $card__image; ?>
        <?php endif; ?>
        <?php if (!empty($card__type_tag)): ?>
          <span class="card__tag"><?php print $card__type_tag; ?></span>
        <?php endif; ?>
      </div><!-- /.card__image -->
    <?php endif; ?>

    <?php //    {# Card Body #} ?>

    <div
      class="<?php print bem('card__body', $card__modifiers, '', $card__body__additional_classes) ?>">
      <?php // {# Heading #} ?>
      <?php
      if (!empty($card__heading)) {
        $heading = $card__heading;
        $heading_level = $card__heading_level;
        $heading_is_div = $card__heading_is_div;
        $heading_modifiers = $card__modifiers;
        $heading__additional_classes = $card__heading__additional_classes;
        $heading_blockname = $card__base_class;

        $heading_tpl_path = $biu_ds_path . '/src/01-elements/text/headings/heading.tpl.php';
        require($heading_tpl_path);
      } ?>

      <?php //  {# Subheading #} ?>
      <?php if (!empty($card__subheading)): ?>
        <?php if ($card__subheading_is_normal_text === TRUE): ?>
          <div class="<?php print bem('subheading', $card__modifiers, $card__base_class, $card__subheading__additional_classes); ?>">
             <?php print $card__subheading; ?>
          </div>
        <?php else: ?>
          <?php
          $heading = $card__subheading;
          $heading_level = $card__subheading_level;
          $heading_is_div = $card__subheading_is_div;
          $heading_modifiers = $card__modifiers;
          $heading__additional_classes = $card__subheading__additional_classes;
          $heading_blockname = $card__base_class;

          $heading_tpl_path = $biu_ds_path . '/src/01-elements/text/headings/heading.tpl.php';
          require($heading_tpl_path);
          ?>
        <?php endif; ?>
      <?php endif; ?>
      <?php //{# Body #} ?>
      <?php if (!empty($card__content)): ?>
        <div
          class="<?php print bem('card__content', $card__modifiers, '', $card__content__additional_classes) ?>">
          <?php print $card__content ?>
        </div>
      <?php endif; ?>

      <?php //{# Read More #} ?>
      <?php if ($card__wrapped_with_link === TRUE): ?>
        <?php // {# Read More text without link #}?>
        <?php if (!empty($card__link_text)) : ?>
          <?php
          $link_blockname = $card__base_class;
          $link_content = $card__link_text;
          //$link_url = $card__link_url;
          $link_modifiers = $card__modifiers;
          $link_extra_classes = array('arrowed');
          $link_text_classes = bem('link-text', $card__modifiers, 'card');
          $link_content = '<span class="' . $link_text_classes . '">' . $link_content . '</span>';

          $span_replace_link_tpl_path = $biu_ds_path . '/src/01-elements/links/link/span-replace-link.tpl.php';
          require($span_replace_link_tpl_path);
          ?>
        <?php endif; ?>
        <?php // {# NOT  is not wrapped with single link #} ?>
      <?php elseif (!empty($card__link_url) && !empty($card__link_text)) :
        $card_footer_classes = bem('footer', $card__modifiers, 'card', $card__footer__additional_classes);
        ?>
        <div class="<?php print $card_footer_classes ?>">
          <?php
          $link_blockname = $card__base_class;
          $link_url = $card__link_url;
          $link_modifiers = $card__modifiers;
          $link_extra_classes = array('arrowed');
          $link_text_classes = bem('link-text', $card__modifiers, 'card');
          $link_content = '<span class="' . $link_text_classes . '">' . $card__link_text . '</span>';
            $link_tpl_path = $biu_ds_path . '/src/01-elements/links/link/link.tpl.php';
            require($link_tpl_path);
            ?>
        </div><!-- /.card-footer -->
      <?php elseif (!empty($card__link)): ?>
        <?php print $card__link ?>
      <?php endif; ?>
      <?php // {# End of normal card div wrapper #} ?>
    </div><!-- /.card__body -->
</<?php print $card_html_element ?>><!-- /.card -->
