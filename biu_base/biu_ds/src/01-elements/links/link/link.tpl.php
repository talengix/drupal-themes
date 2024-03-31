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

$options = array();
$options['attributes']['class'] = bem($link_base_class, $link_modifiers, $link_blockname, $link_extra_classes);
if ($link_content != strip_tags($link_content)) {
  $options['html'] = TRUE;
}

/**
 * l($text, $path, $options = array())
 *
 * <a class="card__link card__link--standard arrowed" href="/journals">
 * <span class="card__link-text card__link-text--standard">
 * לכל כתבי העת
 * </span>
 * </a>
 */
?>

<?php print l($link_content, $link_url, $options); ?>

