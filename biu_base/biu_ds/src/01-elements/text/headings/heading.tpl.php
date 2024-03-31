<?php 
/**
 * Available variables:
 * - heading_level - the header level 1-6 (produces h1, h2, etc.)
 *
 * - heading_base_class - the base class
 * - heading_modifiers - array of modifiers to add to the base classname
 * - heading_blockname - blockname prepended to the base classname
 * - heading__additional_classes - array of exta classes
 *
 * - heading - the content of the heading (typically text)
 *
 * - heading_url - (optional) the url the heading should poing to
 * - heading_link_attributes - key/value attributes to pass to link
 * - heading_link_base_class - override the link base class
 * - heading_link_modifiers - override the link modifiers
 * - heading_link_blockname - override the link block name (defaults to heading_base_class)
 */
?>

<?php
if (empty($heading)) {
  $heading = 'Heading demo text';
}
if (empty($heading_level)) {
  $heading_level = '3';
}
if (empty($heading_base_class)) {
  $heading_base_class = 'heading';
}
if (!isset($heading_is_div)) {
  $heading_is_div = FALSE;
}
if (empty($heading_base_class)) {
  $heading_base_class = 'heading';
}
if (!isset($heading_modifiers)){
  $heading_modifiers = array();
}
if (!isset($heading_blockname)){
  $heading_blockname = '';
}
if (!isset($heading__additional_classes)){
  $heading__additional_classes = array();
}
if (!isset($heading_url)){
  $heading_url = '';
}
if (empty($heading_base_class)) {
  $heading_link_base_class = '';
}
if (!isset($heading_link_modifiers)){
  $heading_link_modifiers = array();
}
if (!isset($heading_link_attributes)){
  $heading_link_attributes = array();
}
if (!isset($heading_link_blockname)) {
  $heading_link_blockname = '';
}
?>

<?php if ($heading_is_div): ?>
  <div role="heading" aria-level="<?php print $heading_level ?>" class="<?php print bem($heading_base_class, $heading_modifiers, $heading_blockname, $heading__additional_classes) ?>">
      <?php print $heading ?>
  </div>
<?php else : ?>
  <h<?php print $heading_level ?> class="<?php print bem('heading', $heading_modifiers, $heading_blockname, $heading_additional_classes) ?>">
      <?php print $heading ?>
  </h<?php print $heading_level ?>>
<?php endif?>
