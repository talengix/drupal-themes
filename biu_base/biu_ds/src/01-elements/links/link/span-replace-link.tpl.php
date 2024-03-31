<?php
/**
 * Available variables:
 * - link_content - the content of the link (typically text)
 * - link_url - the url this link should poing to
 * - link_attributes - array of attribute,value pairs
 * - link_base_class - the base class name
 * - link_modifiers - array of modifiers to add to the base classname
 * - link_blockname - blockname prepended to the base classname
 *
 * Available blocks:
 * - link_content - used to replace the content of the link
 *     Example: to insert the image component
 */

if (empty($link_base_class)) {
  $link_base_class = 'link';
}

if (!isset($link_modifiers)) {
  $link_modifiers = array();
}

if (!isset($link_blockname)) {
  $link_blockname = '';
}
if (!isset($link_extra_classes)) {
  $link_extra_classes = array();
}

?>

 <span class="<?php print bem($link_base_class, $link_modifiers, $link_blockname, $link_extra_classes) ?>" >
    <?php print $link_content ?>
</span>
