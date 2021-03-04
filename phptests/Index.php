<?php

$mydata='Variables declaration in PHP';
echo $mydata;
header("Location: index.html"); /* Redirect browser */
// Call PHP Script from javascript
?>
<?php

/* Make sure that code below does not get executed when we redirect. */
exit;
?>
<script type="text/javascript">
	console.log("<?php echo $mydata?>");
</script>


